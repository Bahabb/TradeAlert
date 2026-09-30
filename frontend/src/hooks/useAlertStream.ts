import { useSocketContext } from "../contexts/SocketContext";
import { AlertItemType } from "../types";
import { useEffect, useState } from "react";

function useAlertStream() {
    const socket = useSocketContext();
    const [alerts, setAlerts] = useState<AlertItemType[]>([]);

    useEffect( () => {
        function handleAlert(incomingAlerts: AlertItemType[]) {
            console.log('Received botAlert event with data:', incomingAlerts);

            setAlerts(
                (previousAlerts) => [        
                    ...previousAlerts,        
                    ...incomingAlerts,
                ]);
        }

        socket.on("botAlert", handleAlert);

        return () => {
            console.log('Removing botAlert event listener');
            socket.off("botAlert", handleAlert);
        }

    }, [socket]);
    
    return alerts;
}


export default useAlertStream;