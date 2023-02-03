const { User } = require('./db.service.js');
const helper = require('../utils/helper.util.js');
const { where } = require('sequelize');

async function read(id, query) {
  const page = query.page || 1;

  const meta = { page };

  const options = helper.findOptions(page, query);

  const data = id ? await Login.findAll({where:{id:id} }) : await Login.findAll(options);
  const result = {
    data,
    meta,
  };
  return result;
}

async function Login(login) {
 
var msg;
  result=await User.findAll({
    where: 
      {username: login.username, password: login.password,} 
    ,attributes: ['id']
  });
if(result.length>0){
  msg=User.findAll({where:{username:login.username},})
}else{
  msg="username or password incorrect"
}
  return msg
}

/*async function Login(login) {
 
 console.log("entro")
  var msg;
    result=await User.findAll({
      where: 
        {username: login.username, password: login.password,} 
      ,attributes: ['id']
    });
  if(result.length>0){
    msg=User.findAll({where:{username:login.username},})
  }else{
    msg="username or password incorrect"
  }
    return msg
  }
*/
  async function sendEmail(emailInfo) {
 
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
      to: emailInfo.email,
      subject: 'Notificación de workmatch',
      text: 'Hola ! '+emailInfo,
      html: `Hola !!, <strong>${emailInfo.email}</strong>, Felicidades por crearte una cuenta en Workmatch, espero disfutes tu experiencia :) </p>`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 

    }

async function update(login) {
  const { id } = login;

  return Login.update(login, {
    where: {
      id,
    },
  });
}

async function remove(id) {
  const result = await Login.update(
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
  Login,
  update,
  remove,
  sendEmail
};
