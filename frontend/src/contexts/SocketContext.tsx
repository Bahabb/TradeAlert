import { createContext, useContext } from "react";
import useSocket from "../hooks/useSocket";
import { Socket } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

function SocketProvider({ children }: { children: React.ReactNode }) {
    const socket = useSocket();

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