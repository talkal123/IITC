import { useEffect, useState } from "react";
import axios from "axios";

function App() {
 
// let word = "hello world"
// const newWord = word.split("").reverse()
// const result = newWord.join("")
// console.log(result);

// const arr = [1,2,3,4]

// const sum = arr.reduce((total,item) => total + item)
// console.log(sum);


// const words = ["a","b","a","c","a"]

// let count = {}

// words.forEach(w => {
//   if (w !== "") {
//     count[w] = (count[w] || 0) + 1
//   }
// })

// console.log(count)


const arr = [1,4,7]
const arr2 = [2,3,6]


const newArr = [...arr, ...arr2]
const sortedArr = newArr.sort((a,b) => a - b)

console.log(sortedArr);


// const arr = [1,2,2,3,4,4,5]

// let newArr = []

// const func = new Set(arr)

// console.log(func);



// const arr = [1,[2,[3,4],5]]

// const newArr = arr.flat(Infinity);

// console.log(newArr);


 

  return (
    <div>
      
    </div>
  );
}

export default App;
