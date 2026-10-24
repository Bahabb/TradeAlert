import styles from './KeyLevels.module.css';
import type { KeyLevelsData } from 'shared';

interface KeyLevelsProps {
  levels: KeyLevelsData;
}
export function KeyLevels({levels}: KeyLevelsProps) {
  return (
    <article className={styles.container}>
      <div className={styles.title}>KEY LEVELS</div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.label}>Prior Week High</span>
          <span className={styles.priceHigh}>{levels.priorWeekHigh}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Prior Day High</span>
          <span className={styles.priceHigh}>{levels.priorDayHigh}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Equilibrium</span>
          <span className={styles.priceEq}>{levels.equilibrium}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Prior Day Low</span>
          <span className={styles.priceLow}>{levels.priorDayLow}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Prior Week Low</span>
          <span className={styles.priceLow}>{levels.priorWeekLow}</span>
        </li>
      </ul>
    </article>
  );
}