import React, { useEffect, useState,useRef } from 'react'

export default function Home() {

  const [name, setName] = useState ('');
  const renderCount = useRef();
  const inputRef = useRef ()

  useEffect (() => {
    renderCount.current = renderCount.current + 1
  })

  function focus() {
    inputRef.current.focus();
    inputRef.current.value = "some value"
    
  }


  

    

  return (
    <div>
      <input 
      ref={inputRef}
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)} />
      <h1>My Name Is {name}</h1>
      <button onClick={focus}>Focus</button>
    </div>
  )
}
