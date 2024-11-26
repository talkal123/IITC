import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");

  

  return (
    <>
  <form>
    <label>Enter your name:
      <input
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </label>
  </form>
    </>
  )
}

export default App
