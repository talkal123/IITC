import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages Import 

import Home from './Pages/Home.jsx'
import SignInPage from './Pages/SignInPage.jsx'
//import QueryPrint from './Pages/QueryPrint.jsx'
import DummyDataPage from './Pages/DummyDataPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App


