const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("State", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //State will be related with:
    // City n:1 relation
    // Country 1:n relation
  }),
    { timestamps: false };
  // TimeStamps won't be used
};
