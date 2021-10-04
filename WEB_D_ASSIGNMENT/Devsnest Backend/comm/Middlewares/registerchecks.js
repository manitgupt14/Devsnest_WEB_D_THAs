const {Validate , passVali} =require('../utils/emailvalidate');

const registerCheck = (req,res,next)=>
{
   const { email,password,confpassword} =req.body;
   if(typeof email === 'string'
      && typeof password ==='string' &&
      typeof confpassword=== 'string'
       && email.length >0 &&
       password.length > 8
      && confpassword === password
      && Validate(email) && passVali(password)  
   )
   {
       next();
   }
   else
   {
   res.status(401).send("Initial checks fails ")}
}

module.exports =registerCheck;
