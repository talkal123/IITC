//let students = [
    //{ id: "1", name: "omer", grade: "100"}, // id = key, name = values
   // { id: "2", name: "avi", grade: "40"},
    //{ id: "3", name: "avi", grade: "80"},
//]


//function getValuesFromkey(array , key){
 //let newArray = []

 //for(let i = 0; i< array.length; i++) {
  //  let currentItem = array[i];
   // let currentValue = currentItem

   // newArray[i] = currentValue;

// }
// return newArray;
 //}

//console.log ( getValuesFromkey(students, "id"));
//console.log ( getValuesFromkey(students, "name"));


//אופציה ראשונה שלי שהעתקתי פשוט function gesPassStudent(array, grade){
   // let newArray = []

   // for ( i = 0; i < array.length; i++){
      //  let currentItem = array[i];
     //   let currentValue = currentItem[grade];

      //  newArray[i] = currentValue;
   /// }
  //  return newArray;
//}

//console.log(gesPassStudent(students , 70))
//console.log(gesPassStudent(students , 90))

//התשובה הנכונה function gesPassStudent(array, minGrade){

//let newArray = []

    //for ( i = 0; i < array.length; i++){
      //  if ( array[i].grade > minGrade){
           // newArray.push(array[i]);
      //  }
   // }
   // return newArray;
//}

//console.log(gesPassStudent(students , 70))
//console.log(gesPassStudent(students , 90))



//לא עובד ניסיון של טל function createPersons(names) {
   // let persons = [];

   // for (let i = 0; i < names.length; i++)
      //  if ( names[i] > name)
        
      //  persons.push(names[i])
        

   // return persons;
//}
////console.log(createPersons(["yossi", "liraz", "baba"]));

//createPersons(["yossi", "liraz", "baba"]);






//function createPersons(names) {
   // let persons = [];

   // for (let i = 0; i < names.length; i++){
      //  let  newPerson ={ name :  names[i] };
        
      //  persons.push(newPerson);
        
   // }
   // return persons;
//}
//console.log(createPersons(["yossi", "liraz", "baba"]));


/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/


//let employees = [
  //{ name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  //{ name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  //{ name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  //{ name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  //{ name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  //{ name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
/*];

console.log(groupBy(employees, "department"));

function groupBy(array, key) {
  let group = {};

  for ( let i = 0; i < array.length; i++){
    let item = array[i] // = name 
    let groupKey = item[key];
    

    if (group[groupKey] === undefined) {
        group[groupKey] = [];
    }

    // always wanna push...
    group[groupKey].push(item)
  }

  return group;
}

/*
{
  Engineering: [
    { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
  ],
  Marketing: [
    { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
    { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
    { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
  ]
*/


// חזרה על בסיס אובייקטים

/// ### Object.keys() = Object.keys()
// מחזיר מערך של שמות המאפיינים הנספרים של אובייקט נתון עצמו.

//let personId = {                        
 //   Name: "baba",  // Name = key!!!      
  //  from: "italy",
  //  born: 2000,
//};
// Output: ["Name", "from", "born"]

//let keys = Object.keys(personId);
//console.log(keys);

//for (let i = 0; i < keys.length; i++) {
    //let key = keys[i];
    //console.log(key + ": " + personId[key]);
//}

// Output:
// Name: baba
// from: italy
// born: 2000


// JavaScript Objects - 20 More Practice Exercises

//11 let playlist = {
    //Name : "hello",
    //songs: ["hipipi","hipipipi","lolollo"],
    //duration : 9,
//}

//playlist.songs.push("mama");
//console.log(playlist.songs.length);

//לחזור לתרגיל אחרכך let bankAccount = {
    //accountNumber : "123456",
    //balance: 20,
   // isActive : true,
//}

//bankAccount.deposit = balance + 20;
//console.log(bankAccount)




let students = [
    { id: 1, Name: "Alice", age: 20 },
    { id: 2, Name: "Bob", age: 22 },
    { id: 3, Name: "Charlie", age: 19 },
  ];

  //ניסיון עם קי  let keys = Object.keys(students);
  //console.log(keys);

  //for (let i = 0; i < keys.length; i++) {
    //let key = keys[i];
    //console.log(key + ": " + students[key]);
  //}

  function getStudentById(students, Name) {
    for (let i = 0; i < students.length; i++) {
      if (students[i].Name === Name) {
        return students[i];
      }
    }
    return null;
  }
  
  


  
  
  // TODO: Write a function to return an array of student names
 // function getStudentNames(students) {
   // for ( i = 0; i < keys.length; i++){
     //   let key = keys[i];
     //   console.log(key + ": " + students[key]);
   // }
    // your code here
//  }

 // console.log(getStudentNames(students[i]));

