import styles from './PreviousCandleCard.module.css';
import type { PreviousCandle } from 'shared';

interface PreviousCandleCardProps {
  prevCandle: PreviousCandle;
}
export function PreviousCandleCard({prevCandle}: PreviousCandleCardProps) {
  
  return (
    <div className={styles.container}>
      <span className={styles.title}>PREVIOUS 4H CANDLE</span> 
      <article className={styles.grid}>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>DIR</div>
          <div className={styles.metricValueBull}>{prevCandle.direction}</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>Open</div>
          <div className={styles.metricValueMain}>{prevCandle.open}</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>Close</div>
          <div className={styles.metricValueMain}>{prevCandle.close}</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>High</div>
          <div className={styles.metricValueMain}>{prevCandle.high}</div>
        </div>
        <div className={styles.metricBox}>
          <div className={styles.metricLabel}>Low</div>
          <div className={styles.metricValueMain}>{prevCandle.low}</div>
        </div>
      </article>
    </div>
  );
}