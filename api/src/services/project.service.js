const { Project } = require('./db.service.js');
const helper = require('../utils/helper.util.js');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);

  const data = id ? await Project.findByPk(id) : await Project.findAll(options);

  const result = {
    data,
    meta,
  };

  return result;
}

async function create(project) {
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
  return Project.create(project);
}

async function update(project) {
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
  const { id } = project;

  return Project.update(project, {
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
  const result = await Project.update(
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
