const { Sequelize } = require("sequelize");

const sequeliz = new Sequelize(
    "postgres",
    "postgres",
    "12345678",
    {
        host : "localhost",
        dialect: "postgres"
    }
) ;

sequeliz.sync();

(async () => {
    try {
        await sequeliz.authenticate();
        console.log("Connection established with DB");
    }catch(err)
    {
        console.error("Unable to connect to DB ");
    }
})();

module.exports=sequeliz ;