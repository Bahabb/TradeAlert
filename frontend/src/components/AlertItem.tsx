import { AlertItemType } from "../types";
import './AlertItem.css';
import './AlertFeed.css';

interface AlertItemProps {
    alert: AlertItemType;
}
function AlertItem(props: AlertItemProps) {
    return (
        <div className="alert-item">
            <p className="alert-message">{props.alert.message}</p>
            <span className="alert-timestamp">{props.alert.timestamp}</span> 
        </div>

    );
}

export default AlertItem;