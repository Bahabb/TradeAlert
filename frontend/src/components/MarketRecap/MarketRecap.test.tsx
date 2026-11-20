import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import type { MarketRecapData } from "shared";
import MarketRecap from "./MarketRecap";

// The hook is replaced so each test chooses what the recap state is.
const mockRecap = vi.hoisted(() => ({ value: null as unknown }));

vi.mock("../../hooks/useRecapStream", () => ({
  default: () => mockRecap.value,
}));

// The cards have their own concerns. Replacing them with empty stubs keeps
// this test about the panel's loading and loaded states only.
vi.mock("./cards/Divider", () => ({ Divider: () => null }));
vi.mock("./cards/DailyBiasCard", () => ({ DailyBiasCard: () => null }));
vi.mock("./cards/MarketSequence", () => ({ MarketSequence: () => null }));
vi.mock("./cards/DealingRange", () => ({ DealingRange: () => null }));
vi.mock("./cards/KeyLevels", () => ({ KeyLevels: () => null }));
vi.mock("./cards/DrawOnLiquidityCard", () => ({ DrawOnLiquidityCard: () => null }));
vi.mock("./cards/FairValueGapCard", () => ({ FairValueGapCard: () => null }));
vi.mock("./cards/OrderBlockCard", () => ({ OrderBlockCard: () => null }));
vi.mock("./cards/PreviousCandleCard", () => ({ PreviousCandleCard: () => null }));
vi.mock("./cards/ConfluenceMatrixCard", () => ({ ConfluenceMatrixCard: () => null }));
vi.mock("./cards/LoadingSkeleton", () => ({
  default: () => <div data-testid="loading-skeleton" />,
}));

// Minimal recap. The cards are stubbed, so only the fields MarketRecap reads
// at the top level need to exist.
const sampleRecap = {
  dailyBias: { direction: "bullish", strength: "strong" },
  activeSession: "London",
  nextKillZone: "New York Open",
  marketSequence: [],
  dealingRange: { premium: 110, equilibrium: 100, discount: 90, currentPositionPercentage: 65, summary: "Premium" },
  keyLevels: { priorWeekHigh: 120, priorDayHigh: 112, equilibrium: 100, priorDayLow: 95, priorWeekLow: 85 },
  drawOnLiquidity: { targetName: "PDH", price: 112, status: "ABOVE" },
  previousCandle: { direction: "BULL", open: 99, high: 102, low: 98, close: 101 },
  fairValueGaps: [],
  orderBlocks: [],
  liquidityPools: [],
  confluenceMatrix: { score: 7, maxScore: 10, rating: "HIGH" },
} as unknown as MarketRecapData;

describe("MarketRecap", () => {
  it("shows the loading skeleton before the first recap arrives", () => {
    mockRecap.value = null;

    render(<MarketRecap />);

    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
  });

  it("shows the live panel and hides the skeleton once a recap is available", () => {
    mockRecap.value = sampleRecap;

    render(<MarketRecap />);

    
    expect(screen.queryByTestId("loading-skeleton")).not.toBeInTheDocument();
  });
});
