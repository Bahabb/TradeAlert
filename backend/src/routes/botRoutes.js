import express from "express";
import { receiveAlert, receiveRecap } from "../controllers/botController.js";
import { MarketRecapSchema } from "shared";
import validateData from "../middleware/validateDTO.js";

const router = express.Router();

router.post("/alert", validateData(MarketRecapSchema), receiveAlert);
router.post("/recap", validateData(MarketRecapSchema), receiveRecap);

export default router;