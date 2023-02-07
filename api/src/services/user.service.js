const {
  User,
  Address,
  City,
  State,
  Country,
  Project,
  Category,
} = require('./db.service.js');
const helper = require('../utils/helper.util.js');
const role = require('../services/role.service.js');
const jobState = require('../services/jobState.service.js');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);

  var data = id
    ? await User.findAll({
        where: { id: id },
        include: [
          {
            model: Address,
            attributes: ['id', 'state', 'description'],
          },
          {
            model: Project,
            attributes: [
              'id',
              'description',
              'deleted',
              'status',
              'budget',
              'state',
            ],
            include: [
              {
                model: Category,
                attributes: ['id', 'name', 'image'],
              },
              {
                model: User,
                attributes: [
                  'id',
                  'name',
                  'biography',
                  'phone',
                  'image',
                  'rate',
                  'premium',
                ],
              },
            ],
          },
        ],
      })
    : await User.findAll({
        ...options,
        include: [
          {
            model: Project,
            attributes: ['id'],
            include: [
              {
                model: Category,
                attributes: ['id', 'name'],
              },
            ],
          },
        ],
      });

  var result = {
    data,
    meta,
  };
  if (!result.data || !result.data.length || result.data.length === 0) {
    await role.read(1, { page: 1 });
    // await jobState.read(1, { page: 1 });
    const jobs = [
      {
        username: 'admin',
        password: '1234',
        name: 'Miguel Mendez Gonzales',
        age: 35,
        biography:
          'Lorem qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
        mail: 'miguel123@email.com',
        phone: 2548773945,
        role: 1,
        image: 'https://cdn-icons-png.flaticon.com/512/6186/6186344.png',
        premium: true,
      },
      {
        username: 'dari',
        password: '1234',
        name: 'Dariana Rengifo',
        age: 25,
        biography:
          'Lorem qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
        mail: 'darianarengifo@gmail.com',
        phone: 3517739445,
        role: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/2335/2335153.png',
      },
      {
        username: 'nico',
        password: '1234',
        name: 'Nicolas sanchez',
        age: 26,
        biography:
          'Lorem qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
        mail: 'nicosanchez673@gmail.com',
        phone: 5493816631856,
        role: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/1785/1785888.png',
        premium: true,
        rate: 4,
      },
      {
        username: 'pedro',
        password: '1234',
        name: 'Pedro Aristigueta',
        age: 31,
        biography:
          'Lorem qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
        mail: 'aristiguetam97@gmail.com',
        phone: 51959734026,
        role: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/2566/2566158.png',
        premium: true,
      },
      {
        username: 'diego',
        password: '1234',
        name: 'Diego Ezequiel Guillén',
        age: 31,
        biography:
          'Lorem qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
        mail: 'diegoezequielguillen@gmail.com',
        phone: 5492665031781,
        role: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png',
        rate: 5,
      },
      {
        username: 'marcos',
        password: '1234',
        name: 'Marcos Carbajales',
        age: 31,
        biography:
          'Lorem qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
        mail: 'marcoscarbajales96@gmail.com',
        phone: 5493815128406,
        role: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/2566/2566162.png',
        rate: 4,
      },
      {
        username: 'mateo',
        password: '1234',
        name: 'Mateo Colombatti',
        age: 31,
        biography:
          'Lorem qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
        mail: 'mateo.rng@gmail.com',
        phone: 5492215978443,
        role: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
        premium: true,
      },
      {
        username: 'daniel',
        password: '1234',
        name: 'Daniel Valencia Giraldo',
        age: 31,
        biography:
          'Lorem qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem',
        mail: 'valenciadaniel8022015@gmail.com',
        phone: 573116886868,
        role: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png',
        premium: true,
      },
    ];
    var i = 0;
    while (i < jobs.length) {
      await User.create(jobs[i]);
      i++;
    }
    data = await User.findAll();
    result = {
      data,
      meta,
    };
    return result;
  }

  return result;
}

async function getUserName(username) {
  const userFound = await User.findOne({
    where: { username },
  });
  return userFound;
}

