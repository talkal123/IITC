import './App.css'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import ParentComp from './components/PerentComp'

function App() {

  

  return (
    <>
      <div className='App'>
        <ParentComp>
          <Comp1 />
        </ParentComp>
        <ParentComp>
          <Comp2 />
        </ParentComp>
      </div>
    </>
  )
}

export default App
