const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const TrainingController = require('./controllers/training-controller');
const ErrorHandlerMiddleware = require('./middlewares/error-handler-middleware');
const ValidationMiddleware = require('./middlewares/validations');

const app = express();

const server = 'mongodb://arkaroyan:EfuSoft111@cluster0-shard-00-00-liy1z.azure.mongodb.net:27017/myDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'


mongoose.connect(server,{ useNewUrlParser: true });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/trainings', TrainingController.listTrainings);
app.post('/trainings', TrainingController.createTraining);
app.get('/trainings/:id', ValidationMiddleware.validateGetTrainingArgs, TrainingController.getTraining);
app.patch('/trainings/:id', TrainingController.updateTraning);
app.delete('/trainings/:id', TrainingController.deleteTraining);

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })

app.use(ErrorHandlerMiddleware.handleError);

module.exports = app;
