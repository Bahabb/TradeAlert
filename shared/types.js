"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketRecapSchema = exports.ConfluenceMatrixSchema = exports.KeyLevelsDataSchema = exports.KeyLevelSchema = exports.LiquidityPoolSchema = exports.OrderBlockSchema = exports.FairValueGapSchema = exports.PreviousCandleSchema = exports.DrawOnLiquiditySchema = exports.DealingRangeDataSchema = exports.BiasSchema = exports.MarketStructurePointSchema = exports.MagnitudeSchema = exports.DirSchema = exports.AlertItemTypeSchema = void 0;
const zod_1 = require("zod");
exports.AlertItemTypeSchema = zod_1.z.object({
    id: zod_1.z.string(),
    message: zod_1.z.string(),
    timestamp: zod_1.z.string(),
});
exports.DirSchema = zod_1.z.enum(['bullish', 'bearish', 'neutral']);
exports.MagnitudeSchema = zod_1.z.enum(['strong', 'weak', 'moderate']);
exports.MarketStructurePointSchema = zod_1.z.object({
    price: zod_1.z.number(),
    type: zod_1.z.enum(['HH', 'HL', 'LH', 'LL', 'EQH', 'EQL']),
    isSwept: zod_1.z.boolean(),
});
exports.BiasSchema = zod_1.z.object({
    direction: exports.DirSchema,
    strength: exports.MagnitudeSchema,
});
exports.DealingRangeDataSchema = zod_1.z.object({
    premium: zod_1.z.number(),
    equilibrium: zod_1.z.number(),
    discount: zod_1.z.number(),
    currentPositionPercentage: zod_1.z.number(),
    summary: zod_1.z.string(),
});
exports.DrawOnLiquiditySchema = zod_1.z.object({
    targetName: zod_1.z.string(),
    price: zod_1.z.number(),
    status: zod_1.z.enum(['ABOVE', 'BELOW', 'REACHED']),
});
exports.PreviousCandleSchema = zod_1.z.object({
    direction: zod_1.z.enum(['BULL', 'BEAR']),
    open: zod_1.z.number(),
    high: zod_1.z.number(),
    low: zod_1.z.number(),
    close: zod_1.z.number(),
});
exports.FairValueGapSchema = zod_1.z.object({
    type: zod_1.z.enum(['BULL', 'BEAR']),
    low: zod_1.z.number(),
    high: zod_1.z.number(),
    status: zod_1.z.enum(['OPEN', 'PARTIAL', 'MITIGATED']),
});
exports.OrderBlockSchema = zod_1.z.object({
    type: zod_1.z.enum(['BULL', 'BEAR']),
    low: zod_1.z.number(),
    high: zod_1.z.number(),
    status: zod_1.z.enum(['active', 'mitigated', 'tested']),
});
exports.LiquidityPoolSchema = zod_1.z.object({
    name: zod_1.z.string(),
    price: zod_1.z.number(),
    status: zod_1.z.enum(['TARGET', 'SWEPT']),
});
exports.KeyLevelSchema = zod_1.z.object({
    label: zod_1.z.string(),
    price: zod_1.z.number(),
    type: zod_1.z.enum(['HIGH', 'LOW', 'EQ']),
});
exports.KeyLevelsDataSchema = zod_1.z.object({
    priorWeekHigh: zod_1.z.number(),
    priorDayHigh: zod_1.z.number(),
    equilibrium: zod_1.z.number(),
    priorDayLow: zod_1.z.number(),
    priorWeekLow: zod_1.z.number(),
});
exports.ConfluenceMatrixSchema = zod_1.z.object({
    score: zod_1.z.number(),
    maxScore: zod_1.z.number(),
    rating: zod_1.z.enum(['HIGH', 'MODERATE', 'LOW']),
});
exports.MarketRecapSchema = zod_1.z.object({
    dailyBias: exports.BiasSchema,
    activeSession: zod_1.z.string(),
    nextKillZone: zod_1.z.string(),
    marketSequence: zod_1.z.array(exports.MarketStructurePointSchema),
    dealingRange: exports.DealingRangeDataSchema,
    keyLevels: exports.KeyLevelsDataSchema,
    drawOnLiquidity: exports.DrawOnLiquiditySchema,
    previousCandle: exports.PreviousCandleSchema,
    fairValueGaps: zod_1.z.array(exports.FairValueGapSchema),
    orderBlocks: zod_1.z.array(exports.OrderBlockSchema),
    liquidityPools: zod_1.z.array(exports.LiquidityPoolSchema),
    confluenceMatrix: exports.ConfluenceMatrixSchema,
});
//# sourceMappingURL=types.js.map