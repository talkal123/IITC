let employees = [
    {
      "firstName": "Alice",
      "lastName": "Smith",
      "age": 28,
      "startDate": "2020-06-15",
      "department": "Marketing",
      "salary": 50000
    },
    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 35,
      "startDate": "2018-01-25",
      "department": "Sales",
      "salary": 60000
    },
    {
      "firstName": "Emma",
      "lastName": "Johnson",
      "age": 42,
      "startDate": "2015-03-12",
      "department": "IT",
      "salary": 70000
    },
    {
      "firstName": "Michael",
      "lastName": "Brown",
      "age": 30,
      "startDate": "2019-07-01",
      "department": "Finance",
      "salary": 55000
    },
    {
      "firstName": "Sophia",
      "lastName": "Williams",
      "age": 26,
      "startDate": "2021-05-20",
      "department": "HR",
      "salary": 45000
    },
    {
      "firstName": "David",
      "lastName": "Taylor",
      "age": 39,
      "startDate": "2017-09-14",
      "department": "Operations",
      "salary": 64000
    },
    {
      "firstName": "Laura",
      "lastName": "White",
      "age": 32,
      "startDate": "2016-11-03",
      "department": "Logistics",
      "salary": 50000
    },

    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 32,
      "startDate": "2016-11-03",
      "department": "Logistics",
      "salary": 50000
    }
  ];
  
  // המרת המערך ל-JSON ושמירה ב-localStorage
  localStorage.setItem("employees", JSON.stringify(employees));




  let savedEmployees = localStorage.getItem("employees");
  if (savedEmployees) {
      JSON.parse(savedEmployees); // המרת ה-JSON חזרה למערך
  }

function event() {
    let addEmployee = document.getElementById("addEmployee");
    addEmployee.addEventListener("click", onAddEmployee);
}



function onAddEmployee() {
    const firstName = document.getElementById("firstName").value; // קח את השם הפרטי
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const startDate = document.getElementById("startDate").value;
    const department = document.getElementById("department").value;   // קח את שם המשפחה
    const li = document.createElement("li");                      // צור אלמנט li
    li.textContent = `${firstName} ${lastName} ${age} ${startDate} ${department}`;                // הוסף טקסט ל-li
    document.getElementById("employees-list").appendChild(li);   // הוסף את ה-li לרשימה
}



function saveInArr(){
    let saveEmployee = document.getElementById("saveEmployee");
    saveEmployee.addEventListener("click", pushEmployee);
}

    // פונקציה להוסיף עובד למערך
function pushEmployee() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const startDate = document.getElementById("startDate").value;
    const department = document.getElementById("department").value;

    // בדוק אם כל השדות מלאים
    if (firstName && lastName && age && startDate && department) {
        const newEmployee = {
            firstName,
            lastName,
            age,
            startDate,
            department
        };

        // הוסף את העובד למערך
        employees.push(newEmployee);

        // שמור את המערך ב-localStorage
        localStorage.setItem("employees", JSON.stringify(employees));
}

}


function removeEvent() {
    let removeEmployee = document.getElementById("removeEmployee");
    removeEmployee.addEventListener("click", offAddEmployee);
}

function offAddEmployee(){
    const employeesList = document.getElementById("employees-list");
    if (employeesList.lastChild) {
        employeesList.removeChild(employeesList.lastChild); // מסיר את הפריט האחרון
    }
    employeesList = employees.pop();
}



function allEmployees(){
    let theEmployees = document.getElementById("allEmployees");
    theEmployees.addEventListener("click", employeesResult);
}


function employeesResult(){
    const employeesList = document.getElementById("employees-list");
    employeesList.innerHTML = "";  // נקה את הרשימה לפני הוספה

    employees.forEach(employee => {
        const li = document.createElement("li");
        li.textContent = `${employee.firstName} ${employee.lastName} - ${employee.department}`;
        employeesList.appendChild(li); // הוסף את העובד לרשימה
    });

}


function nonAllEmployees(){
    let theEmployees = document.getElementById("cleanAllEmployees");
    theEmployees.addEventListener("click", cleanEmployees);
}


function cleanEmployees(){
    const employeesList = document.getElementById("employees-list");
    employeesList.innerHTML = "";

}



function filterEmployees(){
  let filterDepartment = document.getElementById("filterDepartment");
  filterDepartment.addEventListener("input", function(e){
    console.log(e.target.value);
    document.getElementById("employees-list").innerHTML = e.target.value;
    // console.log(employees);
    let filterEmployees = []
    for(let i = 0; i < employees.length; i++){
      if(e.target.value === employees[i].department){
        filterEmployees.push(employees[i]);
      }
    } 
    console.log(filterEmployees);
    let html = '';
    for(let i = 0; i < filterEmployees.length; i++){
      let liElement = `
      <li>
      <p>firstName: ${filterEmployees[i].firstName}</p>
      <p>lastName: ${filterEmployees[i].lastName}</p>
      <p>age: ${filterEmployees[i].age}</p>
      <p>startDate: ${filterEmployees[i].startDate}</p>
      <p>department: ${filterEmployees[i].department}</p>
      <p>salary: ${filterEmployees[i].salary}</p>
      </li>
      `
      html = html.concat(liElement);
      let employeesList = document.getElementById("employees-list");
      employeesList.insertAdjacentHTML("beforeend", html);
    } 
  }); 
}




event();
removeEvent();
allEmployees();
nonAllEmployees();
saveInArr();
filterEmployees()
