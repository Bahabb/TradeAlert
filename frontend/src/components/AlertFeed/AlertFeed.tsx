import { AlertItemType } from "../../types";
import AlertItem from "./AlertItem";
import styles from "./AlertFeed.module.css";

interface AlertFeedProps {
    alerts: AlertItemType[];
}

function AlertFeed(props: AlertFeedProps) { 
    return (
        <div className={styles.alertFeed}>   
            <div className={styles.alertFeedHeader}>
                <h2 className={styles.alertFeedTitle}>ICT Alert Feed</h2>
            </div>
            {props.alerts.length === 0 ? (
                <p className={styles.alertFeedEmpty}>No alerts recorded yet.</p>
            ) : (
                props.alerts.map((item) => (
                    <AlertItem key={item.id} alert={item} />
                ))
            )}
        </div>
    );
}

export default AlertFeed;