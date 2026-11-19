import { io } from "socket.io-client";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

if (!backendUrl) {
  throw new Error("VITE_BACKEND_URL is not set. Add it to frontend/.env");
}

const socket = io(backendUrl);


export default socket