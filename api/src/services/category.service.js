const { Category } = require('./db.service.js');
const helper = require('../utils/helper.util.js');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);

  var data = id ? await Category.findAll({where:{id:id} }) : await Category.findAll(options);
  var result = {
    data,
    meta,
  };
  if(!result.data || !result.data.length || result.data.length === 0){
    const jobs =[  {
      name: 'Carpintería',
      image: 'https://cdn-icons-png.flaticon.com/512/1973/1973946.png',
      description:
        'Arte y técnica de trabajar la madera y de fabricar o arreglar objetos con ella.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Cocina',
      image: 'https://cdn-icons-png.flaticon.com/512/3183/3183463.png',
      description:
        'Preparación, conservación y presentación de los alimentos que conforman la oferta gastronómica de un evento.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Electricidad',
      image: 'https://cdn-icons-png.flaticon.com/512/3467/3467271.png',
      description:
        'Instalación y reparación de cables, cableado, contadores, aparatos de maniobra, conductos de metal (cables), instalaciones eléctricas y equipamientos tanto en los edificios nuevos como en edificios antiguos.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Estilismo',
      image: 'https://cdn-icons-png.flaticon.com/512/9423/9423538.png',
      description:
        'Mejorar la imagen de una persona, ya sea con la ropa, cabello y/o maquillaje.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Fotografía y vídeo',
      image: 'https://cdn-icons-png.flaticon.com/512/2383/2383411.png',
      description:
        'Arte de tomar fotografías y vídeos con una cámara digital o de película.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Jardinería',
      image: 'https://cdn-icons-png.flaticon.com/512/1518/1518914.png',
      description: 'Arte y técnica de cuidar y cultivar los jardines.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Limpieza',
      image: 'https://cdn-icons-png.flaticon.com/512/995/995016.png',
      description: 'Organización y limpieza de la casa.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Pintura',
      image: 'https://cdn-icons-png.flaticon.com/512/3162/3162611.png',
      description: 'Aplicación de color y protección a paredes y techos.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Plomería',
      image: 'https://cdn-icons-png.flaticon.com/512/4635/4635163.png',
      description:
        'Instalación y mantenimiento de sistemas usados para agua potable, drenaje y aguas residuales en sistemas de plomería.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Repostería y pastelería',
      image: 'https://cdn-icons-png.flaticon.com/512/2917/2917629.png',
      description:
        'Preparar y adornar platillos dulces como lo pueden ser los pasteles, panadería, galletas, entre otros más.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Seguridad',
      image: 'https://cdn-icons-png.flaticon.com/512/4009/4009139.png',
      description:
        'Mantener la seguridad de las personas y de las propiedades en un área específica.',
      deleted: false,
      parent: 0,
    },
    {
      name: 'Otro',
      image: 'https://cdn-icons-png.flaticon.com/512/1086/1086474.png',
      description: 'Otros tipos de trabajo.',
      deleted: false,
      parent: 0,
    },
  ];
    var i=0
    while(i<jobs.length){
       await Category.create(jobs[i]);
      i++
    }
    data=await Category.findAll();
     result = {
      data,
      meta,
    };
    return result
}
  return result;
}

async function create(category) {
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



  return Category.create(category);
}

async function update(category) {
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
  const { id } = category;

  return Category.update(category, {
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
  const result = await Category.update(
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
