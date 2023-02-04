const { Bid } = require('./db.service.js');

async function create(bid) {
  //instrucciones: bid = {project: id, user: id, owner: id}

  return await Bid.create(bid);
}

async function update(bid) {
  const { id, status } = bid;
  // const bidFound = await Bid.findByPk(id, {
  //   attributes: ['status'],
  // });
  // bidFound.status = status;
  // await bidFound.save();

  // return bidFound;
  return Bid.update(
    { status },
    {
      where: {
        id,
      },
    }
  );
}

module.exports = {
  create,
  update,
};
