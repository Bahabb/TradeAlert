import styles from '../styles/DealingRange.module.css';

export function DealingRange() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>DEALING RANGE</div>
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <span className={styles.labelPremium}>PREMIUM</span>
          <span className={styles.value}>1.0924</span>
        </div>
        <div className={styles.colCenter}>
          <span className={styles.labelEq}>EQ</span>
          <span className={styles.value}>1.0853</span>
        </div>
        <div className={styles.colRight}>
          <span className={styles.labelDiscount}>DISCOUNT</span>
          <span className={styles.value}>1.0781</span>
        </div>
      </div>
      <div className={styles.meterBar} />
    </div>
  );
}