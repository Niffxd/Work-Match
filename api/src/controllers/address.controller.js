const address = require('../services/address.service.js');

async function read(req, res, next) {
  try {
    res.status(200).send(await address.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting address`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await address.create(req.body));
  } catch (err) {
    console.error(`Error while creating address`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await address.update(req.body));
  } catch (err) {
    console.error(`Error while updating address`, err.message);
    next(err);
  }
}
async function remove(req, res, next) {
  try {
    res.status(201).send(await address.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting address`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
};
