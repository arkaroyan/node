const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrainingsSchema = new Schema({
  trainingName: String,
instructorName: String,
schedule: [{
    date: Date,
    topic: String
}],
price: String,
openSeats: Number
});

const TrainingsModel = mongoose.model('Trainings', TrainingsSchema);

module.exports = TrainingsModel;
