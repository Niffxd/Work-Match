const { DataTypes } = require("sequelize");

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
