export interface AlertItemType {
    id: string;
    timestamp: string;
    message: string;
}

type Dir = 'bullish' | 'bearish' | 'neutral';
type Magnitude = 'strong' | 'weak' | 'moderate';

interface bias {
    direction: Dir;
    strength: Magnitude;
    label: string;
}
export interface SessionRecap {
    dailyBias: bias;
}