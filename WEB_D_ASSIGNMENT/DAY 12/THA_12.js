var p=[];
var n=0;
var ps="";
// document.getElementsByClassName("but").addEventListener("click", myf);
function del(){
    localStorage.removeItem("p")
    p=[]

}

function add(){
    var x =document.getElementsByClassName("Todo")[0].value;
p[n]=x;
n+=1;
ps=ps + x;
ps = ps + "<br>";

console.log(ps)
const newt = document.createElement('div');
localStorage.setItem("p" , ps);

// newt.innerHTML=x;
 console.log( document.getElementsByClassName("todoli"));
 listt = document.getElementsByClassName("todoli");
  listt[0].appendChild(newt); 
  
}
function showlist()
{
    todolist= localStorage.getItem("p")
    listt = document.getElementsByClassName("todoli");
    listt[0].innerHTML=todolist;
}
