// function for addition

function add()
{
    var d=document.getElementById("firnum").value;
    var f=document.getElementById("secnum").value;
    var k=Number(d) + Number(f);
    document.getElementById("resul").value=k;
}

function sub()
{
    var d=document.getElementById("firnum").value;
    var f=document.getElementById("secnum").value;
    var k=d-f;
    document.getElementById("resul").value=k;
}

function mul()
{
    var d=document.getElementById("firnum").value;
    var f=document.getElementById("secnum").value;
    var k=d*f;
    document.getElementById("resul").value=k;
}

function div()
{
    var d=document.getElementById("firnum").value;
    var f=document.getElementById("secnum").value;
    var k=d/f;
    document.getElementById("resul").value=k;
}