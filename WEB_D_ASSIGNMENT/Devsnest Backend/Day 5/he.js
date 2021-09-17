var fs=require("fs");

fs.writeFileSync("day_5/hello.txt","Hello Everyone,");

fs.appendFileSync("day_5/hello.txt"," I am glad to tell you that i have completed this tha and thank you for this course");

fs.readFileSync("day_5/hello.txt","utf-8")
fs.writeFileSync("day_5/hell.js","console.log('HELLO WORLD')");
