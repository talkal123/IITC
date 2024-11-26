let button1 = 1;
let button2 = 2;
let button3 = 3;
let button4 = 4;
let button5 = 5;




document.getElementById("btnSubmit").addEventListener("click",function(){
    document.getElementById("main-container").style.display = "none";
    document.getElementById("main-container2").style.display = "grid";


});

document.getElementById("button1").addEventListener("click",function(){
    document.getElementById("number-empty").textContent = button1;

});


document.getElementById("button2").addEventListener("click",function(){
    document.getElementById("number-empty").textContent = button2;

});

document.getElementById("button3").addEventListener("click",function(){
    document.getElementById("number-empty").textContent = button3;

});

document.getElementById("button4").addEventListener("click",function(){
    document.getElementById("number-empty").textContent = button4;

});

document.getElementById("button5").addEventListener("click",function(){
    document.getElementById("number-empty").textContent = button5;

});


document.getElementById("Turn-Back").addEventListener("click",function(){
    document.getElementById("main-container").style.display = "grid";
    document.getElementById("main-container2").style.display = "none";


});
