const object1 = {
    name :"Nitin",
    age:21,
    message:"I am frontend dev",
    message1:"Thank You :)",
   }

const object2={
   name :"Aditya",
   age:22,
   message:"I am Nitin's bestfriend.",
   fun : function()
   {
       console.log (this.message)
       console.log (this.message1)
   },
   para : function(a,b,c)
    {
        console.log(this.name)
         console.log(a*b*c)
    }
   }
   
   
   //Call
   object2.fun.call(object1)
   object2.para.call(object1,3,2,8)
   
   //Apply
   object2.fun.apply(object1)
   object2.para.apply(object1,[3,4,5])
   
   //Bind
   var a=object2.para.bind(object1,5,4,3)
   a()