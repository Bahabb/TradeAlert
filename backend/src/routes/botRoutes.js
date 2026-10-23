import express from "express";
import { receiveAlert, receiveRecap } from "../controllers/botController.js";
import { MarketRecapSchema } from "shared";
import validateDTO from "../middleware/validateDTO.js";

const router = express.Router();

router.post("/alert", validateDTO(MarketRecapSchema), receiveAlert);
router.post("/recap", validateDTO(MarketRecapSchema), receiveRecap);

export default router;