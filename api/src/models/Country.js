const { DataTypes } = require("sequelize");

//Model who save countries, it will be used to determinate user's country and will be bind to State Model

module.exports = (sequelize) => {
  sequelize.define("Country", {
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
    // Country 1:n relation
  }),
    { timestamps: false };
  // TimeStamps won't be used
};
