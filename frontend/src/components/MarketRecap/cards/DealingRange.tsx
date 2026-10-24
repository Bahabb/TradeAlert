import styles from './DealingRange.module.css';
import type { DealingRangeData } from 'shared';

interface DealingRangeProps {
  range: DealingRangeData;
}
export function DealingRange({ range }: DealingRangeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>DEALING RANGE</div>
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <span className={styles.labelPremium}>PREMIUM</span>
          <span className={styles.value}>{range.premium}</span>
        </div>
        <div className={styles.colCenter}>
          <span className={styles.labelEq}>EQ</span>
          <span className={styles.value}>{range.equilibrium}</span>
        </div>
        <div className={styles.colRight}>
          <span className={styles.labelDiscount}>DISCOUNT</span>
          <span className={styles.value}>{range.discount}</span>
        </div>
      </div>
      <div className={styles.meterBar} />
    </div>
  );
}