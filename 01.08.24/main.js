//console.log("test");

//for (let i = 1; i <= 5; i++) {
  //  console.log('This is iteraction number ${i} of the main loop');
//for (let j = 1; j <= 5; j++) {
  //  console.log('This is iteraction number ${i} of the main loop')
//}


//לוח הכפל


//for (let i = 1; i<= 10; i++) {
  //  let house = ''
   // for (let j = 1; j <= 10; j++) {
     //   house += `${j*i} `
   // }
   // console.log(house);
//}


// 30  Easy Nested Loop Exercises in JavaScript

//Exercise 1

//let numberOfRows = 2; // מספר שורות
//for (let i = 1; i<= numberOfRows; i++){ // עובר על כל השורה
  //let row =""; // משתנה שמחזיק את הכוכבים
  ///for (let j= 1; j <= i; j++){ // לולאה פנימית שעוברת על המספרים בשורה הנוכחית
  //  row += '*'; // הוספת הכוכבית למשתנה השורה
 // }
 // console.log(row); // הדפסת השורה הנוכחית
//}


//let row = "";
//for (let i =0; i < 2; i++) {
  //for (let j = 0; j < 2; j++){
    //row +="* ";
  //}
  //row += `\n`;
//}

//console.log(row);


//for ( let i =1; i <= 1; i++){
  //let row = " ";
  //for ( let j = 1; j < 4; j++)
   // row += 1;
//}

//console.log(row);


//function printGrid(g) {
  //let gridSystem = ""
  //console.log(gridSystem);
  //for (let i = 1; i <= g; i++) {
    // console.log("Line Number " + i);
    // gridSystem += " * * \n"
    //for (let j = 0; j < g; j++) {
      //gridSystem += "*"
    //}
    //gridSystem(gridSystem);
  //}
//}

//printGrid(2)


function raTiangle() {

  for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* "
    } 
    console.log(row);
  }
}
