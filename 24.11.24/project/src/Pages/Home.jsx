import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";



// React Router Dom Imports
import { Link } from 'react-router-dom'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button>
        <Link to={'/sign-in'}>
            Sign IN
        </Link>
      </button>
      <button>
        <Link to={'/dummyData'}>
            DummyData page
        </Link>
      </button>
      
    </>
  );
};

export default Home;