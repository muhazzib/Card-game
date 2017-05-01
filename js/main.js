var x=Math.floor(Math.random()*8);




document.getElementById("one").onclick=function () {a()};
document.getElementById("two").onclick=function () {b()};
document.getElementById("three").onclick=function () {c()};
document.getElementById("four").onclick=function () {d()};
document.getElementById("five").onclick=function () {e()};
document.getElementById("six").onclick=function () {f()};
document.getElementById("seven").onclick=function () {g()};
document.getElementById("eight").onclick=function () {h()};

function a(){
    if(1==x){
 document.getElementById("one").innerHTML="<img src=images/won.png>";
    }
    else
        document.getElementById("one").innerHTML = "<img src=images/nexttime.jpg>";
        

}

function b(){
    if(2==x){
 document.getElementById("two").innerHTML="<img src=images/won.png>"
    }
    else
        document.getElementById("two").innerHTML = "<img src=images/nexttime.jpg>";

}



function c(){
    if(3==x){
 document.getElementById("three").innerHTML="<img src=images/won.png>"
    }
    else
        document.getElementById("three").innerHTML = "<img src=images/nexttime.jpg>";

}
function d(){
    if(4==x){
 document.getElementById("four").innerHTML="<img src=images/won.png>"
    }
    else
        document.getElementById("four").innerHTML = "<img src=images/nexttime.jpg>";

}
function e(){
    if(5==x){
 document.getElementById("five").innerHTML="<img src=images/won.png>"
    }
    else
        document.getElementById("five").innerHTML = "<img src=images/nexttime.jpg>";
}
function f(){
    if(6==x){
 document.getElementById("six").innerHTML="<img src=images/won.png>"
    }
    else
        document.getElementById("six").innerHTML = "<img src=images/nexttime.jpg>";

}
function g(){
    if(7==x){
 document.getElementById("seven").innerHTML="<img src=images/won.png>"
    }
    else
        document.getElementById("seven").innerHTML = "<img src=images/nexttime.jpg>";

}
function h(){
    if(8==x){
 document.getElementById("eight").innerHTML="<img src=images/won.png>"
    }
    else
        document.getElementById("eight").innerHTML = "<img src=images/nexttime.jpg>";

}


