const { Bid } = require('./db.service.js');

async function create(bid) {
  //instrucciones: bid = {project: id, user: id, owner: id}

  return await Bid.create(bid);
}

async function update(bid) {
  const { id, state } = bid;
  const bidFound = await Bid.findByPk(id, {
    attributes: ['state'],
  });
  bidFound.state = state;
  await bidFound.save();

  return bidFound;
}

module.exports = {
  create,
  update,
};
