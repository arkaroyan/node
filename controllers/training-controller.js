const TrainingsModel = require('../models/training-model');
const NotFoundError = require('../libs/errors/not-found-error');

async function listTrainings (req, res, next) {
  try {
    const trainings = await TrainingsModel.find({});

    res.send({ data: trainings });
  } catch(error) {
    next(error);
  }

}

async function createTraining (req, res, next) {
  const { trainingName, instructorName, schedule, price, openSeats } = req.body;

  try {
    const training = await TrainingsModel.create({ trainingName, instructorName, schedule, price, openSeats });

    res.send({ data: training });
  } catch(error) {
    next(error);
  }


}

async function getTraining (req, res, next) {
  const { id } = req.params;

  try {
    const training = await TrainingsModel.findOne({ _id: id });

    if(!training) {
      throw new NotFoundError(`Training with id: ${id} is not found.`);
    }

    res.send({ data: training });

  } catch(error) {
    next(error);
  }

}

async function deleteTraining (req, res, next) {
  const { id } = req.params;

  try {
    await TrainingsModel.deleteOne({ _id: id });

    res.send({ data: { _id: id } });
  } catch(error) {
    next(error);
  }


}

async function updateTraning (req, res, next) {
  const { firstName, lastName } = req.body;
  const { id } = req.params;

  try {
    await TrainingsModel.updateOne({ _id: id }, { firstName, lastName });

    res.send({ data: { _id: id } });
  } catch(error) {
    next(error);
  }


}

module.exports = {
  listTrainings,
  createTraining,
  getTraining,
  deleteTraining,
  updateTraning
};
