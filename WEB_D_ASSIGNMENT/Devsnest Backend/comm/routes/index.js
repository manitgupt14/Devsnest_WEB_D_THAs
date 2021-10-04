var express = require('express');
var router = express.Router();
var registerInitialCheck=require('../Middlewares/registerchecks');
var register=require("../controllers/registercontroller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// email firstname lastname password confirm password
// Security performance and edge cases
// Level -1
// email validate 
// password validate-- password == confirm pass
// Level -2
// JS/SQL --Home tha
// Level -3
// if(email already exist )
// password hash


router.post('/register', registerInitialCheck , register);

module.exports = router;
