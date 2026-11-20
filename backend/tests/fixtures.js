// Known-good payloads shared by all tests. Each test starts from a copy of
// these, then breaks one thing on purpose. Keep them valid.

export const validAlert = () => ({
  id: "abc123",
  timestamp: "2025-01-15T14:32:00Z",
  message: "BUY signal detected on BTC/USD",
});

export const validRecap = () => ({
  dailyBias: { direction: "bullish", strength: "strong" },
  activeSession: "London",
  nextKillZone: "New York Open",
  marketSequence: [{ price: 101.5, type: "HH", isSwept: false }],
  dealingRange: {
    premium: 110,
    equilibrium: 100,
    discount: 90,
    currentPositionPercentage: 65,
    summary: "Price in premium",
  },
  keyLevels: {
    priorWeekHigh: 120,
    priorDayHigh: 112,
    equilibrium: 100,
    priorDayLow: 95,
    priorWeekLow: 85,
  },
  drawOnLiquidity: { targetName: "PDH", price: 112, status: "ABOVE" },
  previousCandle: { direction: "BULL", open: 99, high: 102, low: 98, close: 101 },
  fairValueGaps: [{ type: "BULL", low: 100, high: 101, status: "OPEN" }],
  orderBlocks: [{ type: "BEAR", low: 105, high: 107, status: "active" }],
  liquidityPools: [{ name: "EQH", price: 120, status: "TARGET" }],
  confluenceMatrix: { score: 7, maxScore: 10, rating: "HIGH" },
});
