import { useState } from 'react'
import Axios from 'axios'
import Weather from './components/weather'

import './App.css'

function App() {

  return (
    <div className='app'>
      <Weather />
    </div>
  )
}

export default App
