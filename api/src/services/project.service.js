const { Project, Bid, User, JobState, Category } = require('./db.service.js');
const helper = require('../utils/helper.util.js');
const category = require('./category.service.js');
const user = require('./user.service.js');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);
  var data = id
    ? await Project.findAll({
        where: { id: id },
        order: [['id', 'DESC']],
        include: [
          {
            model: Category,
            attributes: ['id', 'name', 'image'],
          },
        ],
      })
    : await Project.findAll({
        order: [['id', 'DESC']],
        include: [
          {
            model: Category,
            attributes: ['id', 'name', 'image'],
          },
        ],
      });

  var result = {
    data,
    meta,
  };

  if (!result.data || !result.data.length || result.data.length === 0) {
    await category.read(1, { page: 1 });
    var data2 = await User.findAll({ limit: 1, options });
    if (!data2 || !data2.length || data2.length === 0) {
      await user.read(1, { page: 1 });
    }
    const jobs = [
      //1
      {
        description:
          'Nos encontramos en la búsqueda de personal con experiencia comprobable en carpintería y uso de herramientas manuales para el armado de paneles. Requerimos a una persona responsable, organizada y puntual.',
        category: 1, //carpinteria
        budget: 15000,
        agreement: false,
        owner: 2,
        bidder: 2,
        estimated: 6,
        information: 'Las Heras, calle 1234',
        state: 1,
      },
      //2
      {
        description:
          'Se busca cocinero para cumpleaños. Deberá preparar la entrada, plato principal y postre. Se requiere a una persona resolutiva, proactiva, entusiasta, con buena comunicación y relaciones interpersonales.',
        category: 2, //cocina
        budget: 20000,
        agreement: true,
        owner: 3,
        bidder: 3,
        information: 'Sábado 10 de febrero, 12:00hs, Restaurante Luz Azul',
        state: 2,
      },
      //3
      {
        status: false,
        description:
          'Se busca chef particular para evento. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.',
        category: 2, //cocina
        budget: 28000,
        agreement: false,
        owner: 4,
        bidder: 4,
        information: 'Sábado 15 de febrero, 20:00hs, Salon de Fiesta 123',
        state: 3,
      },
      //4
      {
        description:
          'Estamos en busca de fotógrafo de bodas. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.',
        category: 5, //fotografia
        budget: 15000,
        agreement: false,
        owner: 5,
        bidder: 5,
        estimated: 4,
        information: 'Sábado 17 de febrero, 15:00hs, Salon de Fiesta 123',
        state: 4,
      },
      //5
      {
        status: false,
        description:
          'Se rquiere plomero. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.',
        category: 9, //plomeria
        budget: 5000,
        agreement: true,
        owner: 6,
        bidder: 6,
        state: 5,
      },
      //6
      {
        status: false,
        description:
          'Se busca electricista. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.',
        category: 3, //electricidad
        budget: 5000,
        agreement: true,
        owner: 7,
        bidder: 7,
        state: 6,
      },
      //7
      {
        status: false,
        description:
          'Se busca peluquero. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.',
        category: 4, //estilismo
        budget: 2000,
        agreement: true,
        owner: 8,
        bidder: 8,
        estimated: 3,
        information: 'Viernes 25 de febrero, 10:00hs',
        state: 7,
      },
      //8
      {
        description:
          'Se busca fotógrafo. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.',
        category: 5, //fotografia
        budget: 5000,
        agreement: false,
        owner: 1,
        bidder: 1,
        estimated: 3,
        information: 'Sábado 17 de febrero, 15:00hs, Salon de Fiesta 123',
        state: 8,
      },
      //9
      {
        description:
          'Se busca jardinero. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.',
        category: 6, //jardineria
        budget: 5000,
        agreement: false,
        owner: 2,
        bidder: 2,
        estimated: 4,
        state: 9,
      },
      //10
      {
        description:
          'Se busca fotógrafo. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.',
        category: 5, //fotografia
        budget: 6500,
        agreement: false,
        owner: 3,
        bidder: 3,
        estimated: 4,
        state: 10,
      },
      //11
      {
        status: false,
        description:
          'Se busca plomero. Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.',
        category: 9, //plomeria
        budget: 48,
        agreement: false,
        owner: 4,
        bidder: 4,
        estimated: 3,
        state: 7,
      },
    ];

    const bids = [
      {
        project: 1,
        user: 2,
        status: 'Owner',
        owner: 2,
      },
      {
        project: 2,
        user: 3,
        status: 'Owner',
        owner: 3,
      },
      {
        project: 3,
        user: 4,
        status: 'Owner',
        owner: 4,
      },
      {
        project: 4,
        user: 5,
        status: 'Owner',
        owner: 5,
      },
      {
        project: 5,
        user: 6,
        status: 'Owner',
        owner: 6,
      },
      {
        project: 6,
        user: 7,
        status: 'Owner',
        owner: 7,
      },
      {
        project: 7,
        user: 8,
        status: 'Owner',
        owner: 8,
      },
      {
        project: 8,
        user: 1,
        status: 'Owner',
        owner: 1,
      },
      {
        project: 9,
        user: 2,
        status: 'Owner',
        owner: 2,
      },
      {
        project: 10,
        user: 3,
        status: 'Owner',
        owner: 3,
      },
      {
        project: 11,
        user: 4,
        status: 'Owner',
        owner: 4,
      },
      {
        project: 2,
        user: 2,
        status: 'Abierto',
        owner: 3,
      },
      {
        project: 3,
        user: 2,
        status: 'Match',
        owner: 4,
      },
      {
        project: 4,
        user: 2,
        status: 'Rechazado',
        owner: 5,
      },
      {
        project: 5,
        user: 2,
        status: 'Puntuar',
        owner: 6,
      },
      {
        project: 6,
        user: 2,
        status: 'Puntuar al postulado',
        owner: 7,
      },
      {
        project: 7,
        user: 2,
        status: 'Puntuar al empleador',
        owner: 8,
      },
      {
        project: 11,
        user: 2,
        status: 'Finalizado',
        owner: 4,
      },
      {
        project: 1,
        user: 3,
        status: 'Abierto',
        owner: 2,
      },
      {
        project: 1,
        user: 4,
        status: 'Abierto',
        owner: 2,
      },
      {
        project: 1,
        user: 5,
        status: 'Abierto',
        owner: 2,
      },
      {
        project: 1,
        user: 6,
        status: 'Abierto',
        owner: 2,
      },
    ];

    var i = 0;
    while (i < jobs.length) {
      await Project.create(jobs[i]);
      i++;
    }
    var j = 0;
    while (j < bids.length) {
      await Bid.create(bids[j]);
      j++;
    }

    data = await Bid.findAll();
    result = {
      data,
      meta,
    };
    data = await Project.findAll({
      order: [['id', 'DESC']],
      include: [
        {
          model: Category,
          attributes: ['id', 'name', 'image'],
        },
      ],
    });
    result = {
      data,
      meta,
    };
    return result;
  }

  return result;
}

