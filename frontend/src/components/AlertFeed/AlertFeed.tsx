import AlertItem from "./AlertItem";
import styles from "./AlertFeed.module.css";
import useAlertStream from '../../hooks/useAlertStream.ts';



function AlertFeed() { 
    const alerts = useAlertStream();
    
    return (
        <div className={styles.alertFeed}>   
            <div className={styles.alertFeedHeader}>
                <h2 className={styles.alertFeedTitle}>ICT Alert Feed</h2>
            </div>
            {alerts.length === 0 ? (
                <p className={styles.alertFeedEmpty}>No alerts recorded yet.</p>
            ) : (
                alerts.map((item) => (
                    <AlertItem key={item.id} alert={item} />
                ))
            )}
        </div>
    );
}

export default AlertFeed;