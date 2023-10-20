const mongoose = require("mongoose");
const { stringify } = require("querystring");

//Schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//exporterar schemat och Modellen
module.exports = mongoose.model("Workout", workoutSchema);
