import express from "express";
const app = express();
import botRoutes from "./routes/botRoutes.js";

import { corsOrigins } from "./config/env.js";
import cors from "cors";
const corsOptions = {
  origin(origin, callback) {
    if (!origin || corsOrigins.includes(origin)) { 
      return callback(null, true);
    }
    return callback(new Error(`Origin not allowed by CORS: ${origin}`));
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());



app.get("/health", (req, res) => {
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