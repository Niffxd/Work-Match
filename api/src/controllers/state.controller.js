const state = require('../services/state.service.js');

async function read(req, res, next) {
  try {
    res.status(200).send(await state.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting state`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await state.create(req.body));
  } catch (err) {
    console.error(`Error while creating state`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await state.update(req.body));
  } catch (err) {
    console.error(`Error while updating state`, err.message);
    next(err);
  }
}
async function remove(req, res, next) {
  try {
    res.status(201).send(await state.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting state`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
};
