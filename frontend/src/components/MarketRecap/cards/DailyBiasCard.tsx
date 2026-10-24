import styles from './DailyBiasCard.module.css';
import type { Bias } from 'shared';

interface DailyBiasCardProps {
  bias: Bias;
  activeSession: string;
  nextKillZone: string;
}
export function DailyBiasCard({ bias, activeSession, nextKillZone }: DailyBiasCardProps) {

  const textColor = 
    bias.direction === 'bullish' ? styles.bullish :
    bias.direction === 'bearish' ? styles.bearish : 
    styles.neutral;

  const cardColor = 
    bias.direction === 'bullish' ? styles.cardBullish :
    bias.direction === 'bearish' ? styles.cardBearish : 
    styles.cardNeutral;

  return (
    <article className={`${styles.card} ${cardColor}`}>
      <div className={styles.eyebrow}>DAILY BIAS</div>
      <div className={styles.heroRow}>
        <span className={`${styles.heroText} ${textColor}`}>{bias.direction}</span>                        
        <span className={`${styles.strengthText} ${textColor}`}>{bias.strength}</span>
      </div>                    
      <div className={styles.sessionRow}>Active Session: {activeSession}</div>
      <div className={styles.sessionRow}>Next: {nextKillZone}</div>
    </article>
  );
}