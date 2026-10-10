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

interface Bias {
    direction: Dir;
    strength: Magnitude;
    label: string;
}
export interface SessionRecap {
    dailyBias: Bias;
    
    activeSession: string;
    nextKillZone: string;

    marketSequence: Array<MarketStructurePoint>;


}