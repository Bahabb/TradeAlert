const express = require("express");
const router = express.Router();

const { receiveAlert, receiveRecap } = require("../controllers/botController");
const { MarketRecapSchema } = require("shared");
const { validateData } = require("../middleware/validateDTO");

router.post("/alert", validateData(MarketRecapSchema), receiveAlert);
router.post("/recap", validateData(MarketRecapSchema), receiveRecap);

module.exports = router;