import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setInput] = useState("");

  const handleInput = () => {
    console.log("you type somthing....")
  }

  return (
    <>
      <div>
        <h1>Inputs in React</h1>
        <label htmlFor='input'></label>
        <input type="text" name='input' id='input' onChange={handleInput}></input>
        <p>{text}</p>
        </div>
    </>
  )
}

export default App
