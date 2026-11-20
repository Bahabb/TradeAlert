import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";
import app from "../src/app.js";
import { getLatestRecap } from "../src/store/recapStore.js";
import { validAlert, validRecap } from "./fixtures.js";

// Integration tests: send real HTTP requests through the Express app.
// supertest starts the app on a random internal port, so no port 5000 needed.

// A fake Socket.IO server. It records emit() calls instead of sending anything.
function fakeIo() {
  return { emit: vi.fn() };
}

describe("GET /health", () => {
  it("returns 200 with status ok and uptime", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(typeof res.body.uptime).toBe("number");
  });
});

describe("unknown routes", () => {
  it("returns 404 with the standard error body", async () => {
    const res = await request(app).get("/does-not-exist");

    expect(res.status).toBe(404);
    expect(res.body).toEqual({ status: "error", message: "Route not found" });
  });
});

describe("POST /api/bot/alert", () => {
  let io;

  beforeEach(() => {
    io = fakeIo();
    app.set("io", io);
  });

  it("returns 200 and emits botAlert for a valid alert", async () => {
    const res = await request(app).post("/api/bot/alert").send(validAlert());

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Alert received & sent successfully");
    expect(io.emit).toHaveBeenCalledWith("botAlert", validAlert());
  });

  it("returns 400 and emits nothing when a field is missing", async () => {
    const payload = validAlert();
    delete payload.message;

    const res = await request(app).post("/api/bot/alert").send(payload);

    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Validation failed");
    expect(io.emit).not.toHaveBeenCalled();
  });

  // Regression test for the bug where this route validated against the recap
  // schema, so real alerts were rejected.
  it("accepts an alert that the recap schema would reject", async () => {
    const res = await request(app).post("/api/bot/alert").send(validAlert());

    expect(res.status).toBe(200);
  });

  it("returns 400 when Socket.IO is not attached to the app", async () => {
    app.set("io", undefined);

    const res = await request(app).post("/api/bot/alert").send(validAlert());

    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(/failed to send to frontend/);
  });
});

describe("POST /api/bot/recap", () => {
  let io;

  beforeEach(() => {
    io = fakeIo();
    app.set("io", io);
  });

  it("returns 200, stores the recap, and emits botRecap", async () => {
    const payload = validRecap();

    const res = await request(app).post("/api/bot/recap").send(payload);

    expect(res.status).toBe(200);
    expect(getLatestRecap()).toEqual(payload);
    expect(io.emit).toHaveBeenCalledWith("botRecap", payload);
  });

  it("rejects an invalid recap without replacing the stored one", async () => {
    // Store a known-good recap first.
    const good = validRecap();
    await request(app).post("/api/bot/recap").send(good);

    const bad = validRecap();
    delete bad.confluenceMatrix;
    const res = await request(app).post("/api/bot/recap").send(bad);

    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Validation failed");
    expect(getLatestRecap()).toEqual(good);
  });

  it("does not emit botRecap for an invalid recap", async () => {
    io.emit.mockClear();
    const bad = validRecap();
    bad.dailyBias.direction = "sideways";

    await request(app).post("/api/bot/recap").send(bad);

    expect(io.emit).not.toHaveBeenCalled();
  });
});

describe("CORS", () => {
  it("allows the configured frontend origin", async () => {
    const res = await request(app)
      .get("/health")
      .set("Origin", "http://localhost:5173");

    expect(res.headers["access-control-allow-origin"]).toBe("http://localhost:5173");
  });

  it("does not send an allow-origin header for an unknown origin", async () => {
    const res = await request(app)
      .get("/health")
      .set("Origin", "https://evil.example");

    expect(res.headers["access-control-allow-origin"]).toBeUndefined();
  });
});
