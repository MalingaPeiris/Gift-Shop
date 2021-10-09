var x= document.getElementById("login");
var y= document.getElementById("signup");
var v= document.getElementById("check");
var z= document.getElementById("btn-bg");
var t= document.getElementById("toggle-box");

function signup(){
    x.style.left="-450px";
    y.style.left="15%";
    z.style.left="110px";
}

function login(){
    x.style.left="15%";
    y.style.left="500px";
    z.style.left="0";
}
function check(){
    v.style.left="15%";
    y.style.left="-450px";
    t.style.display="none";
}
