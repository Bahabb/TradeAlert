import styles from './MarketRecap.module.css';
import { MarketStructurePoint } from '../../types';
import { Divider } from './cards/Divider';
import { DailyBiasCard } from './cards/DailyBiasCard';
import { MarketSequence } from './cards/MarketSequence';
import { DealingRange } from './cards/DealingRange';
import { KeyLevels } from './cards/KeyLevels';
import { DrawOnLiquidityCard } from './cards/DrawOnLiquidityCard';
import { FairValueGapCard } from './cards/FairValueGapCard';
import { OrderBlockCard } from './cards/OrderBlockCard';
import { PreviousCandleCard } from './cards/PreviousCandleCard';
import { ConfluenceMatrixCard } from './cards/ConfluenceMatrixCard';

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