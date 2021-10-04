const User =require("../models/user");
const bcrypt = require('bcrypt');

const saltRounds=10;
const register= async (req,res)=>{
   const {email ,password} = req.body;
   try
   {
    const alreadyexits= await User.findOne({ 
        where : {email }})
        if(alreadyexits)
        {
            res.status(401).send("Email already exits");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User( {email:email.toLowerCase(),password:hash})
        const savedUser = await newUser.savedUser();
        res.status(201).send(savedUser);

    } 
   
   catch(err) {
        console.error(err);
        res.status(500).send("Something went wrong");
   }
   
   
 
    
}

module.exports=register;