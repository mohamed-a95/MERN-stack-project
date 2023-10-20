//Det vi vill göra är att ta fram logiken för routes/endpoints här
//och mata in dem i workoutRouter.js så att det blir enklare att
//hålla koll på saker mm.

const Workout = require("../model/workoutModel");

const mongoose = require("mongoose");

//Get all workouts

const getAllWorkouts = async (req, res) => {
  const getWorkouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(getWorkouts);
};

//Get a workout

const getAWorkout = async (req, res) => {
  const { id } = req.params;

  //man testar om id:n är valid id av mongoose typen. om inte så avbryter
  //man och returnerar en error.
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  //if the workout doesnt exist
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
    //vi har return med för att avbryta koden, annars kommer den fortsätta bara.
  }

  res.status(200).json(workout);
};

//post a workout

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout); //sänder workout objetet som vi har tagit fram  i json
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
    //vi har return med för att avbryta koden, annars kommer den fortsätta bara.
  }

  res.status(200).json(workout);
};

//Update a workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
    //vi har return med för att avbryta koden, annars kommer den fortsätta bara.
  }
  res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  getAWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
