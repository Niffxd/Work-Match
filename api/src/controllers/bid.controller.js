const bid = require('../services/bid.service.js');

async function create(req, res, next) {
  try {
    res.status(200).send(await bid.create(req.body));
  } catch (err) {
    console.error(`Error while creating bid`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.status(200).send(await bid.update(req.body));
  } catch (err) {
    console.error(`Error while updating bid`, err.message);
    next(err);
  }
}

module.exports = {
  create,
  update,
};
