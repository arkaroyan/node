const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const TrainingController = require('./controllers/training-controller');

const app = express();

const server = 'cluster0-shard-00-02-liy1z.azure.mongodb.net:27017';
const database = 'myDB';
const user = 'arkaroyan';
const password = 'Bet@Cons394';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/trainings', TrainingController.listTrainings);
app.post('/trainings', TrainingController.createTraining);
app.get('/trainings/:id', TrainingController.getTraining);
app.patch('/trainings/:id', TrainingController.updateTraning);
app.delete('/trainings/:id', TrainingController.deleteTraining);

module.exports = app;
