import styles from './FairValueGapCard.module.css';
import type { FairValueGap } from 'shared';

interface FairValueGapCardProps {
  fvg: FairValueGap;
}
export function FairValueGapCard({fvg}: FairValueGapCardProps) {
  /* MarketRecap receives an Array of FairValueGap type, MarketRecapDataSchema need to be edited to receive a singular FairValueGap, or
    FairValueGapCard has to map out the array of FairValueGaps
  */
  return (
    <div className={styles.container}>
      <div className={styles.title}>FAIR VALUE GAP (4H)</div>
      <article className={styles.card}>
        <div>
          <div className={styles.label}>{fvg.type}</div>
          <div className={styles.range}>{fvg.low} - {fvg.high}</div>
        </div>
        <div className={styles.badge}>{fvg.status}</div>
      </article>
    </div>
  );
}