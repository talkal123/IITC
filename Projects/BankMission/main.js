let correctPassword = "12345";
let Enteries = 1000;


document.getElementById("main").style.display = "none";

document.getElementById("Enter-button").addEventListener("click", function(){
    const userInput = document.getElementById("Password-input").value;

    if (userInput === correctPassword){
        document.getElementById("p").textContent = "סיסמא נכונה!";
        document.getElementById("main").style.display = "grid";
        document.getElementById("password").style.display = "none";
        document.getElementById("p").style.color = "green";
        document.getElementById("return").style.display = "block"

    } else {
        document.getElementById("p").textContent = "סיסמא שגויה!";
        document.getElementById("p").style.color = "red";
        document.getElementById("main").style.display = "none"; 
       } 
    });



    document.getElementById("desposit-button").addEventListener("click", function() {
        const depositInput = Number(document.getElementById("desposit-input").value); 

        if (depositInput > 0) { 
            Enteries += depositInput; 
            document.getElementById("enteries-li").textContent = Enteries + "$";
        } else {
            alert("אנא הזן סכום חוקי להפקדה."); 
        }
    });

    document.getElementById("withdraw-button").addEventListener("click", function() {
        const withdrawInput = Number(document.getElementById("withdraw-input").value); 
    
        if (withdrawInput > 0) { 
            Enteries -= withdrawInput; 
            document.getElementById("enteries-li").textContent = Enteries + "$"; 
        } else {
            alert("אנא הזן סכום חוקי למשיכה."); 
        }
    });


    document.getElementById("enteries-li").textContent = Enteries + "$";




    document.getElementById("return").addEventListener("click", function(){
        document.getElementById("main").style.display = "none";
        document.getElementById("password").style.display = "block";
    });
    



