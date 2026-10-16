import styles from './styles/MarketRecap.module.css';
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
        <section>
            <header className={styles.header}>
                <h2 className={styles.title}>4H Market Recap</h2>
                <span className={styles.badge}>Live</span>
            </header>

            <div className={styles.contentArea}>
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