import { AlertItemType } from "../types";
import './AlertItem.css';

interface AlertItemProps {
    alert: AlertItemType;
}
function AlertItem(props: AlertItemProps) {
    return (
        <div className="alert-item">
            <span className="alert-timestamp">{props.alert.timestamp}</span> 
           <p className="alert-message">{props.alert.message}</p>
        </div>

    );
}

export default AlertItem;