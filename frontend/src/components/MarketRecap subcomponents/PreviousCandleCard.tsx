import styles from '../styles/PreviousCandleCard.module.css';

export function PreviousCandleCard() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>PREVIOUS 4H CANDLE</span> 
      <article className={styles.grid}>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>DIR</div>
          <div className={styles.metricValueBull}>BULL</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>Open</div>
          <div className={styles.metricValueMain}>1.0000</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>Close</div>
          <div className={styles.metricValueMain}>1.0000</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>High</div>
          <div className={styles.metricValueMain}>1.0000</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>Low</div>
          <div className={styles.metricValueMain}>1.0000</div>
        </div>
      </article>
    </div>
  );
}