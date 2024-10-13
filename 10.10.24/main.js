document.getElementById("btn").addEventListener("click",function(){
    const li = document.createElement("li");
    li.textContent = "פריט חדש"; // הגדר את הטקסט של ה-li
    document.getElementById("ul").appendChild(li);
});

