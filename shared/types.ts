import { z } from 'zod';

export const AlertItemTypeSchema = z.object({
  id: z.string(),
  message: z.string(),
  timestamp: z.string(),
});
export type AlertItemType = z.infer<typeof AlertItemTypeSchema>;

export const DirSchema = z.enum(['bullish', 'bearish', 'neutral']);
export type Dir = z.infer<typeof DirSchema>;

export const MagnitudeSchema = z.enum(['strong', 'weak', 'moderate']);
export type Magnitude = z.infer<typeof MagnitudeSchema>;

export const MarketStructurePointSchema = z.object({
  price: z.number(),
  type: z.enum(['HH', 'HL', 'LH', 'LL', 'EQH', 'EQL']),
  isSwept: z.boolean(),
});
export type MarketStructurePoint = z.infer<typeof MarketStructurePointSchema>;

export const BiasSchema = z.object({
  direction: DirSchema,
  strength: MagnitudeSchema,
});
export type Bias = z.infer<typeof BiasSchema>;

export const DealingRangeDataSchema = z.object({
  premium: z.number(),
  equilibrium: z.number(),
  discount: z.number(),
  currentPositionPercentage: z.number(),
  summary: z.string(),
});
export type DealingRangeData = z.infer<typeof DealingRangeDataSchema>;

export const DrawOnLiquiditySchema = z.object({
  targetName: z.string(),
  price: z.number(),
  status: z.enum(['ABOVE', 'BELOW', 'REACHED']),
});
export type DrawOnLiquidity = z.infer<typeof DrawOnLiquiditySchema>;

export const PreviousCandleSchema = z.object({
  direction: z.enum(['BULL', 'BEAR']),
  open: z.number(),
  high: z.number(),
  low: z.number(),
  close: z.number(),
});
export type PreviousCandle = z.infer<typeof PreviousCandleSchema>;

export const FairValueGapSchema = z.object({
  type: z.enum(['BULL', 'BEAR']),
  low: z.number(),
  high: z.number(),
  status: z.enum(['OPEN', 'PARTIAL', 'MITIGATED']),
});
export type FairValueGap = z.infer<typeof FairValueGapSchema>;

export const OrderBlockSchema = z.object({
  type: z.enum(['BULL', 'BEAR']),
  low: z.number(),
  high: z.number(),
  status: z.enum(['active', 'mitigated', 'tested']),
});
export type OrderBlock = z.infer<typeof OrderBlockSchema>;

export const LiquidityPoolSchema = z.object({
  name: z.string(),
  price: z.number(),
  status: z.enum(['TARGET', 'SWEPT']),
});
export type LiquidityPool = z.infer<typeof LiquidityPoolSchema>;

export const KeyLevelSchema = z.object({
  label: z.string(),
  price: z.number(),
  type: z.enum(['HIGH', 'LOW', 'EQ']),
});
export type KeyLevel = z.infer<typeof KeyLevelSchema>;

export const KeyLevelsDataSchema = z.object({
  priorWeekHigh: z.number(),
  priorDayHigh: z.number(),
  equilibrium: z.number(),
  priorDayLow: z.number(),
  priorWeekLow: z.number(),
});
export type KeyLevelsData = z.infer<typeof KeyLevelsDataSchema>;

export const ConfluenceMatrixSchema = z.object({
  score: z.number(),
  maxScore: z.number(),
  rating: z.enum(['HIGH', 'MODERATE', 'LOW']),
});
export type ConfluenceMatrix = z.infer<typeof ConfluenceMatrixSchema>;


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
export type MarketRecapData = z.infer<typeof MarketRecapSchema>;