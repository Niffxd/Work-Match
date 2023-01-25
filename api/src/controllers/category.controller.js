const category = require('../services/category.service.js');

async function read(req, res, next) {
  try {
    res.status(200).send(await category.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting category`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await category.create(req.body));
  } catch (err) {
    console.error(`Error while creating category`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await category.update(req.body));
  } catch (err) {
    console.error(`Error while updating category`, err.message);
    next(err);
  }
}
async function remove(req, res, next) {
  try {
    res.status(201).send(await category.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting category`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
};
