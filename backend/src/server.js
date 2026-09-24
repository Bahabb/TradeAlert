const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const { port } = require("./config/env");

const httpServer = http.createServer(app);
const io = new Server(httpServer, {  
    cors: {    
        origin: "http://localhost:5174",  // React app URL
    },
});

io.on("connection", (socket) => {  
    console.log("Socket client connected:", socket.id);

    const mockBackendAlerts = [
        {    
        id: "3",    
        timestamp: "2024-06-01T12:00:00Z",    
        message: "This is a mock alert coming through Socket.IO",  
        },
        {    
        id: "4",    
        timestamp: "2024-06-01T12:00:00Z",    
        message: "This is another mock alert coming through Socket.IO",  
        }
    ];


    socket.emit("backendMockAlert", mockBackendAlerts);

    socket.on("disconnect", () => {  
    console.log("Socket client disconnected:", socket.id);
});
});



httpServer.listen(port, () => {  console.log(`Server running on http://localhost:${port}`);});