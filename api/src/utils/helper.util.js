const config = require('../configs/general.config.js');

function getOffset(currentPage, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function findOptions(page, ord) {
  const limit = config.listPerPage;
  const offset = getOffset(page, limit);

  const options = {
    offset,
    limit,
    where: {
      deleted: false,
    },
  };

  if (ord && ord.hasOwnProperty('column')) {
    const { column, direction = 'ASC' } = ord;
    const order = [[column, direction]];
    options.order = order;
  }

  return options;
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

module.exports = {
  getOffset,
  emptyOrRows,
  findOptions,
};
