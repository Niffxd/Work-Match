const { DataTypes } = require("sequelize");

//Here will be all the Job Types, this the base of filtering, all the jobs will be related to a type who will be save in this model

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
