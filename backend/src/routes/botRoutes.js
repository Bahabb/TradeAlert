const express = require("express");
const router = express.Router();

const { receiveAlert } = require("../controllers/botController");


router.post("/alert", receiveAlert);

module.exports = router;