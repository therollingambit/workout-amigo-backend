const Workout = require('../models/workoutModel') // interacct with db
const mongoose = require('mongoose');

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1})
  res.status(200).json(workouts)
}

// GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'});
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({error: 'No such workout'});
  }

  res.status(200).json(workout);
}

// CREATE new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body

  let emptyFields = [];
  if (!title) {
    emptyFields.push('title')
  }
  if (!load) {
    emptyFields.push('load')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  try {
    const workout = await Workout.create({title, reps, load}) // add doc to db
    res.status(200).json(workout)
  } catch(err) {
    res.status(400).json({error: err.message})
  }
}

// DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) { // check for validity
    return res.status(404).json({error: 'No such workout'});
  }

  const workout = await Workout.findOneAndDelete({ _id: id })

  if (!workout) {
    return res.status(404).json({error: 'No such workout'});
  }

  return res.status(200).json(workout);
}

// UPDATE a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) { // check for validity
    return res.status(404).json({error: 'No such workout'});
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!workout) {
    return res.status(404).json({error: 'No such workout'});
  }

  return res.status(200).json(workout);
}

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
}