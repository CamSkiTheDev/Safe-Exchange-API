////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
// pull MONGODB_URL from .env
const { PORT = 3000, MONGODB_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import cors
const cors = require("cors");
// import mongoose
const mongoose = require("mongoose");
// import log router
const logRouter = require("./Routes/Log");

const userRouter = require("./Routes/User");

const videoRouter = require("./Routes/Video");

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

///////////////////////////////
// Middleware
////////////////////////////////
app.use(cors());
app.use(express.json());
///////////////////////////////
// ROUTES
////////////////////////////////
app.use("/logs", logRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);
///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
