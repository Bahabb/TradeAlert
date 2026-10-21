import { z } from 'zod';
export const AlertItemTypeSchema = z.object({
    id: z.string(),
    message: z.string(),
    timestamp: z.string(),
});
export const DirSchema = z.enum(['bullish', 'bearish', 'neutral']);
export const MagnitudeSchema = z.enum(['strong', 'weak', 'moderate']);
export const MarketStructurePointSchema = z.object({
    price: z.number(),
    type: z.enum(['HH', 'HL', 'LH', 'LL', 'EQH', 'EQL']),
    isSwept: z.boolean(),
});
export const BiasSchema = z.object({
    direction: DirSchema,
    strength: MagnitudeSchema,
});
export const DealingRangeDataSchema = z.object({
    premium: z.number(),
    equilibrium: z.number(),
    discount: z.number(),
    currentPositionPercentage: z.number(),
    summary: z.string(),
});
export const DrawOnLiquiditySchema = z.object({
    targetName: z.string(),
    price: z.number(),
    status: z.enum(['ABOVE', 'BELOW', 'REACHED']),
});
export const PreviousCandleSchema = z.object({
    direction: z.enum(['BULL', 'BEAR']),
    open: z.number(),
    high: z.number(),
    low: z.number(),
    close: z.number(),
});
export const FairValueGapSchema = z.object({
    type: z.enum(['BULL', 'BEAR']),
    low: z.number(),
    high: z.number(),
    status: z.enum(['OPEN', 'PARTIAL', 'MITIGATED']),
});
export const OrderBlockSchema = z.object({
    type: z.enum(['BULL', 'BEAR']),
    low: z.number(),
    high: z.number(),
    status: z.enum(['active', 'mitigated', 'tested']),
});
export const LiquidityPoolSchema = z.object({
    name: z.string(),
    price: z.number(),
    status: z.enum(['TARGET', 'SWEPT']),
});
export const KeyLevelSchema = z.object({
    label: z.string(),
    price: z.number(),
    type: z.enum(['HIGH', 'LOW', 'EQ']),
});
export const KeyLevelsDataSchema = z.object({
    priorWeekHigh: z.number(),
    priorDayHigh: z.number(),
    equilibrium: z.number(),
    priorDayLow: z.number(),
    priorWeekLow: z.number(),
});
export const ConfluenceMatrixSchema = z.object({
    score: z.number(),
    maxScore: z.number(),
    rating: z.enum(['HIGH', 'MODERATE', 'LOW']),
});
export const MarketRecapSchema = z.object({
    dailyBias: BiasSchema,
    activeSession: z.string(),
    nextKillZone: z.string(),
    marketSequence: z.array(MarketStructurePointSchema),
    dealingRange: DealingRangeDataSchema,
    keyLevels: KeyLevelsDataSchema,
    drawOnLiquidity: DrawOnLiquiditySchema,
    previousCandle: PreviousCandleSchema,
    fairValueGaps: z.array(FairValueGapSchema),
    orderBlocks: z.array(OrderBlockSchema),
    liquidityPools: z.array(LiquidityPoolSchema),
    confluenceMatrix: ConfluenceMatrixSchema,
});
