const { User,Address,City,State,Country } = require('./db.service.js');
const helper = require('../utils/helper.util.js');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);

  var data = id ? await User.findByPk(id) : await User.findAll(options);

  var result = {
    data,
    meta,
  };
  if(result.data.length===0){
    const jobs =[ {
      id:"ElsuperAdmin",
      password:"topSecretPassword",
      name:"Miguel Mendez Gonzales",
      deleted:false,
      age:23,
      biography:"I am the admin user!!",
      mail:"email@email.com",
      phone:25487,
      rate:null,
      role:1,
      image:"",
      premium:true,
      jobState:4
    },{
      id:"ElPrimerUsuario",
      password:"topSecretPassword2",
      name:"José Biden Rodriguez",
      deleted:false,
      age:31,
      biography:"I like apples!!",
      mail:"email2@email.com",
      phone:2145,
      rate:null,
      role:2,
      image:"",
      premium:false,
      jobState:1
    }
  ];
    var i=0
    while(i<jobs.length){
       await User.create(jobs[i]);
      i++
    }
    data=await User.findAll();
     result = {
      data,
      meta,
    };
    return result
}

  return result;
}

async function readUserAddres(id,query) {
  const page = query.page || 1;
  const meta = { page };
  const options = helper.findOptions(page, query);
    var data = await User.findAll({
    include : [
      { 
        model: Address, 
        where:{user:id},
        required: true,
        extends:[
          {
            model: City, 
            required: true,
            extends:[
              {
                model: State, 
                required: true,
                extends:[
                  {
                    model: Country, 
                    required: true,
                  }
                ]
              }
            ]           
          },
          
        ]
        }
    ],
  })
        var result = {
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
  readUserAddres
};
