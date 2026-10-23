import styles from './LoadingSkeleton.module.css';

export default function LoadingSkeleton() {
    return (
            <div className={styles.loadingContainer}>
                <div className={styles.skeletonItem} />
                <div className={styles.skeletonDivider} />
                <div className={styles.skeletonItem} />
                <div className={styles.skeletonDivider} />
                <div className={styles.skeletonItem} />
                <div className={styles.skeletonDivider} />
                <div className={styles.skeletonItem} />
            </div>
    );
}