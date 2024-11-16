require("dotenv").config();
const express = require("express");
// const cors = require("cors");

const app = express();


// CROS
// let origin = process.env.CORSS_ORIGIN.split(",");
// const methods = ["GET", "POST", "PUT", "DELETE"];
// const credentials = true;
// const crosConfig = cors({ origin, methods, credentials });

// APP CONFIGURATION
// app.use(crosConfig);
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: false }));

// ROUTE
const mainRoute = require("../routes/index");
app.use("/api", mainRoute);

// ERROR HANDLER
// const errorHandling = require("../errors/errorServer");
// app.use(errorHandling);

module.exports = app;
