import './App.css'

function App() {

 const originalObject = {
      name: "John",
      age: 30,
      address: null
    };


    const newObject ={...originalObject}

    console.log(newObject)



  return (
    <>
    
      {/* <h1>{newObject}</h1> */}
        
    </>
  )
}


export default App




























 // const numbersOne = [1, 2, 3];
  // const numbersTwo = [4, 5, 6];
  // const numbersThree = [7,8,9];
  // const arr = ["lama"];
  // const numbersCombine = [...numbersOne, ...numbersTwo]
  // const newElements = [888,...numbersOne];
  // const newToEndElements = [...numbersOne,222];
  // const thirdElements = [...numbersOne,...numbersTwo,...numbersThree]
  //const newElementThird= [thirdElements,"shalom"]
  //  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const lastThreeElements = originalArray.slice(-3)
  // const originalArray = [1, 2, 3];
  // const NewArr = originalArray.reverse()
  // const arr=[1,2,3]
  // const newArr = [arr[0],3,...arr.slice(2)]
  // const arr= ["hey"]
  // const newArr = [...arr]
    //  const arr= ["hey"]
    //  const arr2= ["her"]
    //  const newArr=[...arr,...arr2]
      // const arr= [1,2,3]
      // const newArr=[...arr.slice(0,-1)]
      // const arr= [1,2,3]
      // const newArr=[...arr.slice(0,2),8,...arr.slice(2)]
    // const arr =[1,2,3,4,5]
    // const newArr =[...arr.slice(1,4)]
    // const arr =[1,2,3,4,5]
    // const newArr =[...arr.slice(1),arr[0]]
    // const arr =[1,2,3,4,5]
    // const newArr =["hello",...arr]
    // const arr =[1,2,3,4,5]
    // const newArr =["hello",...arr]

    // const originalObject = {
    //   name: "John",
    //   age: 30,
      
    // };


    // const originalObject2 = {
    //   address: {
    //     city: "New York",
    //     zip: "10001"
    //   }
    // };

    // const originalObject3 = {...originalObject,...originalObject2}


    //  const originalObject = {
    //   name: "John",
    //   age: 30,
      
    // };

    // const originalObject2 ={...originalObject,phone:2}

    // console.log(originalObject2)



    //  const originalObject = {
    //   name: "John",
    //   age: 30,
      
    // };

    // const originalObject2 ={...originalObject,age:2}

    // console.log(originalObject2)


    // const originalObject = {
    //   name: "John",
    //   age: 30,
      
    // };


    // const originalObject2 = {
    //   address: {
    //     city: "New York",
    //     zip: "10001"
    //   }
    // };

    // const originalObject3 = {
    //   address: {
    //     city: "Paris",
    //     zip: "10001"
    //   }
    // };

    // const originalObject4 = {...originalObject,...originalObject2,...originalObject3}

    // console.log(originalObject4)


    //  const originalObject = {
    //   name: "John",
    //   age: 30,
      
    // };

    // const originalObject2 ={...originalObject}

    // console.log(originalObject2)


    
  // function mergedObjects(...objects) {
  //   return Object.assign({}, ...objects)
  // }

  // const object1 = { name: "John", age: 30 };  // אובייקט 1
  // const object2 = { city: "Jerusalem", country: "Israel" };  // אובייקט 2
  // const object3 = { phone: 555 };  // אובייקט 3

  // const mergedObject = mergedObjects(object1, object2, object3);
  // console.log(mergedObject)



