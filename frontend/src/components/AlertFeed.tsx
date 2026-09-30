import { AlertItemType } from "../types";
import AlertItem from "./AlertItem";

interface AlertFeedProps {
    alerts: AlertItemType[];
}

function AlertFeed(props: AlertFeedProps) { 
    return (
        <div className="alert-feed">    
            <div className="alert-feed-header">
                <h2 className="alert-feed-title">ICT Alert Feed</h2>
            </div>
            if (props.alerts.length === 0) {
                <p className="alert-feed-empty">No alerts yet.</p>
            } else {
                props.alerts.map((item) => (
                    <AlertItem key={item.id} alert={item} />
                ))
            }
        </div>
    )
}

export default AlertFeed;