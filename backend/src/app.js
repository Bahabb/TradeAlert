import express from "express";
const app = express();
app.use(express.json());

import botRoutes from "./routes/botRoutes.js";

app.use("/api/bot", botRoutes);

// 404 handler
app.use((req, res) => 
    {  res.status(404).json(
        {   status: "error",    
            message: "Route not found",  
        });
    });

export default app;