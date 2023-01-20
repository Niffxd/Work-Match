const { DataTypes } = require("sequelize");

//This model'll have the jobs that a user can ask for, the specific task to be performed.
//This task or Job, will be related to a Type.

module.exports = (sequelize) => {
  sequelize.define("Job", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    //Job will be related with:
    // JobsTypes 1:n Jobs relation
  }),
    { timestamps: false };
  // TimeStamps won't be used
};
