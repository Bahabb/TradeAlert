import express from "express";
const app = express();
app.use(express.json());

import botRoutes from "./routes/botRoutes.js";

app.router.get("/health", (req, res) => {
    res.status(200).json({
    status: "ok",
    uptime: Math.floor(process.uptime()),
  });
});

app.use("/api/bot", botRoutes);


// 404 handler
app.use((req, res) => 
    {  res.status(404).json(
        {   status: "error",    
            message: "Route not found",  
        });
    });

export default app;