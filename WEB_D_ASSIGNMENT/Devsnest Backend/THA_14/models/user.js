const { DataTypes } = require("sequelize");
const sequelize = require("../databases/index");

const User = sequelize.define("User", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
