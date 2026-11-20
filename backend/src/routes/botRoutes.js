import express from "express";
import { receiveAlert, receiveRecap } from "../controllers/botController.js";
import { AlertItemTypeSchema, MarketRecapSchema } from "shared";
import validateDTO from "../middleware/validateDTO.js";

const router = express.Router();

router.post("/alert", validateDTO(AlertItemTypeSchema), receiveAlert);
router.post("/recap", validateDTO(MarketRecapSchema), receiveRecap);

export default router;