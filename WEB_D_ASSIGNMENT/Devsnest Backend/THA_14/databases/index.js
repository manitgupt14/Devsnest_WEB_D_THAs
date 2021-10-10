const { Sequelize } = require("sequelize");
const {
  SEQUELIZE_DATABASE,
  SEQUELIZE_USER,
  SEQUELIZE_PASSWORD,
  SEQUELIZE_HOST,
  SEQUELIZE_DIALECT,
} = require("../config/index");
const sequelize = new Sequelize(
  SEQUELIZE_DATABASE,
  SEQUELIZE_USER,
  SEQUELIZE_PASSWORD,
  {
    host: SEQUELIZE_HOST,
    dialect: SEQUELIZE_DIALECT,
  }
);

(async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("Connection Established  with DB.");
  } catch {
    console.error("Unable to connect to DB.");
  }
})();

module.exports = sequelize;
