const path =require("path");
const express =require("express");
const app =express();
console.log(__dirname);

app.set("views",path.join(__dirname,"view"));
app.set("view engine","jade");

app.use('/', (req,res) => {
    res
    .status(201)
    .cookie("toke" , "test" , {
        expire:new Date(Date.now() + 8 * 3600000)
    })
    .cookie("hello","hello")
    .redirect(301,"/admin");
})

app.listen(5000);