import React, {useRef} from "react";

function AppInput () {
    const inputRef = useRef()

    const inputValue = () => {
        console.log(inputRef.current.value)
        const value = inputRef.current.value

    }


    return (
        <div className="container">
            <h1>Input Value</h1>
            <input ref={inputRef} type="text"></input>
            <button onClick={inputValue}>click</button>
            
        </div>
    )
}


export default AppInput