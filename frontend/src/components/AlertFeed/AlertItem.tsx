import { AlertItemType } from "../../types";
import styles from "./AlertItem.module.css";

interface AlertItemProps {
    alert: AlertItemType;
}

function AlertItem(props: AlertItemProps) {
    return (
        <div className={styles.alertItem}>
            <p className={styles.alertMessage}>{props.alert.message}</p>
            <span className={styles.alertTimestamp}>{props.alert.timestamp}</span> 
        </div>
    );
}

export default AlertItem;