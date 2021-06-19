//Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

var student={
    name : "David Rayy",
     sclass : "VI",
      rollno : 12 
}
console.log(Object.keys(student))

//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 


var student={
    name : "David Rayy",
     sclass : "VI",
      rollno : 12 
}
console.log(student)
delete student.rollno
console.log(student)


//Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var student={
    name : "David Rayy",
     sclass : "VI",
      rollno : 12 }
var b=0;
for (let a in student){
    // console.log(a)
    ++b
}
  console.log(b)


//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

var library = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
for (let index in library){
console.log(library[index].title)
console.log(library[index].author)
console.log(library[index].readingStatus,"\n")}


//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 

const vcylinder={
    v:1.0000,
    volume: function(height,radius){
        v=3.14*radius*radius*height
        console.log(v)
    }}
vcylinder.volume(3.1,2.4)

//Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
     { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
console.log(library.sort(function(a, b) {return b.libraryID - a.libraryID} ) )


