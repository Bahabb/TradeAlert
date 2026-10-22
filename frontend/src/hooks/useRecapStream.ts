import { useSocketContext } from "../contexts/SocketContext";
import { MarketRecapData } from "shared";
import { useEffect, useState } from "react";

function useRecapStream() {
    const socket = useSocketContext();
    const [currRecap, setRecap] = useState<MarketRecapData | null>(null);
    useEffect( () => {

        function handleRecap(recap: MarketRecapData) {
            console.log("Received botRecap event with recap data:", recap);

            setRecap(recap);
        };

        socket.on("botRecap", handleRecap);
    }, [socket]);

    return currRecap;
}

export default useRecapStream;