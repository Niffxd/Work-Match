const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    image:{
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING,
    },
    parent:{
        type: DataTypes.INTEGER
    }
  }),
    { timestamps: false };
  // TimeStamps won't be used
};