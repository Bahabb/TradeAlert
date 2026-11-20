import { describe, it, expect, vi, beforeEach } from "vitest";
import { AlertItemTypeSchema } from "shared";
import validateDTO from "../src/middleware/validateDTO.js";
import { validAlert } from "./fixtures.js";

function fakeRes() {
  const res = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  return res;
}

describe("validateDTO", () => {
  let next;
  let res;

  beforeEach(() => {
    next = vi.fn();
    res = fakeRes();
  });

  it("calls next() and replaces req.body with the parsed data when valid", () => {
    const req = { body: { ...validAlert(), extraField: "dropped" } };

    validateDTO(AlertItemTypeSchema)(req, res, next);

    expect(next).toHaveBeenCalledOnce();
    expect(res.status).not.toHaveBeenCalled();
    // Zod strips unknown keys, so only schema fields reach the controller.
    expect(req.body).toEqual(validAlert());
  });

  it("responds 400 and does not call next() when invalid", () => {
    const req = { body: { id: "abc" } }; // missing message and timestamp

    validateDTO(AlertItemTypeSchema)(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ error: "Validation failed" })
    );
  });

  it("includes details for the fields that failed", () => {
    const req = { body: { id: "abc" } };

    validateDTO(AlertItemTypeSchema)(req, res, next);

    const body = res.json.mock.calls[0][0];
    expect(body.details).toBeDefined();
    expect(body.details.message._errors.length).toBeGreaterThan(0);
  });
});
