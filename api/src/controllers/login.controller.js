const login = require('../services/login.service.js');

async function read(req, res, next) {
  try {
    res.status(200).send(await login.read(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting login`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.status(201).send(await login.Login(req.body));
  } catch (err) {
    console.error(`Error while creating login`, err.message);
    next(err);
  }
}
//
async function createEmailRequest(req, res, next) {
  try {
    res.status(201).send(await login.sendEmailRegister(req.body));
  } catch (err) {
    console.error(`Error while sending email`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(201).send(await login.update(req.body));
  } catch (err) {
    console.error(`Error while updating login`, err.message);
    next(err);
  }
}
async function remove(req, res, next) {
  try {
    res.status(201).send(await login.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting login`, err.message);
    next(err);
  }
}

module.exports = {
  read,
  create,
  update,
  remove,
  createEmailRequest
};