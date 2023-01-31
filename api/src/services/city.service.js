const { City } = require('./db.service.js');
const helper = require('../utils/helper.util.js');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);

  var data = id ? await City.findAll({where:{id:id} }) : await City.findAll(options);
  var result = {
    data,
    meta,
  };
  if(!result.data || !result.data.length || result.data.length === 0){
    const jobs =[ {
      "state":1,
      "name":"Banfield",
      "deleted":false
    },
    {
      "state":1,
      "name":"Lanús",
      "deleted":false
    },
    {
      "state":2,
      "name":"Antofagasta de la Sierra",
      "deleted":false
    },
    {
      "state":2,
      "name":"El Rodeo",
      "deleted":false
    },
    /*{
      "state":3,
      "name":" Bolívar",
      "deleted":false
    },
    {
      "state":3,
      "name":"Libertador",
      "deleted":false
    },
    {
      "state":4,
      "name":"Cabimas",
      "deleted":false
    },
    {
      "state":4,
      "name":"Maracaibo",
      "deleted":false
    },
    {
      "state":5,
      "name":" Remedios",
      "deleted":false
    },
    {
      "state":5,
      "name":"Frontino",
      "deleted":false
    },
    {
      "state":6,
      "name":"Nueva Granada",
      "deleted":false
    },
    {
      "state":6,
      "name":"Santa Marta",
      "deleted":false
    },*/
    ];
    var i=0
    while(i<jobs.length){
       await City.create(jobs[i]);
      i++
    }
     data=await City.findAll();
     result = {
      data,
      meta,
    };
    return result
}
  return result;
}

async function create(city) {
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



  return City.create(city);
}

async function update(city) {
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
  const { id } = city;

  return City.update(city, {
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
  const result = await City.update(
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
