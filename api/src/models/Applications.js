const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Application", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //Appliaction will be related with:
    // User n:m relation
    // PostedOffers n:m relation
  }),
    { timestamps: false };
  // TimeStamps won't be used
};
