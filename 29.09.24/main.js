// const q2_resource = ["4" , "6", "21", "8"]

// const answer1 = q2_resource.map[function(strNum){
//     return Number(strNum) ** 3
// }]


// console.log(answer1);



// q1
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(number);
// });


// q2

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(number * number);
// });



// q3

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(function(number) {
//     sum += (number * number);

//     console.log(sum);
// });




// q4

// const numbers = [1, 2, 3, 4, 5];
// let total = 0;
// numbers.forEach(function(number) {
//     total += (number);

    
// });

// console.log(total)





// const arr = ["!", "hello","", "world"];

// arr.forEach(function(array) {
//     console.log(array.join(", "));

// }) לא הצלחתי





// q6
//  const numbers = ["1", "2","3", "4", "5"];
//  const newArr = numbers.map((x) => x * 2);


//  console.log(newArr);


// q7

// const arr = ["apple", "banana","mango"];
// const lengths = arr.map(word => word.length)

// console.log(lengths);


// q8

// const arr = [1, 4, 9, 16, 25];
// const newArr = arr.map((x) => x * x);


// console.log(newArr);


// q9 
// const arr = ["hello", "hello"];
// const newArr = arr.map((x) => x.toUpperCase());

// console.log(newArr);


// q10 לא הבנתי את השאלה


// q11
// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter( (x) => x % 2 === 0);


// console.log(newArr);


// q12 השתמשו ב-filter כדי ליצור מערך חדש רק עם המחרוזות הארוכות מ-5 תווים מ-['תפוח', 'בננה', 'דובדבן', 'תמר', 'אלדרברי'].

// const arr = ["apple", "banana","mango", "eldarbary", "Kiwi"];
// const newArr = arr.filter(checkLength);

// function checkLength(array){
//     return array.length >= 5;
// }


// console.log(newArr);



// q13 השתמשו ב-filter כדי ליצור מערך חדש רק עם המספרים הגדולים מ-10 מ-[5, 10, 15, 20, 25].

// const arr = [5, 10, 15, 20, 25];
// const newArr = arr.filter(checkNumber);

// function checkNumber(array){
//     return array >= 10;
// }


// console.log(newArr);



// p14 השתמשו ב-filter כדי ליצור מערך חדש רק עם המחרוזות שמתחילות ב-'ת' מ-['תפוח', 'בננה', 'תפוז', 'דובדבן'].

// const arr = ["apple", "banana","orange", "cherry"];
//  const newArr = arr.filter(checkIndex);

//  function checkIndex(array){
//     return array[0] === "a";
//  }


//  console.log(newArr);


// q15 השתמשו ב-filter כדי ליצור מערך חדש רק עם האיברים במיקום זוגי מ-[1, 2, 3, 4, 5, 6].

// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter(checkNumber);

// function checkNumber(array){
//     return array % 2 === 0; 
// }

// console.log(newArr);


// q16  השתמשו ב-reduce כדי לסכם את כל המספרים במערך [1, 2, 3, 4, 5].


// const arr = [1, 2, 3, 4, 5];
// const sum = 0;
// const newArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
// sum,);



// console.log(newArr);



// q17
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.reduce((x,y) => x * y, 1);


//  console.log(newArr);



//q18
// const arr = [10, 5, 15, 20, 25];
// const newArr = arr.reduce((a,b) => Math.max(a,b));




//  console.log(newArr);




//q19
// const arr = ["hello"," ","world","!"];
// const newArr = arr.reduce((x,y) => x + y );




//  console.log(newArr);



//q20 לא הצלחתי
// const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// let a = 0
// let b = 0
// let c = 0
// let d = 0

// const newArr = arr.reduce(ifNum);
// function ifNum(){
//     if(arr === 1){
//         a +=
//     }

// }



//  console.log(newArr);



//q21

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.some(function(number) {
//   return number > 3;
// });



// console.log(newArr);



//q22

// const arr = [2, 4, 6, 8, 10];
// const newArr = arr.every(function(number) {
//   return number % 2 === 0;
// });



// console.log(newArr);



//q23

// const arr = ["apple", "banana", "melon"];
// const newArr = arr.some(function(word) {
//   return word.length > 6;
// });



// console.log(newArr);



//q24

// const arr = ["apple", "banana", "melon"];
// const newArr = arr.every(function(word) {
//   const firstChar = word.charAt(0);
//   return ['a', 'b', 'c'].includes(firstChar); 
// });



// console.log(newArr);



//q25

// const arr = [false, false, true, false];
// const newArr = arr.some(function(word) {
//   if(word === true){
//     return true;

//   }
// });



// console.log(newArr);




//q26
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.find(function(arr) {
//     return arr > 3;

//   }
// );



// console.log(newArr);



//q27
// const arr = [1, 3, 5, 2, 4, 6];
// const newArr = arr.findIndex(function(number) {
//     return number % 2 === 0;

//   }
// );



// console.log(newArr);


//q28
// const arr = ["apple", "banana", "melon"];
// const newArr = arr.find(function(word) {
//     return word.length > 5 ;

//   }
// );



// console.log(newArr);






//q29
// const arr = ["apple", "banana", "cherry", "tamar"];
// const newArr = arr.findIndex(function(word) {
//     return word === 'cherry';

//   }
// );



// console.log(newArr);






//q30
// const arr = [1, 2, 3, -4, 5, -6];
// const newArr = arr.find(function(num) {
//     return num < 0;

//   }
// );



// console.log(newArr);





//q31

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const newArr = arr.sort();



// console.log(newArr);


//q32


// const arr = ["apple", "tamar", "cherry", "banana"];
// const newArr = arr.sort();



// console.log(newArr);



//q33


// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// const newArr = arr.sort().reverse();



// console.log(newArr);



//q34


// const arr = ["apple", "tamarrrr", "cherry", "banana"];
// const newArr = arr.sort();



// console.log(newArr);





//q35


//  const arr = [[
//     {name: 'יוחנן', age: 25},
//     {name: 'יעל', age: 30},
//     {name: 'בועז', age: 20}]];


//  const newArr = arr[0].sort((a, b) => a.age - b.age);



//  console.log(newArr);










//q36


// const arr = [1, [2, 3], [4, [5, 6]]];
// const newArr = arr.flat(2);



// console.log(newArr);





//q37


// const arr = [1, [2, [3, [4]]]];
// const newArr = arr.flat(3);



// console.log(newArr);




//q38


// const arr = [1, 2, , 4, 5];
// const newArr = arr.flat();



// console.log(newArr);







//q39


// const arr = ['a',['b','c'],'d'];
// const newArr = arr.flat();



// console.log(newArr);





//q40


// const arr = [1, [2, [3, [4, [5]]]]];
// const newArr = arr.flat(Infinity);



// console.log(newArr);







//q41
// const arr = ['a','b','c','d'];
// const newArr = arr.forEach(myFunction);

// function myFunction(array){
//     console.log(array)
//  }

    



// console.log(newArr);




//q42



// const arr = [10, 20, 30, 40];

// const result = arr.map((value, index) => {
//     return {
//         index: index,
//         value: value
//     };
// });

// console.log(result);







//q43
// const arr = ["apple", "tamar", "cherry", "banana"];
// const newArr = arr.filter(myFunction);

// function myFunction(array){
//     return array[0] === 'a';

// }



// console.log(newArr);







//q44 לא הבנתי




//q45

// const arr = ["hello", "world", "javascript",];
// const newArr = arr.some(myFunction);

// function myFunction(array){
//     return array[0] === 'j';

// }



// console.log(newArr);




//q46
// const arr = [2, 4, 6, 8];
// const newArr = arr.every(myFunction);

// function myFunction(array){
//     return array % 2 === 0;

// }



// console.log(newArr);





//q47
// const arr = 
//     [{id: 1, status: 'לא פעיל'},
//     {id: 2, status: 'פעיל'}];



// const newArr = arr.find(myFunction);

// function myFunction(array){
//     return array.status === 'פעיל';

// }



// console.log(newArr);



  

//q48
// const arr = [3, 7, -2, 9, -5];
// const newArr = arr.findIndex(myFunction);

// function myFunction(array){
//     return array < 0;

// }



// console.log(newArr);



//q49
// const arr = ['JavaScript', 'Python', 'Ruby', 'Javaaaaa'];
// const newArr = arr.sort(function(a, b){
//     return b.length - a.length;
// }
// );




// console.log(newArr);



//q50
// const arr = [1, [2, [3]], [4, [5]]];
// const newArr = arr.flat(2);





// console.log(newArr);




//q51
// const arr = ["h","e" ,"l", "l", "o"];
// let result = "";

// arr.forEach(function(word) {
//     result += word;
// })




// console.log(result);



//q52
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map(myFunction);

// function myFunction(array){
//     return array * 10;

// }



// console.log(newArr);






//q53
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = arr.filter(myFunction);

// function myFunction(array){
//     return array % 3 === 0;

// }



// console.log(newArr);






//q5 לא הבנתי את השאלה
// const arr = ['short', 'medium', 'longest', 'longer'];
// const newArr = arr.reduce(function(a, b){
//     return a.length > b.length ? a : b;
// }, '');



// console.log(newArr);



//q55

// const arr = [1, 3, 5, 7, 9];
// const newArr = arr.some(myFunction);

// function myFunction(array){
//     return array % 2 === 0;

// }



// console.log(newArr);





//q56

// const arr = ['apple', 'ap', 'orange'];
// const newArr = arr.every(myFunction);

// function myFunction(array){
//     return array.startsWith('ap');

// }



// console.log(newArr);






//q57

// const arr = [{id: 1, completed: false}, {id: 2, completed: true}];
// const newArr = arr.find(myFunction);

// function myFunction(array){
//     return array.completed === true;

// }



// console.log(newArr);






//q58
// const arr = ["apple", "cherry", "banana"];
// const newArr = arr.findIndex(myFunction);

// function myFunction(array){
//     return array === "banana";;

// }



// console.log(newArr);







//q59

// const arr = [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}];
// const newArr = arr.sort(function(a, b) {
//     return a.name.localeCompare(b.name); 
// });

// console.log(newArr);



//q60
// const arr = ['a',['b','c'],'d'];
// const newArr = arr.flat();



// console.log(newArr);





//q61
// const arr = ["h","e" ,"l", "l", "o"];
// let result = "";

// arr.forEach(function(word) {
//     result += word;
// })





//q62
// const arr = ["apple", "cherry", "banana"];
// const newArr = arr.map(myFunction);

// function myFunction(array){
//     return array[0];

// }



// console.log(newArr);





//q63
// const arr = ["a", "ab", "abc", "abcd"];
// const newArr = arr.filter(myFunction);

// function myFunction(array){
//     return array.length > 3;

// }



// console.log(newArr);






//q62
// const arr = ["apple", "cherry", "banana"];
// const newArr = arr.reduce(myFunction);

// function myFunction(array){
//     return array[0];

// }



// console.log(newArr);