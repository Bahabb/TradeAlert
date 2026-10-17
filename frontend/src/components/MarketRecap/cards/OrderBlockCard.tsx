import styles from './OrderBlockCard.module.css';

export function OrderBlockCard() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>ORDER BLOCK (4H)</div>
      <article className={styles.card}>
        <div>
          <div className={styles.label}>Bullish OB</div>
          <div className={styles.range}>1.0750 - 1.0770</div>
        </div>
        <div className={styles.badge}>TESTED</div>
      </article>
    </div>
  );
}