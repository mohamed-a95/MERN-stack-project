//i denna fil skapar vi våra api-rutter som vi sen exporterar till servern

const express = require("express");

const {
  getAllWorkouts,
  getAWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

//importera modellen

//bildar gemensamma "rutten" som ska exporteras till servern
const workoutRouter = express.Router();

//Get all workout route(rutt)
workoutRouter.get("/", getAllWorkouts);

//Get a single workout

workoutRouter.get("/:id", getAWorkout);

//Post a workout
//.create() är en async funktion, använd try and catch

workoutRouter.post("/", createWorkout);

//Delete a workout

workoutRouter.delete("/:id", deleteWorkout);

//Update a workout

workoutRouter.patch("/:id", updateWorkout);

//nu behöver man bara hämta workoutRouter för att kunna komma åt..
//..alla endpoints.
module.exports = workoutRouter;
