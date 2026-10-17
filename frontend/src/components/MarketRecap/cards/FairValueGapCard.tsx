import styles from './FairValueGapCard.module.css';

export function FairValueGapCard() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>FAIR VALUE GAP (4H)</div>
      <article className={styles.card}>
        <div>
          <div className={styles.label}>Bullish Imbalance</div>
          <div className={styles.range}>1.0820 - 1.0845</div>
        </div>
        <div className={styles.badge}>UNMITIGATED</div>
      </article>
    </div>
  );
}