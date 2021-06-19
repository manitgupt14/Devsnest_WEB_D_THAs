//Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno
console.log("Answer of  Question 1");
var student = { name : "David Rayy", class : "VI", rollno : 12 };
for (let item in student)
{
    console.log(item);
}
console.log();

//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 


console.log("Answer of  Question 2");

var student2={
    name : "David Rayy",
     sclass : "VI",
      rollno : 12 
}
 
console.log("Original Object");

for(let item in student2)
{
    console.log(item + " ==> " + student2[item]);
}
delete student2.rollno;

console.log("Object After deleting rollno.");

for(let item in student2)
{
    console.log(item + " ==> " + student2[item]);
}

console.log();

//Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log("Answer of  Question 3");
var student3 = { name : "David Rayy", sclass : "VI", rollno : 12 };
var k=0;
for(let item in student3)
{
    k++;
}
console.log("Length of class is " + k);
console.log();

//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

console.log("Answer of  Question 4");
var library = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

for(let item in  library)
{
    console.log(library[item].title + "  ==> " + library[item].author + " ==>" + library[item].readingStatus);
}
console.log();

//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 

console.log("Answer of  Question 5");

const vcylinder={
    v:1.0000,
    volume: function(height,radius){
        v=3.14*radius*radius*height
        console.log(v)
    }}
vcylinder.volume(3.1,2.4)

console.log();

//Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

console.log("Answer of  Question 6");
var library2 = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
     { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

     library2.sort(function(a , b){return b.libraryID - a.libraryID });

     for(let item in library2)
     {
         console.log(library2[item].title + " ==> " + library2[item].author + " ==> " + library2[item].libraryID);
     }
