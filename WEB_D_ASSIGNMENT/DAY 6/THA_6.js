// Write a JAVASCRIPT function to check whether an 'input' is an array or not

function is_array(a){
    return Array.isArray(a);
}
console.log("Answer of Question 1");
console.log(is_array('w3school'));
console.log(is_array([1,2,4,0]));
console.log();
// Write a Javascript function to clone an array
function array_clone(ar){
    return ar.map((x)=>x);
}
console.log("Answer of Question 2");
console.log(array_clone([1,2,4,0]));
console.log(array_clone([1,2,[4,0]]));
console.log();
// Write a Javascript function to get first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

function first(ar,n)
{
    if(ar.length===0 || n<0)
    {
        return "[]";
    }
    else if(n==null)
    return ar[0];
    else
    return ar.slice(0,n);
}
console.log("Answer of Question 3");
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log();

// Write a JAVASCRIPT Function to join all elements of following elements into a string

mycolor=["Red","Green","White","Black"];
console.log("Answer of Question 4");
console.log('"' + mycolor.join(',') + '"');
console.log('"' + mycolor.join(',') + '"');
console.log('"' + mycolor.join('+') + '"');
console.log();
//Write a JAVASCRIPT program to find the most frequent item of the array



var max=0;
var dc;
 var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
for(var i=0;i<arr1.length;i++)
{
    var k=0;
    for(var j=i;j<arr1.length;j++)
    {
       if(arr1[i]===arr1[j])
       k++;
    }
    if(max<k)
    {
        max=k;
        dc=arr1[i];
    }
}
console.log("Answer of Question 5");
console.log(dc + " ( " + max + " Times ) ");