async function readByUser(id, query) {
  const page = query.page || 1;
  const meta = { page };
  const options = helper.findOptions(page, query);

  var data = id
    ? await Project.findAll({
        where: { owner: id },
        include: [
          {
            model: User,
            required: true,
            where: { username: id },
          },
        ],
      })
    : await Project.findAll({
        where: { owner: id },
        order: [['id', 'DESC']],
        include: [
          {
            model: User,
            required: true,
          },
        ],
      });
  var result = {
    data,
    meta,
  };
  return result;
}

async function readByPostulations(id, query) {
  const page = query.page || 1;
  const meta = { page };
  const options = helper.findOptions(page, query);

  var data = await JobState.findAll({
    include: [
      {
        model: User,
        required: true,
        where: { username: id },
        include: [
          {
            model: Project,
            required: true,
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

async function create(project) {
  const data = await Project.create(project);
  const bids = {
    project: data.id,
    user: data.bidder,
    owner: data.owner,
    status: 'Owner',
    deleted: project.deleted,
  };

  await Bid.create(bids);

  var data1 = await User.findAll({
    attributes: ['mail'],
    include: [
      {
        model: Project,
        required: true,
        where: { id: data.id },
      },
    ],
  });
  sendEmailProject(data1[0].mail)
  return data;
}

async function sendEmailProject(emailInfo) {
 
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
    to: emailInfo,
    subject: 'Notificación de workmatch',
    text: 'Hola ! '+emailInfo,
    html: `<br>Tu oferta se publico correctamente!!</p>
    <br> <img src="cid:logo">
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

async function update(project) {
  const { id } = project;

  return Project.update(project, {
    where: {
      id,
    },
  });
}

async function remove(id) {
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
  readByUser,
  readByPostulations,
};
