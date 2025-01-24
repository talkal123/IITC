import CryptoHome from './pages/CryptoHome'
import CryptoDetail from './pages/CryptoDetail'
import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element= {<CryptoHome />}></Route>
        <Route path="/coin/:id" element= {<CryptoDetail />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
