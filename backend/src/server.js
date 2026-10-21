const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const { port } = require("./config/env");
const { getLatestRecap } = require("./store/recapStore");

const httpServer = http.createServer(app);
const io = new Server(httpServer, {  
    cors: {    
        origin: "http://localhost:5173",  // React app URL
    },
});

app.set("io", io);

io.on("connection", (socket) => {  
    console.log("Socket client connected:", socket.id);

    const cachedRecap = getLatestRecap();
    if (cachedRecap) {
        socket.emit("botRecap", [cachedRecap]);
        console.log("Sent cached 4H recap to frontend.");
    }

    socket.on("disconnect", () => {  
    console.log("Socket client disconnected:", socket.id);
    });
});



httpServer.listen(port, () => {  console.log(`Server running on http://localhost:${port}`);});