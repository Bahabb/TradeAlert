import styles from '../styles/DailyBiasCard.module.css';

export function DailyBiasCard() {
  return (
    <article className={styles.card}>
      <div className={styles.eyebrow}>DAILY BIAS</div>
      <div className={styles.heroRow}>
        <span className={styles.heroText}>Bullish</span>                        
        <span className={styles.strengthText}>STRONG</span>
      </div>                    
      <div className={styles.sessionRow}>Active Session: Label</div>
    </article>
  );
}