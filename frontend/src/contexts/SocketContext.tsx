import { createContext, useContext, useEffect } from "react";
import socket from '../socket.ts';
import { Socket } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

function SocketProvider({ children }: { children: React.ReactNode }) {
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
            socket.off('connect', handleConnect);
            socket.off('connect_error', handleConnectError);
            socket.off('disconnect', handleDisconnect);
        }

    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );

}

function useSocketContext() {

    const context = useContext(SocketContext);
    if (context === null) {
        throw new Error("useSocketContext must be used within a SocketProvider");
    }
    return context;
}

export { SocketProvider, useSocketContext };