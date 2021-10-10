const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/index");
const checkAdmin = async (req, res, next) => {
  try {
    let bearer = req.headers["authorization"];
    let token = bearer.split(" ")[1];

    await jwt.verify(token, SECRET_KEY);

    console.log(req.session.User);
    if (req.session.User.role === "admin") {
      res.status(200).send("success");
    } else {
      res.status(401).send("Needs to be admin!");
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = checkAdmin;
