import React, {useRef} from "react";

export default function AppInput() {
    const inputRef = useRef();

    const changeColor = () => {
        console.log(inputRef.current.value)
    }

    return (
        <div className="container">
            <h1>Enter your favorite color:</h1>
            <input ref={inputRef} type="text" />
            <button onClick={changeColor}>choose</button>
        </div>
    )
}