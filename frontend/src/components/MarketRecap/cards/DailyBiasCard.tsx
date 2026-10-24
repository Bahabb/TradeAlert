import styles from './DailyBiasCard.module.css';
import type { Bias } from 'shared';

interface DailyBiasCardProps {
  bias: Bias;
  activeSession: string;
  nextKillZone: string;
}
export function DailyBiasCard({ bias, activeSession, nextKillZone }: DailyBiasCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.eyebrow}>DAILY BIAS</div>
      <div className={styles.heroRow}>
        <span className={styles.heroText}>{bias.direction}</span>                        
        <span className={styles.strengthText}>{bias.strength}</span>
      </div>                    
      <div className={styles.sessionRow}>Active Session: {activeSession}</div>
      <div className={styles.sessionRow}>Next: {nextKillZone}</div>
    </article>
  );
}