const country = require('../services/country.service.js');

async function read(req, res, next) {
  try {
    res.status(200).send(await country.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting country`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await country.create(req.body));
  } catch (err) {
    console.error(`Error while creating country`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await country.update(req.body));
  } catch (err) {
    console.error(`Error while updating country`, err.message);
    next(err);
  }
}
async function remove(req, res, next) {
  try {
    res.status(201).send(await country.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting country`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
};
