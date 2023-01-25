const city = require('../services/city.service.js');

async function read(req, res, next) {
  try {
    res.status(200).send(await city.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting city`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await city.create(req.body));
  } catch (err) {
    console.error(`Error while creating city`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await city.update(req.body));
  } catch (err) {
    console.error(`Error while updating city`, err.message);
    next(err);
  }
}
async function remove(req, res, next) {
  try {
    res.status(201).send(await city.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting city`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
};
