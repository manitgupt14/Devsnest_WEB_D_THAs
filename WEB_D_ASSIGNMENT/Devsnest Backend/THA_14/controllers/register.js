const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/index");
const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    let alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.json("User already Exists");
    } else {
      const newUser = new User({
        fullName: fullName,
        email: email,
        password: password,
      });
      const savedUser = await newUser.save();
      req.session.User = savedUser;
      jwt.sign(req.body, SECRET_KEY, (err, result) => {
        if (err) throw err;
        res.json({ token: result, savedUser });
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const registerAdmin = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    let alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.json("User already Exists");
    } else {
      const newUser = new User({
        fullName: fullName,
        email: email,
        password: password,
        role: "admin",
      });
      const savedUser = await newUser.save();
      req.session.User = savedUser;
      jwt.sign(req.body, SECRET_KEY, (err, result) => {
        if (err) throw err;
        res.json({ token: result, savedUser });
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { register, registerAdmin };
