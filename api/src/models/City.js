const { DataTypes } = require("sequelize");

//This model will save all the cities in the world, bindind each city with all the users who can work or live in it

module.exports = (sequelize) => {
  sequelize.define("City", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //City will be related with:
    // State 1:n relation
    // User n:m relation
    // Job n:m relation
  }),
    { timestamps: false };
  // TimeStamps won't be used
};