async function readUserAddres(id, query) {
  const page = query.page || 1;
  const meta = { page };
  const options = helper.findOptions(page, query);
  var userId = await User.findAll({
    where: { username: id },
    attributes: ['id'],
    raw: true,
  });
  var data = await Country.findAll({
    include: [
      {
        model: State,
        required: true,
        include: [
          {
            model: Address,
            required: true,
            where: { user: userId[0].id },
          },
        ],
      },
    ],
  });
  var result = {
    data,
    meta,
  };

  return result;
}

async function create(user) {
  const data=await User.create(user);
  sendEmailRegister(data)
  return data;
}

async function sendEmailRegister(emailInfo) {
 
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'workmatch2023@gmail.com',
      pass: 'xgevyobvubntykvx'
    }
  });
  
  var mailOptions = {
    from: 'workmatch2023@gmail.com',
    to: emailInfo.mail,
    subject: 'Notificación de workmatch',
    text: 'Hola ! '+emailInfo,
    html: `Hola <strong>${emailInfo.name}</strong>.
    <br>!Bienvenido a Work-Match!, Aqui podras postularte 
    a tu trabajo ideal o encontrar al candidato perfecto para realizar un trabajo </p>
    <br>
    <br> <img src="cid:logo">
    <br>
    <br> Atentamente: Equipo Work-Match`,
    attachments: [{
      filename: 'small_logo.png',
      path: __dirname +'/small_logo.png',
      cid: 'logo'
  }]
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 

  }

async function updateRate(user) {
  const { rate, id } = user;
  const userFound = await User.findByPk(id, {
    attributes: ['rate'],
  });
  if (!userFound.rate) {
    userFound.rate = rate;
    await userFound.save();
  } else {
    const rateNew = (userFound.rate + rate) / 2;
    userFound.rate = rateNew;
    await userFound.save();
  }

  return userFound;
}

async function update(user) {
  const { id } = user;

  return User.update(user, {
    where: {
      id,
    },
  });
}

async function reactivateAccount(id) {
  const userFound = await User.findAll({
    where: { id },
    include: [
      {
        model: Project,
        attributes: ['id', 'owner'],
      },
    ],
  });
  for (let i in userFound[0].Projects) {
    if (userFound[0].Projects[i].owner === parseInt(id)) {
      await Project.update(
        {
          deleted: false,
        },
        {
          where: {
            id: userFound[0].Projects[i].id,
          },
        }
      );
    }
  }
  await User.update(
    {
      deleted: false,
    },
    {
      where: {
        id,
      },
    }
  );
  return userFound;
}

async function remove(id) {
  const userFound = await User.findAll({
    where: { id },
    include: [
      {
        model: Project,
        attributes: ['id', 'owner'],
      },
    ],
  });
  for (let i in userFound[0].Projects) {
    if (userFound[0].Projects[i].owner === parseInt(id)) {
      await Project.update(
        {
          deleted: true,
        },
        {
          where: {
            id: userFound[0].Projects[i].id,
          },
        }
      );
    }
  }
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
  sendEmailRemoveAccount(userFound[0])
  return result;
}

async function sendEmailRemoveAccount(emailInfo) {
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'workmatch2023@gmail.com',
      pass: 'xgevyobvubntykvx'
    }
  });
  var mailOptions = {
    from: 'workmatch2023@gmail.com',
    to: emailInfo.mail,
    subject: 'Notificación de workmatch',
    text: 'Hola ! '+emailInfo,
    html: `Hola <strong>${emailInfo.name}</strong>.
    <br> Tu cuenta fue desactivada con exito.
    <br> Puedes rectivarla cuando gustes .
    <br> Esperamos verte pronto </p>
    <br>
    <br> <img src="cid:logo">
    <br>
    <br> Atentamente: Equipo Work-Match`,
    attachments: [{
      filename: 'small_logo.png',
      path: __dirname +'/small_logo.png',
      cid: 'logo'
  }]
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 

  }

module.exports = {
  read,
  create,
  update,
  updateRate,
  remove,
  reactivateAccount,
  readUserAddres,
  getUserName,
};
