import AlertFeed from './components/AlertFeed.tsx';
import { mockData } from './mockData.ts';

import { useEffect } from 'react';
import socket from './socket.tsx';


function App() {

    useEffect( () => {
            socket.on('connect', () => {
                console.log('Connected to the backend Socket.IO server'); 
            });

            socket.on('connect_error', (err) => {
                console.error('Socket.IO connection to backend failed, error:', err);
            });

            socket.on("disconnect", (reason) => {  
                console.log('Disconnected from the backend Socket.IO server');
                console.log('Disconnected from backend Socket.IO server, reason:', reason);
            });

            return () => {
                console.log('Disconnecting from the backend Socket.IO server');
                socket.off('connect');
                socket.off('connect_error');
                socket.off('disconnect');
            }
    }, []);

    return(
        <div className="App">
            <AlertFeed alerts={mockData} />
        </div>
    );

}

export default App
