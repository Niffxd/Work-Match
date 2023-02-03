const user = require('../services/user.service.js');

async function read(req, res, next) {
  try {
    res.status(200).json(await user.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting users`, err.message);
    next(err);
  }
}
async function readUserAddres(req, res, next) {
  try {
    res.status(200).send(await user.readUserAddres(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting projects`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await user.create(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await user.update(req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
}

async function updateRate(req, res, next) {
  try {
    res.status(201).send(await user.update(req.body));
  } catch (err) {
    console.error(`Error while updating user's rate`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.status(201).send(await user.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
}

async function reactivateAccount(req, res, next) {
  try {
    res.status(201).send(await user.reactivateAccount(req.params.id));
  } catch (err) {
    console.error(`Error while reactiveAccount`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  updateRate,
  remove,
  readUserAddres,
  reactivateAccount,
};
