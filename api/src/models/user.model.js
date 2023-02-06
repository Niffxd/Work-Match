const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      age: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        validate: {
          isNumeric: true,
          min: 16,
        },
      },
      biography: {
        type: DataTypes.STRING,
      },
      mail: {
        type: DataTypes.STRING(100),
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.BIGINT,
        validate: {
          isNumeric: true,
        },
      },
      rate: {
        type: DataTypes.INTEGER,
      },
      role: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      },
      premium: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    }
    // TimeStamps will be used as determinant of seniority on the platform
  );
};
