const express = require("express");
const router = express.Router();

const ctrlSensors = require("../controllers/sensors");

router.use("/sensor", ctrlSensors.status);

module.exports = router;
