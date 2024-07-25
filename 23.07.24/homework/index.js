   let firstName = "tal";
   let lastName = "calderon";
   let age = 24;
   let isCitizen = true;
   let isStudent = true;
   let day = "Monday";
   let day_2 = "Thusday";
   let isMember = true;
   let email = "lala@153.com";
   let score = 52
   let word = "lilili";
   

   console.log("firstName" , firstName);
   console.log("lastName" , lastName);

   let fullName = firstName + " " + lastName;

   console.log("full name is" , fullName);

   let isAdult = age > 18;
   console.log("isAdult", isAdult);

   let isTal = firstName === "tal";
   console.log("isJohn", isTal)





   
   function greet(firstName , lastName){
    let fullName = firstName + " "  + lastName;
    return fullName;


   }

   console.log(greet("tal","calderon"));

function greetUser(){
   return " Hello " + fullName + " Welcome to the  IITC Bootcamp ";
}

console.log (greetUser());

function checkAge(){
   if (age < 13){
      console.log("You are an child");
      } else {
      console.log("You are not a child");
      }
      if (age < 13 && age < 17){
      console.log("You are a teenager");
      } else {
      console.log("You are not a teenager ");
      }
      if (age > 18 && age < 64){
      console.log("You are an adult");
      } else {
      console.log("You are not a young adult");
      }
      if (age >= 65){
      console.log("You are a senior")
      } else {
         console.log("You are not a senior");
      }
}

console.log(checkAge());


function dayOfWeek(){
switch (day || day_2){
   case "Monday":
    console.log("Start of the work week!");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");

}
   
}

console.log(dayOfWeek());

function checkEligibility(){
   if (age < 18 && isStudent === true){
   console.log("you are a minor student");
   } else {
   console.log("invalid");
   }
   if (age < 18 && isStudent === false){
   console.log("you are a minor non-student");
   } else {
   console.log("invalid");
   }
   if (age < 18 && age > 24 && isStudent === true){
   console.log("You are a young adult student.");
   } else {
   console.log("invalid");
   }
   if (age < 18 && age > 24 && isStudent === false){
   console.log("You are a young adult non-student.");
   } else {
   console.log("invalid");
   }
   if (age >= 25 && isStudent === true){
   console.log("You are an adult student.");
   } else {
   console.log("invalid");
   }
   if (age <= 25 && isStudent === true){
   console.log("You are an adult non-student.");
   } else {
   console.log("invalid");
   }

}

console.log(checkEligibility());





function checkDiscount(age,isMember){
   if(age < 18){
   if(isMember) return "You get a 20% discount.";
   else return "You get a 10% discount.";
}

   else if (age < 65){
      if (isMember === true) return "You get a 30% discount."
      else return "You get a 20% discount."
   }

   else{
       ( age > 18 && age < 64)
      if (isMember === true) return "You get a 10% discount."
      else return "No discount available."
   }
}


console.log(checkDiscount());


function validateLogin(username,password){
   let storedUsername = "username123";
   let storedPassword = "password";

   if(storedUsername === username && storedPassword === password){
      return "Login successful";}
   else {
      return "Invalid username or password"
   }
}

console.log(validateLogin("username123","password"))


function extraInitials(firstName,lastName){
   return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase(0);
   
   
   
  

}


console.log(extraInitials(firstName,lastName));




function maskEmail(email){
   return email.replace("lala", "*****");

}


console.log(maskEmail(email));


function gradeCalculator(score){
   if (score >= 89 ){
      console.log("A");
   }
   else if (score >= 80){
      console.log("B");
   }
   else if (score >= 70){
      console.log("C");
   }
   else if (score >= 60){
      console.log("D");
   }
   else {
      console.log("F")
   }
 
}






console.log(gradeCalculator(score));





function canVote(age,isCitizen){
   if (age >= 18 && isCitizen === true){
      return ("You are eligible to vote.")
   }
   else {
      return ("You are not eligible to vote.")
   }


}


console.log(canVote(age,isCitizen));




function convertToUpperCaseAndAddAge(firstName,age){
   //console.log (fullName.toUpperCase(fullName + age));//
   return firstName.toUpperCase(fullName) + age;
   
   
}




console.log(convertToUpperCaseAndAddAge(firstName,age));




function  capitalize(word){
   return word.charAt(0) + word.substring(1,6);

}


console.log(capitalize(word));