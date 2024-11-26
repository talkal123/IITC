import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'


import About from './pages/About/About'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Articles from './pages/Articles/Articles'
import Tech from './pages/Articles/Tech/Tech'


// components imports
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />}/>
        <Route path='/dashboard' element = {<Dashboard />}/>
        <Route path='/articles' element = {<Articles />}>
          <Route path='news' element={<h2>this is news section</h2>} />
          <Route path='politics' element={<h2>this is politics section</h2>} />
          <Route path='tech/:id' element={<Tech />} />
      </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
