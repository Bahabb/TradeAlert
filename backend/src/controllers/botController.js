import { MarketRecapSchema } from 'shared'


const receiveAlert = (req, res) => { 
    
    const validatedAlert = req.body;
    
    const io = req.app.get("io");
    if (io) {
        io.emit("botAlert", [validatedAlert]); 
    } else {
        console.error("Socket.IO instance not found in app context. Couldn't send alert to frontend.");
    }

    res.status(200).json({ 
        message: "Alert received & sent successfully", 
        data: validatedAlert,
    });
}

export const receiveRecap = (req, res) => {
 
  const validatedRecap = req.body;

  const io = req.app.get("io");
  if (io) {
    io.emit("botRecap", [validatedRecap]); 
  } else {
    console.error("Socket.IO instance not found in app context.");
  }

  return res.status(200).json({ 
    message: "Recap received & sent successfully", 
    data: validatedRecap
  });
};

module.exports = { receiveAlert, receiveRecap};