const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          min: 16,
        },
      },
      description: {
        type: DataTypes.TEXT,
      },
      mail: {
        type: DataTypes.STRING(100),
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
          len: [9],
        },
      },
      type: {
        type: DataTypes.ENUM,
        values: ["Seeker", "Employer", "Admin"],
      },
      jobsDone: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      //User will be related with:
      // JobsTypes n:m relation
      // City n:m relation
    }
    // TimeStamps will be used as determinant of seniority on the platform
  );
};
