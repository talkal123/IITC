const button1 = document.getElementById('button1');
const content1 = document.getElementById('empty-p1');
const button2 = document.getElementById('button2');
const content2 = document.getElementById('empty-p2');
const button3 = document.getElementById('button3');
const content3 = document.getElementById('empty-p3');
const button4 = document.getElementById('button4');
const content4 = document.getElementById('empty-p4');




button1.addEventListener('click', function() {
    if (content1.style.display === 'none') {
        content1.style.display = 'block'; 
        button1.textContent = '-'; 
    } else {
        content1.style.display = 'none'; 
        button1.textContent = '+'; 
    }
});



button2.addEventListener('click', function() {
    if (content2.style.display === 'none') {
        content2.style.display = 'block'; 
        button2.textContent = '-'; 
    } else {
        content2.style.display = 'none';
        button2.textContent = '+'; 
    }
});


button3.addEventListener('click', function() {
    if (content3.style.display === 'none') {
        content3.style.display = 'block'; 
        button3.textContent = '-'; 
    } else {
        content3.style.display = 'none'; 
        button3.textContent = '+'; 
    }
});;



button4.addEventListener('click', function() {
    if (content4.style.display === 'none') {
        content4.style.display = 'block'; 
        button4.textContent = '-'; 
    } else {
        content4.style.display = 'none'; 
        button4.textContent = '+'; 
    }
});



// document.getElementById("button1").addEventListener("click",function(){
//     document.getElementById("empty-p1").style.display = "block"
//     document.getElementById("button1").textContent = "-"
// });