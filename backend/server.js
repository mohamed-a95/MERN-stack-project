const express = require("express");

require("dotenv").config();

const mongoose = require("mongoose");

const app = express();

const WorkoutRouter = require("./router/workoutRouter");

// Middleware för att parsa JSON
app.use(express.json());

//Use routes/endpoints
app.use("/api/workouts", WorkoutRouter);

//connect to db, listen to app when connection to db is success
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listeningt to port ${process.env.PORT}`);
    });

    console.log("connection to db established");
  })
  .catch((error) => {
    console.log(error);
  });
