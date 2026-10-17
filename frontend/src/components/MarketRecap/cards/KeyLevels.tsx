import styles from './KeyLevels.module.css';

export function KeyLevels() {
  return (
    <article className={styles.container}>
      <div className={styles.title}>KEY LEVELS</div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.label}>Prior Week High</span>
          <span className={styles.priceHigh}>1.0924</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Prior Day High</span>
          <span className={styles.priceHigh}>1.0891</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Equilibrium</span>
          <span className={styles.priceEq}>1.0853</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Prior Day Low</span>
          <span className={styles.priceLow}>1.0821</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Prior Week Low</span>
          <span className={styles.priceLow}>1.0781</span>
        </li>
      </ul>
    </article>
  );
}