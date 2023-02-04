const { Address, User } = require('./db.service.js');
const helper = require('../utils/helper.util.js');
//const city = require('../services/city.service.js');
const state = require('../services/state.service.js');
const country = require('../services/country.service.js');
const user = require('./user.service.js');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);

  var data = id
    ? await Address.findAll({ where: { id: id } })
    : await Address.findAll(options);
  var data2 = await User.findAll({ limit: 1, options });
  var result = {
    data,
    meta,
  };

  if (!result.data || !result.data.length || result.data.length === 0) {
    // await country.read(1, { page: 1 });
    await state.read(1, { page: 1 });
    //await city.read(1, { page: 1 });
    if (!data2 || !data2.length || data2.length === 0) {
      await user.read(1, { page: 1 });
    }
    const jobs = [
      {
        state: 1,
        user: 1,
        description: 'Avenida siempre viva #21-1 ',
      },
      {
        state: 2,
        user: 2,
        description: 'La calle 9',
      },
      {
        state: 3,
        user: 3,
        description: 'La calle 1234',
      },
      {
        state: 4,
        user: 4,
        description: 'La calle del Banco #33-29',
      },
      {
        state: 5,
        user: 5,
        description: 'Avenida siempre viva #21-1 ',
      },
      {
        state: 6,
        user: 6,
        description: 'La calle 9',
      },
      {
        state: 7,
        user: 7,
        description: 'La calle 1234',
      },
      {
        state: 8,
        user: 8,
        description: 'La calle del Banco #33-29',
      },
    ];
    var i = 0;
    while (i < jobs.length) {
      await Address.create(jobs[i]);
      i++;
    }
    data = await Address.findAll();
    result = {
      data,
      meta,
    };
    return result;
  }
  return result;
}

async function create(address) {
  // let message;
  // const {
  //   title,
  //   description,
  //   direction,
  //   status,
  //   estimatedTime,
  //   renumerations,
  //   agreement,
  // } = project;
  // // job title must be just strings
  // const onlyLettersPattern = /^[a-zA-Z0-9_ ]*$/;
  // const noSpecialCharacters = /[^a-zA-Z0-9 ]/;
  // const justNumbers = /^[0-9]*$/;
  // const jobs = {
  //   title,
  //   description,
  //   direction,
  //   status,
  //   estimatedTime,
  //   renumerations,
  //   agreement,
  // };
  // if (
  //   !title ||
  //   !description ||
  //   !direction ||
  //   status.length === 0 ||
  //   !estimatedTime ||
  //   !renumerations ||
  //   agreement.length === 0
  // ) {
  //   message = 'please , fill all data';
  // } else if (!title.match(onlyLettersPattern)) {
  //   message = 'No special characters and no numbers allowed for title, please!';
  // }
  // // desciption length maximun 500 characters
  // else if (description.length > 500) {
  //   message = 'maximum 500 characters for description!!';
  // }
  // // agreement can be just boolean
  // else if (typeof agreement !== 'boolean' || typeof status !== 'boolean') {
  //   message = 'just boolean allowed for agreement and status!';
  // }
  // // estimated time can not have special characters
  // else if (estimatedTime.match(noSpecialCharacters)) {
  //   message = 'No special characters allowed for estimated time, please!';
  // } else if (!String(renumerations).match(justNumbers)) {
  //   message = 'just numbers allowed, please!';
  // }
  // if (!message) {
  //   const result = Projects.create(jobs);
  //   message = 'project created successfully';
  // }
  // return { message };

  return Address.create(address);
}

async function update(address) {
  // let message;
  // const projectDb = await Projects.findOne({
  //   where: {
  //     id,
  //   },
  // });
  // if (projectDb) {
  //   const {
  //     title,
  //     description,
  //     direction,
  //     status,
  //     estimatedTime,
  //     renumerations,
  //     agreement,
  //   } = project;
  //   const onlyLettersPattern = /^[a-zA-Z0-9_ ]*$/;
  //   const noSpecialCharacters = /[^a-zA-Z0-9 ]/;
  //   const justNumbers = /^[0-9]*$/;
  //   const jobs = {
  //     title,
  //     description,
  //     direction,
  //     status,
  //     estimatedTime,
  //     renumerations,
  //     agreement,
  //   };
  //   if (
  //     !title ||
  //     !description ||
  //     !direction ||
  //     status.length === 0 ||
  //     !estimatedTime ||
  //     !renumerations ||
  //     agreement.length === 0
  //   ) {
  //     message = 'please , fill all data';
  //   } else if (!title.match(onlyLettersPattern)) {
  //     message =
  //       'No special characters and no numbers allowed for title, please!';
  //   }
  //   // desciption length maximun 500 characters
  //   else if (description.length > 500) {
  //     message = 'maximum 500 characters for description!!';
  //   }
  //   // agreement can be just boolean
  //   else if (typeof agreement !== 'boolean' || typeof status !== 'boolean') {
  //     message = 'just boolean allowed for agreement and status!';
  //   }
  //   // estimated time can not have special characters
  //   else if (estimatedTime.match(noSpecialCharacters)) {
  //     message = 'No special characters allowed for estimated time, please!';
  //   } else if (!String(renumerations).match(justNumbers)) {
  //     message = 'just numbers allowed, please!';
  //   }
  //   if (!message) {
  //     const result = await Projects.update(jobs, {
  //       where: { id },
  //     });

  //     message = 'project updated succesfully';
  //   }
  // } else {
  //   message = 'id does not found';
  // }
  // return { message };
  const { id } = address;

  return Address.update(address, {
    where: {
      id,
    },
  });
}

async function remove(id) {
  // let message;
  // const projectDb = await Projects.destroy({
  //   where: {
  //     id,
  //   },
  // });
  // if (projectDb) {
  //   message = 'project deleted successfully';
  // } else {
  //   message = 'Error in deleting project';
  // }
  // return { message };
  const result = await Address.update(
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
