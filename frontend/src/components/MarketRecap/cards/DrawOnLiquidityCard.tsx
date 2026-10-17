import styles from './DrawOnLiquidityCard.module.css';

export function DrawOnLiquidityCard() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>DRAW ON LIQUIDITY</div>
      <article className={styles.card}>
        <div>
          <div className={styles.label}>Prior Week High</div>
          <div className={styles.price}>1.000</div>
        </div>
        <div className={styles.badge}>ABOVE</div>
      </article>
    </div>
  );
}