import styles from '../styles/MarketSequence.module.css';
import { MarketStructurePoint } from '../../types';

interface MarketSequenceProps {
  marketSequence: Array<MarketStructurePoint>;
}

export function MarketSequence({ marketSequence }: MarketSequenceProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>4H Market Sequence Structure</span>
      {marketSequence.length > 0 ? (
        <ul className={styles.list}>
          {marketSequence.map((point, index) => (
            <li 
              key={index} 
              className={`${styles.item} ${styles.card} ${point.isSwept ? styles.swept : styles.active}`}
            >
              <span className={styles.typeText}>{point.type}</span>
              <span className={styles.priceText}>{point.price}</span>
              <span className={styles.hoverText}>{point.isSwept ? 'Swept' : 'Active'}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span className={styles.priceText}>No data available</span>
      )}
    </div>
  );
}