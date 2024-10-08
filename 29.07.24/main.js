//1for ( i = 1 ; i <= 5; i++){
   // console.log(i);
//}


//2for ( i = 0 ; i <= 9; i++)
    //console.log(i);

//3for ( i = 10; i > 0; i--)
    //console.log(i);


 //4 for ( i = 0 ; i <= 10; i+=2){
        //console.log(i);
   //}

   //5for (i = 1 ; i <= 10; i+=2){
    //console.log(i);
   //}

   //6for (i = 0; i<=15; i+=3){
    //console.log(i)
   //}

   //7for ( i = 1 ; i<20; i+=2){
    //console.log(i)
   //}

   //8for ( i = 2; i <= 20; i+=2){
   //console.log(i)
   //}

   //9for ( i = 10; i > 0; i-=2){
    //console.log(i)
   // }

   //10for ( i = 5; i <= 25; i+=5){
   //console.log(i)
   //}

    //11for (i = "**"; i <= "*****"; i += "***"){
        //console.log(i)
    //}

    //12for ( i = 0; i < 3; i ++){
        //console.log("Hello")
    //}

    //13for ( i = 1; i <= 3; i ++){
        //console.log(i + "!");
    //}

    //14?for ( i = "a"; i <= "e"; i++){
        //console.log(i)
    //}

    //15for ( i = 1; i <= 4; i ++){
        //console.log( "2")
    //}

    //16let arr = ['a', 'b', 'c', 'd'];
        //let text ="";
        //for ( let i = 0; i < arr.length; i++) {
           // text += arr[i] + " ";
        //}

       // console.log(text);


       //17let arr = ['1', '2', '3', '4'];
       // let text ="";
        //for ( let i = 0; i < arr.length; i++) {
            //text += arr[i] + " ";
        //}

       // console.log(text);

       //18let arr = ['10', '20', '30', '40','50'];
       // for ( let i = arr.length -1; i>=0; i--) {
          // console.log(arr[i]);
        //}

      // console.log(text);



       //19let arr = ['1', '2', '3', '4','5','6'];
       // for ( let i = 0; i < arr.length; i+=2) {
           // console.log(arr[i]);
        //}

       // console.log(arr);

       //20 let colors = ['red', 'green', 'blue'];
       //for (let i = 0; i < colors.length; i++){
        //console.log("color" +" " + colors[i] );

       //}

       //21? לא הבנתי את השאלה

        //22 let product = 1;
        //for (i = 1; i <= 5; i++){
        //product *= i;
        //}

        //console.log(product);

        //23 let arr = [1, 2, 3, 4, 5, 6, 7, 8];
       // let count = 0; // משתנה לספירת המספרים הזוגיים

        //for (i = 0; i <= arr.length; i++){
           // if ( arr[i] % 2 === 0 ){ // תנאי לבדיקת זוגיות
                //count ++ ; // הגדלת הספירה אם המספר זוגי

            //}
        //}

        //console.log(count); // הדפסת התוצאה

        
       // let arr = [10, 5, 8, 12, 3]; // הגדרת המשתנה לערך הראשון במערך
        //let largest = arr[0]; גדרת המשתנה לערך הראשון במערך

       // for (i=0; i<=arr.length; i++){  לולאת for מתחילה מהאינדקס השני
           // if (arr[i] > largest){  // בדיקה אם האיבר הנוכחי גדול מהערך הנוכחי של largest
              //  largest = arr[i]; // עדכון largest לערך של האיבר הנוכחי

          //  }

//}
       // console.log(largest);  // הדפסת המספר הגדול ביותר שנמצא

       
       
       
       
       //let numberOfRows = 3; // מספר השורות בתבנית
       //for (let i = 1; i <= numberOfRows; i++) { // לולאה חיצונית שעוברת על כל שורה
         //let row = ''; // משתנה שמחזיק את הכוכביות בשורה הנוכחית
         
        // for (let j = 1; j <= i; j++) { // לולאה פנימית שעוברת על מספר הכוכביות בשורה הנוכחית
          // row += '*'; // הוספת כוכבית למשתנה השורה
        // }
         
        // console.log(row); // הדפסת השורה הנוכחית
       //}



      // let numberOfRows = 3;
       // for (let i = 1; i<=numberOfRows; i++) {
        // let row = "";
        
        // for (let j = 1; j<= i; j++){
           // row += "*";
        // }
        // console.log(row);
       //}

       //let numberOfRows = 3; // מספר השורות בתבנית

       // for (let i = 1; i <= numberOfRows; i++) { // לולאה חיצונית שעוברת על כל שורה
       // let row = ''; // משתנה שמחזיק את המספרים בשורה הנוכחית
  
       // for (let j = 1; j <= i; j++) { // לולאה פנימית שעוברת על המספרים בשורה הנוכחית
       // row += j; // הוספת המספר למשתנה השורה
       // }
  
       // console.log(row); // הדפסת השורה הנוכחית
       // }



       //let numberOfRows = 4; // מספר השורות בתבנית
       //for (let i = 1; i <= numberOfRows; i++) { // לולאה חיצונית שעוברת על כל שורה
        // let row = ''; // משתנה שמחזיק את הכוכביות בשורה הנוכחית
         
         //for (let j = 1; j <= i; j++) { // לולאה פנימית שעוברת על מספר הכוכביות בשורה הנוכחית
        //row += '*'; // הוספת כוכבית למשתנה השורה
        // }
         
       //  console.log(row); // הדפסת השורה הנוכחית
      // }


      let numberOfRows = 3; // מספר השורות בתבנית

        for (let i = 1; i <= numberOfRows; i++) { // לולאה חיצונית שעוברת על כל שורה
        let row = ''; // משתנה שמחזיק את המספרים בשורה הנוכחית
  
        for (let j = 1; j <= i; j++) { // לולאה פנימית שעוברת על המספרים בשורה הנוכחית
        row += i; // הוספת המספר i למשתנה השורה
        }
  
        console.log(row); // הדפסת השורה הנוכחית
        }




