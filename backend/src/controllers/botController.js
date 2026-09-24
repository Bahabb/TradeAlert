

// Needs validating the TradingAlert DTO later by a model.
const receiveAlert = (req, res) => { 
    const alertData = req.body;

    if (!alertData || Object.keys(alertData).length === 0) {
        return res.status(400).json({ message: "Alert data is required" });
    }

    // Here I'll use botModel to process the data received and validate it before using it.

    console.log("Received alert:", alertData);

    
    const io = req.app.get("io");
    if (io) {
        io.emit("backendMockAlert", [alertData]); 
    } else {
        console.error("Socket.IO instance not found in app context. Couldn't send alert to frontend.");
    }

    // Send a response back to the client
    res.status(200).json({ message: "Alert received successfully", data: alertData });
}

module.exports = { receiveAlert, };