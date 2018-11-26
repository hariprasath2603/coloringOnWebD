

let hed=document.getElementById("head");

hed.innerText="Hello world";
let bg=document.getElementById("bd");

let bt=document.getElementById("bton");
let red=document.getElementById("red");
let blue=document.getElementById("blue");
let green=document.getElementById("green");
red.value=0;blue.value=0;green.value=0;
bt.addEventListener("click",function(){
    red.value=red.value%255;blue.value=blue.value%255;green.value=green.value%255;
bg.style.backgroundColor="rgb("+red.value+","+blue.value+","+green.value+")";
});
