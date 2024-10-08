


function getInput() {   // פונקציה לקבלת הטקסט מהקלט
    const inputElement = document.getElementById("taskInput"); // שגירת אלמנט הקלט
    return inputElement.value; // מחזיר את הטקסט מהקלט
}

function addTask() {    // פונקציה להוספת משימה
    const text = getInput();    // קרא את הטקסט מהקלט
    if (text === '') {  // בדוק אם הטקסט ריק
        return;     // אם ריק, חזור מהפונקציה
    }

    const taskList = document.getElementById("taskList");   // גש לרשימה
    const listItem = document.createElement("li");  // צור אלמנט חדש (פריט ברשימה)
    listItem.textContent = text;    // הכנס את הטקסט לאלמנט
    taskList.appendChild(listItem);     // הוסף את האלמנט לרשימה

    const inputElement = document.getElementById("taskInput");  // גש לאלמנט הקלט שוב
    inputElement.value = '';    // מחזיר את הקלט לריק
}

const addTaskButton = document.getElementById("addTaskButton");     // גש לכפתור הוספת המשימה

addTaskButton.addEventListener('click', addTask);    // הוסף מאזין לאירוע ללחיצה על הכפתור







function getInput(){
    const inputElement = document.getElementById("taskInput");
    return inputElement.value;
}


function addTask(){
    const text = getInput();
    if (text === ''){
        return;
    }
    const taskList = document.getElementById("taskList");   // גש לרשימה
    const listItem = document.createElement("li"); 
    itemList.textContent = text;    // הכנס את הטקסט לאלמנט
    Li.appendChild(listItem);
}