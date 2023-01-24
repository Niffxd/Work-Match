const { DataTypes } = require('sequelize');
// This file is the model who saved any Post of job offers.
module.exports = (sequelize) => {
  sequelize.define(
    'Project',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      estimatedtime: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      agreement: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        // defaultValue: false,
      },
      // Project will be related with:
      // Job n:m relation
      // City n:m relation
      // User n:1 relation
    }
    // TimeStamps will used to know how long ago this job was offered
  );
};
