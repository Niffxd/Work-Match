const { User } = require('./db.service.js');
const helper = require('../utils/helper.util.js');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);

  const data = id ? await User.findByPk(id) : await User.findAll(options);

  const result = {
    data,
    meta,
  };

  return result;
}

async function create(user) {
  return User.create(user);
}

async function update(user) {
  const { id } = user;

  return User.update(user, {
    where: {
      id,
    },
  });
}

async function remove(id) {
  const result = await User.update(
    {
      deleted: true,
    },
    {
      where: {
        id,
      },
    }
  );
  return result;
}

module.exports = {
  read,
  create,
  update,
  remove,
};
