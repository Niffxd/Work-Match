const { State } = require('./db.service.js');
const helper = require('../utils/helper.util.js');
const country = require('../services/country.service.js');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);

  var data = id
    ? await State.findAll({ where: { id: id } })
    : await State.findAll(options);
  var result = {
    data,
    meta,
  };
  if (!result.data || !result.data.length || result.data.length === 0) {
    await country.read(1, { page: 1 });
    const jobs = [
      {
        country: 1,
        name: 'Buenos Aires',
        deleted: false,
      },
      {
        country: 1,
        name: 'Catamarca',
        deleted: false,
      },
      {
        country: 1,
        name: 'Chaco',
        deleted: false,
      },
      {
        country: 1,
        name: 'Chubut',
        deleted: false,
      },
      {
        country: 1,
        name: 'Córdoba',
        deleted: false,
      },
      {
        country: 1,
        name: 'Corrientes',
        deleted: false,
      },
      {
        country: 1,
        name: 'Entre Ríos',
        deleted: false,
      },
      {
        country: 1,
        name: 'Formosa',
        deleted: false,
      },
      {
        country: 1,
        name: 'Jujuy',
        deleted: false,
      },
      {
        country: 1,
        name: 'La Pampa',
        deleted: false,
      },
      {
        country: 1,
        name: 'La Rioja',
        deleted: false,
      },
      {
        country: 1,
        name: 'Mendoza',
        deleted: false,
      },
      {
        country: 1,
        name: 'Misiones',
        deleted: false,
      },
      {
        country: 1,
        name: 'Neuquén',
        deleted: false,
      },
      {
        country: 1,
        name: 'Río Negro',
        deleted: false,
      },
      {
        country: 1,
        name: 'Salta',
        deleted: false,
      },
      {
        country: 1,
        name: 'San Juan',
        deleted: false,
      },
      {
        country: 1,
        name: 'San Luis',
        deleted: false,
      },
      {
        country: 1,
        name: 'Santa Cruz',
        deleted: false,
      },
      {
        country: 1,
        name: 'Santa Fe',
        deleted: false,
      },
      {
        country: 1,
        name: 'Santiago del Estero',
        deleted: false,
      },
      {
        country: 1,
        name: 'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
        deleted: false,
      },
      {
        country: 1,
        name: 'Tucumán',
        deleted: false,
      },
      /*{
      "country":2,
      "name":"Aragua",
      "deleted":false
    },
    {
      "country":2,
      "name":"Zulia",
      "deleted":false
    },
    {
      "country":3,
      "name":"Antioquia",
      "deleted":false
    },
    {
      "country":3,
      "name":"Magdalena",
      "deleted":false
    }*/
    ];
    var i = 0;
    while (i < jobs.length) {
      await State.create(jobs[i]);
      i++;
    }
    data = await State.findAll();
    result = {
      data,
      meta,
    };
    return result;
  }
  return result;
}

async function create(state) {
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

  return State.create(state);
}

async function update(state) {
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
  const { id } = state;

  return State.update(state, {
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
  const result = await State.update(
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
