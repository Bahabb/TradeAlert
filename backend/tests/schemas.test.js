import { describe, it, expect } from "vitest";
import { AlertItemTypeSchema, MarketRecapSchema } from "shared";
import { validAlert, validRecap } from "./fixtures.js";

describe("AlertItemTypeSchema", () => {
  it("accepts a valid alert", () => {
    expect(AlertItemTypeSchema.safeParse(validAlert()).success).toBe(true);
  });

  it.each(["id", "message", "timestamp"])("rejects a missing %s", (field) => {
    const payload = validAlert();
    delete payload[field];
    expect(AlertItemTypeSchema.safeParse(payload).success).toBe(false);
  });

  it.each(["id", "message", "timestamp"])("rejects a non-string %s", (field) => {
    const payload = { ...validAlert(), [field]: 42 };
    expect(AlertItemTypeSchema.safeParse(payload).success).toBe(false);
  });

  it.each(["id", "message", "timestamp"])("rejects an empty %s", (field) => {
    const payload = { ...validAlert(), [field]: "" };
    expect(AlertItemTypeSchema.safeParse(payload).success).toBe(false);
  });

  it("rejects a recap payload sent to the alert schema", () => {
    expect(AlertItemTypeSchema.safeParse(validRecap()).success).toBe(false);
  });
});

describe("MarketRecapSchema", () => {
  it("accepts a valid recap", () => {
    expect(MarketRecapSchema.safeParse(validRecap()).success).toBe(true);
  });

  // One rejection per required top-level field.
  it.each(Object.keys(validRecap()))("rejects a missing %s", (field) => {
    const payload = validRecap();
    delete payload[field];
    expect(MarketRecapSchema.safeParse(payload).success).toBe(false);
  });

  it("rejects an invalid dailyBias direction", () => {
    const payload = validRecap();
    payload.dailyBias.direction = "sideways";
    expect(MarketRecapSchema.safeParse(payload).success).toBe(false);
  });

  it("rejects an invalid marketSequence point type", () => {
    const payload = validRecap();
    payload.marketSequence[0].type = "XX";
    expect(MarketRecapSchema.safeParse(payload).success).toBe(false);
  });

  it("rejects a missing nested dealingRange field", () => {
    const payload = validRecap();
    delete payload.dealingRange.summary;
    expect(MarketRecapSchema.safeParse(payload).success).toBe(false);
  });

  it("rejects a string where a number is required", () => {
    const payload = validRecap();
    payload.keyLevels.priorDayHigh = "112";
    expect(MarketRecapSchema.safeParse(payload).success).toBe(false);
  });

  it("accepts empty arrays for list fields", () => {
    const payload = validRecap();
    payload.marketSequence = [];
    payload.fairValueGaps = [];
    payload.orderBlocks = [];
    payload.liquidityPools = [];
    expect(MarketRecapSchema.safeParse(payload).success).toBe(true);
  });

  // Every non-empty string field in the recap. Lists are excluded: an empty
  // array is allowed, as tested above.
  const emptyStringCases = [
    ["activeSession", (p) => (p.activeSession = "")],
    ["nextKillZone", (p) => (p.nextKillZone = "")],
    ["dealingRange.summary", (p) => (p.dealingRange.summary = "")],
    ["drawOnLiquidity.targetName", (p) => (p.drawOnLiquidity.targetName = "")],
    ["liquidityPools[0].name", (p) => (p.liquidityPools[0].name = "")],
  ];

  it.each(emptyStringCases)("rejects an empty %s", (_name, mutate) => {
    const payload = validRecap();
    mutate(payload);
    expect(MarketRecapSchema.safeParse(payload).success).toBe(false);
  });
});
