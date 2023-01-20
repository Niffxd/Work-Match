const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PostedOffers",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      direction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      estimatedtime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      renumerations: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      agreement: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      //PostedOffers will be related with:
      // Job n:m relation
      // City n:m relation
      // User n:1 relation
    }
    // TimeStamps will used to know how long ago this job was offered
  );
};
