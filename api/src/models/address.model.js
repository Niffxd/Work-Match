const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      city:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user:{
        type: DataTypes.STRING,
        allowNull: false,
      },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
  }),
    { timestamps: false };
  // TimeStamps won't be used
};