import { useState } from "react";

import FormComp from "./components/FormComp.jsx";
import ResultComp from "./components/ResultComp.jsx";

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserSubmit, setDidUserSubmit] = useState(false);

  return (
    <div className="App">
      Choose a number
      {didUserSubmit ? (
        <ResultComp userChoice={userChoice} />
      ): (
        <FormComp 
          updateFunction={setUserChoice}
          setDidUserSubmit={setDidUserSubmit}
        />
      )}
      
    </div>
  );
}

export default App;





































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="main-container">
//         <h3>How did we do?</h3>
//         <p>sdsdsdsdd</p>
//         <button>1</button>
//         <button>2</button>
//         <button>3</button>
//         <button>4</button>
//         <button>5</button>
//       </div>
//       <button>Submit</button>
      
//     </div>
//   );
// }

// export default App;
