const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const dbConfig = require('../configs/db.config.js');
const { PATH } = require('../../config.js');

const sequelize = new Sequelize(dbConfig, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);
const modelDefiners = [];
// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(PATH, '/src/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(PATH, '/src/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Project,Category,Bid,Role,Login,Address,City,State,Country } = sequelize.models;
//FK category esta en Project
Category.hasOne(Project,{
  foreignKey: "category",
  foreignKeyConstraint: true
});
// Aca vendrian las relaciones
// Ejemplo.belongsToMany(Ejemplo2);
// Project  tiene muchos usuarios M/M
//FK de user esta en Bid
User.hasOne(Bid,{
  foreignKey: "user",
  foreignKeyConstraint: true
})
//FK de project esta en Bid
Project.hasOne(Bid,{
  foreignKey: "project",
  foreignKeyConstraint: true
})
//FK de role en user
Role.hasOne(User,{
  foreignKey: "role",
  foreignKeyConstraint: true
})
//FK de user en login
User.hasOne(Login,{
  foreignKey: "user",
  foreignKeyConstraint: true
})
//FK  de user en address
User.hasOne(Address,{
  foreignKey: "user",
  foreignKeyConstraint: true
})
//FK de city en address
City.hasOne(Address,{
  foreignKey: "city",
  foreignKeyConstraint: true
})
//FK de state en city
State.hasOne(City,{
  foreignKey: "state",
  foreignKeyConstraint: true
})
//FK de country en state
Country.hasOne(State,{
  foreignKey: "country",
  foreignKeyConstraint: true
})
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  Op,
};
