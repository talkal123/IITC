import React, {useState} from "react";




 function Counter () {
    const [counter, setCounter] = useState(1)

    const onAdd1 = () => {
      //  counter++
      setCounter(counter +1)
    }

    const onMinus1 = () => {
        setCounter(counter -1)
      }
    return (
        <>
        <h2>counter: {counter}</h2>
        <button onClick={onAdd1}>Add 1</button>
        <button onClick={onMinus1}>Minus 1</button>
        </>
    )
}


export default Counter