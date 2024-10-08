const strings = [
    "baba",
    "my success",
    "no more lives",
    "and of session",
    "good discussion",
];


 function groupStrings () {
    let spaceCounter = 0;
     for( i = 0; i < myString.length; i++){
         if (myString[i] === " "){
             spaceCounter++;
         }

     }
     console.log(`In the string ${myString} there are ${spaceCounter} spaces`)
    for (let i = 0; i < strings.length; i++){
        console.log(strings[i]);
    }

};

groupStrings();