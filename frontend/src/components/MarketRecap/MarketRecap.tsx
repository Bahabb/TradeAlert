import styles from './MarketRecap.module.css';
import { MarketRecapData } from 'shared';
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

import LoadingSkeleton from './cards/LoadingSkeleton';
import useRecapStream from '@/hooks/useRecapStream';


export default function MarketRecap() {
    const recap = useRecapStream();
    return recap != null ?
    (
        <section>
            <header className={styles.header}>
                <h2 className={styles.title}>4H Market Recap</h2>
                <span className={styles.badge}>Live</span>
            </header>
            <div className={styles.contentArea}>
                <DailyBiasCard bias={recap.dailyBias} activeSession={recap.activeSession} nextKillZone={recap.nextKillZone}/>
                <Divider />
                <MarketSequence marketSequence={recap.marketSequence} />
                <Divider />
                <DealingRange range={recap.dealingRange}/>
                <Divider />
                <KeyLevels levels={recap.keyLevels}/>
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
    )
    : (
        <>
        <section>
            <header className={styles.header}>
                <h2 className={styles.title}>4H Market Recap</h2>
                <span className={styles.badge}>Live</span>
            </header>
            <LoadingSkeleton />
        </section>
        </>
    );
}