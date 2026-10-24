import styles from './ConfluenceMatrixCard.module.css';
import type { ConfluenceMatrix } from 'shared';

interface ConfluenceMatrixCardProps {
  matrix: ConfluenceMatrix;
}

export function ConfluenceMatrixCard({matrix}: ConfluenceMatrixCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>CONFLUENCE MATRIX</div>
      <article className={styles.card}>
        <div>
          <div className={styles.label}>Score / Rating</div>
          <div className={styles.subLabel}> {matrix.score}/{matrix.maxScore} Confluences</div>
        </div>
        <div className={styles.badge}>{matrix.rating}</div>
      </article>
    </div>
  );
}