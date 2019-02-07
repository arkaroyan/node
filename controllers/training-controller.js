const TrainingsModel = require('../models/training-model');

async function listTrainings (req, res) {
  const trainings = await TrainingsModel.find({});

  res.send({ data: trainings });
}

async function createTraining (req, res) {
  const { firstName, lastName } = req.body;

  const training = await TrainingsModel.create({ firstName, lastName });

  res.send({ data: training });
}

async function getTraining (req, res) {
  const { id } = req.params;

  const training = await TrainingsModel.findOne({ _id: id });

  res.send({ data: training });
}

async function deleteTraining (req, res) {
  const { id } = req.params;

  await TrainingsModel.deleteOne({ _id: id });

  res.send({ data: { _id: id } });
}

async function updateTraning (req, res) {
  const { firstName, lastName } = req.body;
  const { id } = req.params;

  await TrainingsModel.updateOne({ _id: id }, { firstName, lastName });

  res.send({ data: { _id: id } });
}

module.exports = {
  listTrainings,
  createTraining,
  getTraining,
  deleteTraining,
  updateTraning
};
