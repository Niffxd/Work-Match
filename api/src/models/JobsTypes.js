const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("JobsTypes", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //JobsTypes will be related with:
    // User n:m relation
    // Jobs n:1 JobsTypes relation
  }),
    { timestamps: false };
  // TimeStamps won't be used
};
