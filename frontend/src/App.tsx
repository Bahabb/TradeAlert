import AlertFeed from './components/AlertFeed.tsx';
import { AlertItemType } from './types.ts';
import { mockData } from './mockData.ts';

import { useEffect, useState } from 'react';
import socket from './socket.tsx';


function App() {
    const [alerts, setAlerts] = useState<AlertItemType[]>([]);


    useEffect( () => {

            function handleConnect() {
                console.log('Connected to the backend Socket.IO server'); 
            }

            function handleConnectError(err: any) {
                console.error('Socket.IO connection to backend failed, error:', err);
            }

            function handleDisconnect(reason: any) {
                console.log('Disconnected from the backend Socket.IO server, reason:', reason);
            }

           function handleBackendMockAlert(incomingAlerts: AlertItemType[]) {
                console.log('Received backendMockAlert event with data:', incomingAlerts);

                setAlerts(
                    (previousAlerts) => [        
                        ...previousAlerts,        
                        ...incomingAlerts,
                    ]);
            }

            socket.on('connect', handleConnect);

            socket.on('connect_error', handleConnectError);

            socket.on("backendMockAlert", handleBackendMockAlert);

            socket.on("disconnect", handleDisconnect);

            return () => {
                console.log('Disconnecting from the backend Socket.IO server');
                socket.off('connect');
                socket.off('connect_error');
                socket.off('disconnect');
                socket.off("backendMockAlert", handleBackendMockAlert);
            }
    }, []);

    return(
        <div className="App">
            {alerts.length > 0 && <AlertFeed alerts={alerts} />}
        </div>
    );

}

export default App
