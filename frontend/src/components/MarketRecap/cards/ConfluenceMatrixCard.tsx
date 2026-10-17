import styles from './ConfluenceMatrixCard.module.css';

export function ConfluenceMatrixCard() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>CONFLUENCE MATRIX</div>
      <article className={styles.card}>
        <div>
          <div className={styles.label}>Score / Rating</div>
          <div className={styles.subLabel}>4 / 5 Confluences</div>
        </div>
        <div className={styles.badge}>HIGH</div>
      </article>
    </div>
  );
}