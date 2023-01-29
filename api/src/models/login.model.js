const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Login", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    user:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    passwordReset:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
  }),
    { timestamps: false };
  // TimeStamps won't be used
};