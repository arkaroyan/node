const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
});

const UsersModel = mongoose.model('Users', UsersSchema);

module.exports = UsersModel;
