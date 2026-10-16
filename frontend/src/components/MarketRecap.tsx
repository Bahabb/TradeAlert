import './MarketRecap.css';
import { MarketStructurePoint } from '../types';
import { Divider } from './MarketRecap subcomponents/Divider';
import { DailyBiasCard } from './MarketRecap subcomponents/DailyBiasCard';
import { MarketSequence } from './MarketRecap subcomponents/MarketSequence';
import { DealingRange } from './MarketRecap subcomponents/DealingRange';
import { KeyLevels } from './MarketRecap subcomponents/KeyLevels';
import { DrawOnLiquidityCard } from './MarketRecap subcomponents/DrawOnLiquidityCard';
import { FairValueGapCard } from './MarketRecap subcomponents/FairValueGapCard';
import { OrderBlockCard } from './MarketRecap subcomponents/OrderBlockCard';
import { PreviousCandleCard } from './MarketRecap subcomponents/PreviousCandleCard';
import { ConfluenceMatrixCard } from './MarketRecap subcomponents/ConfluenceMatrixCard';

interface MarketRecapProps {
    marketSequence: Array<MarketStructurePoint>;
}

export default function MarketRecap(props: MarketRecapProps) {
    return (
        <section style={{ display: 'flex', flexDirection: 'column', borderColor: 'white', borderStyle: 'solid', borderWidth: '1px' }}>
            
            {/* Header */}
            <header className="recap-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className="recap-title">4H Market Recap</h2>
                <span className="recap-badge">Live</span>
            </header>

            {/* Content Area */}
            <div style={{ padding: 15, display: 'flex', flexDirection: 'column' }}>
                <DailyBiasCard />
                
                <Divider />
                <MarketSequence marketSequence={props.marketSequence} />
                
                <Divider />
                <DealingRange />
                
                <Divider />
                <KeyLevels />
                
                <Divider />
                <DrawOnLiquidityCard />

                <Divider />
                <FairValueGapCard />

                <Divider />
                <OrderBlockCard />

                <Divider />
                <PreviousCandleCard />

                <Divider />
                <ConfluenceMatrixCard />
            </div>
        </section>
    );
}