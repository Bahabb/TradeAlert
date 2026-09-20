const express = require("express");
const app = express();
app.use(express.json());

const botRoutes = require("./routes/botRoutes");


app.use("/api/bot", botRoutes);



// 404 handler
app.use((req, res) => 
    {  res.status(404).json(
        {   status: "error",    
            message: "Route not found",  
        });
    });

module.exports = app;