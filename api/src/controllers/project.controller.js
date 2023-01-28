const project = require('../services/project.service.js');

async function read(req, res, next) {
  try {
    res.status(200).send(await project.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting projects`, err.message);
    next(err);
  }
}

async function readByUser(req, res, next) {
  try {
    res.status(200).send(await project.readByUser(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting projects`, err.message);
    next(err);
  }
}

async function readByPostulations(req, res, next) {
  try {
    res.status(200).send(await project.readByPostulations(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting projects`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await project.create(req.body));
  } catch (err) {
    console.error(`Error while creating project`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await project.update(req.body));
  } catch (err) {
    console.error(`Error while updating project`, err.message);
    next(err);
  }
}
async function remove(req, res, next) {
  try {
    res.status(201).send(await project.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting project`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
  readByUser,
  readByPostulations
};
