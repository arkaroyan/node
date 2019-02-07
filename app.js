const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const UserController = require('./controllers/user-controller');

const app = express();

mongoose.connect('mongodb://localhost/express-server');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/users', UserController.listUsers);
app.post('/users', UserController.createUser);
app.get('/users/:id', UserController.getUser);
app.patch('/users/:id', UserController.updateUser);
app.delete('/users/:id', UserController.deleteUser);

module.exports = app;
