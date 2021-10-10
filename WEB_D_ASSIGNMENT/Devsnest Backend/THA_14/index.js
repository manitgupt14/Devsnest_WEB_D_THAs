const { PORT } = require("./config/index");
const express = require("express");
const passport = require("passport");
const { RedisStore, redisClient, session } = require("./databases/redis");
const { register, registerAdmin } = require("./controllers/register");
const checkAdmin = require("./middlewares/checkAdmin");
const app = express();

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "secret@#$123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1000 * 60 * 10,
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.get("/", (req, res) => {
  req.session.username = "nitin";
  res.json(req.session.username);
});

app.get("/data", (req, res) => {
  res.json(req.session.username);
});

app.post("/signup", register);
app.post("/signup-admin", registerAdmin);

app.get("/admin", checkAdmin);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
