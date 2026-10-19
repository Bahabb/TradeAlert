export interface AlertItemType {
    id: string;
    timestamp: string;
    message: string;
}

type Dir = 'bullish' | 'bearish' | 'neutral';
type Magnitude = 'strong' | 'weak' | 'moderate';

export type MarketStructurePoint = {
    price: number;
    type: 'HH' | 'HL' | 'LH' | 'LL' | 'EQH' | 'EQL';
    isSwept: boolean;
};

export interface Bias {
    direction: Dir;
    strength: Magnitude;
    label: string;
}

export interface DealingRangeData {
    premium: number;
    equilibrium: number;
    discount: number;
    currentPositionPercentage: number;
    summary: string;
}

export interface DrawOnLiquidity {
    targetName: string;
    price: number;
    status: 'ABOVE' | 'BELOW' | 'REACHED';
}

export interface PreviousCandle {
    direction: 'BULL' | 'BEAR';
    open: number;
    high: number;
    low: number;
    close: number;
}

export interface FairValueGap {
    type: 'BULL' | 'BEAR';
    low: number;
    high: number;
    status: 'OPEN' | 'PARTIAL' | 'MITIGATED';
}

export interface OrderBlock {
    type: 'BULL' | 'BEAR';
    low: number;
    high: number;
    status: 'active' | 'mitigated' | 'tested';
}

export interface LiquidityPool {
    name: string;
    price: number;
    status: 'TARGET' | 'SWEPT';
}


export interface KeyLevelsData {
    priorWeekHigh: number;
    priorDayHigh: number;
    equilibrium: number;
    priorDayLow: number;
    priorWeekLow: number;
}

export interface ConfluenceMatrix {
    score: number;
    maxScore: number;
    rating: 'HIGH' | 'MODERATE' | 'LOW';
}


export interface MarketRecapData {
    dailyBias: Bias;
    activeSession: string;
    nextKillZone: string;
    marketSequence: Array<MarketStructurePoint>;
    dealingRange: DealingRangeData;
    keyLevels: KeyLevelsData;
    drawOnLiquidity: DrawOnLiquidity;
    previousCandle: PreviousCandle;
    fairValueGaps: Array<FairValueGap>;
    orderBlocks: Array<OrderBlock>;
    liquidityPools: Array<LiquidityPool>;
    confluenceMatrix: ConfluenceMatrix;
}