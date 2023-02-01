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
      /*title: {
        type: DataTypes.STRING,
        allowNull: false,
      },*/
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      information: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
        defaultValue: false,
      },
      owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bidder: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      estimated: {
        type: DataTypes.INTEGER,
      },
    }
    // TimeStamps will used to know how long ago this job was offered
  );
};
