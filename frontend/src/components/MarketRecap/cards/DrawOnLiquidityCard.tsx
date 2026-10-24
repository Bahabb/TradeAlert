import styles from './DrawOnLiquidityCard.module.css';
import type { DrawOnLiquidity } from 'shared';

interface DrawOnLiquidityCardProps {
  draw: DrawOnLiquidity;
}
export function DrawOnLiquidityCard({draw}: DrawOnLiquidityCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>DRAW ON LIQUIDITY</div>
      <article className={styles.card}>
        <div>
          <div className={styles.label}>{draw.targetName}</div>
          <div className={styles.price}>{draw.price}</div>
        </div>
        <div className={styles.badge}>{draw.status}</div>
      </article>
    </div>
  );
}