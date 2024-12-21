import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CoinsGek from './components/CoinsGek'
import CoinById from './components/CoinById'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
        <Route path='/' element={<CoinsGek />} />
        <Route path='/:id' element={<CoinById />}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
