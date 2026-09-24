const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const { port } = require("./config/env");

const httpServer = http.createServer(app);
const io = new Server(httpServer, {  
    cors: {    
        origin: "http://localhost:5173",  // React app URL
    },
});

io.on("connection", (socket) => {  
    console.log("Socket client connected:", socket.id); 
    
    socket.on("disconnect", () => {  
    console.log("Socket client disconnected:", socket.id);
npm });
});



httpServer.listen(port, () => {  console.log(`Server running on http://localhost:${port}`);});