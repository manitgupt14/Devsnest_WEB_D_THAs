require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  SEQUELIZE_DATABASE: process.env.SEQUELIZE_DATABASE,
  SEQUELIZE_USER: process.env.SEQUELIZE_USER,
  SEQUELIZE_PASSWORD: process.env.SEQUELIZE_PASSWORD,
  SEQUELIZE_HOST: process.env.SEQUELIZE_HOST,
  SEQUELIZE_DIALECT: process.env.SEQUELIZE_DIALECT,
  SECRET_KEY: process.env.SECRET_KEY,
};
