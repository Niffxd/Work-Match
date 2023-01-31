const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Bid", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    project: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }),
    { timestamps: false };
  // TimeStamps won't be used
};
