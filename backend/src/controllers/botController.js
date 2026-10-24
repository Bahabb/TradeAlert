import { MarketRecapSchema } from 'shared'
import { setLatestRecap } from '../store/recapStore.js';

export const receiveAlert = (req, res) => { 
    
  const validatedAlert = req.body;
  const websocketSendResult = websocketSend(req, validatedAlert, "botAlert");

  if (websocketSendResult) {
    res.status(200).json({ 
    message: "Alert received & sent successfully", 
    data: validatedAlert,
    });
  } else {
      return res.status(400).json({
      message: "Alert received & cached, but failed to send to frontend",
      data: validatedAlert
    })
  }
}

export const receiveRecap = (req, res) => {
 
  const validatedRecap = req.body;
  const websocketSendResult = websocketSend(req, validatedRecap, "botRecap");

  setLatestRecap(validatedRecap);

  if (websocketSendResult) {
    return res.status(200).json({ 
      message: "Recap received & sent successfully", 
      data: validatedRecap
    });
  } else {
    return res.status(400).json({
      message: "Recap received & cached, but failed to send to frontend",
      data: validatedRecap
    })
  }
};

const websocketSend = (req, data, event) => {
  const io = req.app.get("io");
  if (io) {
      io.emit(event, data);
      return true;
  } else {
      console.error("Socket.IO instance not found in app context. Couldn't send to frontend.");
      return false;
  }
}
