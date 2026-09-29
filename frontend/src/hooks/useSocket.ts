import { useEffect } from 'react';
import socket from '../socket.tsx';

function useSocket() {
    useEffect(() => {
        function handleConnect() {
            console.log('Connected to the backend Socket.IO server');
        }

        function handleConnectError(err: any) {
            console.error('Socket.IO connection to backend failed, error:', err);
        }

        function handleDisconnect(reason: any) {
            console.log('Disconnected from the backend Socket.IO server, reason:', reason);
        }

        
        socket.on('connect', handleConnect);
        socket.on('connect_error', handleConnectError);
        socket.on('disconnect', handleDisconnect);

        return () => {
            console.log('Disconnecting from the backend Socket.IO server');
            socket.off('connect', handleConnect);
            socket.off('connect_error', handleConnectError);
            socket.off('disconnect', handleDisconnect);
        }

    }, []);

    return socket;
}

export default useSocket;