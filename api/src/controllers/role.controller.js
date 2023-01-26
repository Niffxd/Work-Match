const role = require('../services/role.service.js');

async function read(req, res, next) {
  try {
    res.status(200).send(await role.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting role`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await role.create(req.body));
  } catch (err) {
    console.error(`Error while creating role`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await role.update(req.body));
  } catch (err) {
    console.error(`Error while updating role`, err.message);
    next(err);
  }
}
async function remove(req, res, next) {
  try {
    res.status(201).send(await role.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting role`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
};