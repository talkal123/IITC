//console.log("radar")
//let str = 0;

//function isPalindrom (str){
    //let length = str.length
    //for (let i = 0; i < length; i++){
        // console.log(str[i]);
        // first interaction; i === 0 \\ str[i] === "(n)atan"
        // first interaction; i === 1 \\ str[i] === "n(a)tan"


       // for (let j = 0; j < 1; j++) {
        // first interaction; i === 0 \\ str[j] === "nata(n)"
        // first interaction; i === 0 \\ str[i] === "nat(a)n"
           // if (str[i] !== str(length - 1 - i)){
              ///  return false

           // }
      //  }
  ///  }

 ////   return true
//}

//isPalindrom("natan");


//let person= {
    //firstName:"tal",
   // age: 18,
   // isStudent: false,

//}
   // person.isStudent = true;

//console.log("Name: " + person.firstName + ", age: " + person.age)


//let car = { // יצרנו אובייקט
  //  make: "mazda", // הבאנו לו שם
    //model: "cx-30", // הבאנו לו מספר דגם
    //year: 2016, // הבאנו לו שנה
//}

  //  car.year =  2015; // עדכנו את השנה

    //console.log(car); // הדפסנו תוצאה

  //  let fruits ={
    //    name: "banana",
   //     color: "yellow",
    //    sweethnes: 2,

        
  //  }
   // fruits.sweethnes = 5;
  //  console.log(fruits);

 // let book = {
   // title: "spiderman",
   // author: "john duo",
   // pages: 5,
 // }

 // book.pages = 50;
 // console.log(book);


 // let book2 = {
  //  title: "balck wolf",
   // author: "john duo",
  // pages: 2,
 // }

 // book.pages = 50;
 // console.log(book2);

 // let book3 = {
  //  title: "harrypoter",
   // author: "max jd",
   /// pages: 7,
  //}

 // book.pages = 50;
 // console.log(book);

 // let animal = {
  //  species: "lion",
  //  sound: "rar",
  //  iwWild: true,
 // }

 // animal.iwWild = false;
 // console.log(animal);


   let car = {
       make: "toyota",
       model: "corolla",
       year: 2023,
       printDetails: function(){
            let keys = Object.keys(this)
            for (let i = 0; i < keys.length; i++) {
                if (typeof this[keys[i]] !== "function") {
                    console.log(this[keys(i)]);
                }
            }
       }
   },

   printAll: function() {
        let keys = Object.keys(this);

        let values = Object.values(this);
        console.log(values);
        for (let i = 0; i < keys.length; i++) {
            if (typeof values(i) !== "function") {
                console.log(`$ {keys(i)}: ${values(i)}`);
            }
        }
   }
   
    car.year = 2024;
    car.color = "red";

    console.log(car.model);
    


    

    //let keys = Object.keys(car);
       // printDetails:function(){
        //console.log(this);
       // }
   // }
   


    // let person = {
    //    firstName : "duo",
    //    lastName : "josh",
    //    age: 28,
   // }

  //  person.id = 232323;

   // const keys = Object.keys(person)
  //  console.log(keys)
