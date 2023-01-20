const ejemplo = require('../services/ejemplo.service.js');

async function read(req, res, next) {
  try {
    res.json(await ejemplo.read(req.query.page));
  } catch (err) {
    console.error(`Error while getting ejemplos`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await ejemplo.create(req.body));
  } catch (err) {
    console.error(`Error while creating ejemplo`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await ejemplo.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating ejemplo`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await ejemplo.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting ejemplo`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
};
