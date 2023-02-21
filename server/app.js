// import environment variable
require("dotenv").config();

const mongoose = require("mongoose")

// express app
const express = require("express");
const app = express();

//middleware
app.use(express.json());

// import routes
const userRoute = require("./routes/userRoute")

// routes
app.use("/user", userRoute)

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
