import styles from './OrderBlockCard.module.css';
import type { OrderBlock } from 'shared';

interface OrderBlockCardProps {
  orderBlock: OrderBlock;
}
export function OrderBlockCard({orderBlock}: OrderBlockCardProps) {
    /* MarketRecap receives an Array of OrderBlock type, MarketRecapDataSchema need to be edited to receive a singular OrderBlock, or
    OrderBlockCard has to map out the array of OrderBlocks
  */
  return (
    <div className={styles.container}>
      <div className={styles.title}>ORDER BLOCK (4H)</div>
      <article className={styles.card}>
        <div>
          <div className={styles.label}>{orderBlock.type}</div>
          <div className={styles.range}>{orderBlock.low}- {orderBlock.high}</div>
        </div>
        <div className={styles.badge}>{orderBlock.status}</div>
      </article>
    </div>
  );
}