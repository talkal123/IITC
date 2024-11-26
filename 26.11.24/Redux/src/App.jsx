import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement,reset } from './redux/counterSlice';

function App() {

  const counter = useSelector((state) =>state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div className='counter'>
        <button id='decrease'
        onClick={()=>dispatch(decrement())}>-
        </button>
        <div className='count'>{counter}</div>
        <button id='increase'
        onClick={()=>dispatch(increment())}>+
        </button>
        <button id='reset'
        onClick={()=>dispatch(reset())}>reset
        </button>
      </div>
    </div>
  )
}

export default App