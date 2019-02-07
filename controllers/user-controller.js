const UsersModel = require('../models/training-model');

async function listUsers (req, res) {
  const users = await UsersModel.find({});

  res.send({ data: users });
}

async function createUser (req, res) {
  const { firstName, lastName } = req.body;

  const user = await UsersModel.create({ firstName, lastName });

  res.send({ data: user });
}

async function getUser (req, res) {
  const { id } = req.params;

  const user = await UsersModel.findOne({ _id: id });

  res.send({ data: user });
}

async function deleteUser (req, res) {
  const { id } = req.params;

  await UsersModel.deleteOne({ _id: id });

  res.send({ data: { _id: id } });
}

async function updateUser (req, res) {
  const { firstName, lastName } = req.body;
  const { id } = req.params;

  await UsersModel.updateOne({ _id: id }, { firstName, lastName });

  res.send({ data: { _id: id } });
}

module.exports = {
  listUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser
};
