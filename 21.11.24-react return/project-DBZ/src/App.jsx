



import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css';



//import pages
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details'
import Add from './Pages/Add-DragonBall/Add-DragonBall'


import NavBar from './NavBar/NavBar';

function App() {
  


  return (
    <>
    <BrowserRouter>
    <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/Add-DragonBall" element={<Add />} />
        </Routes>
    </BrowserRouter> 
      
      
   
    </>
    
  )
}

export default App





















// import { useState,useEffect } from 'react';
// import {BrowserRouter, Route, Routes, } from 'react-router-dom'
// import './App.css';
// import './Modal/modal.css'
// import axios from 'axios';
// import Modal from "./Modal/Modal";


// //import pages
// import Home from './Pages/Home/Home'
// import Details from './Pages/Details/Details'
// import Add from './Pages/Add-DragonBall/Add-DragonBall'


// import NavBar from './NavBar/NavBar';

// function App() {
//   const [data, setData] = useState(null);
//   const [error,setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [open, setOpen] = useState(false);
//   const [selectedCharacter, setSelectedCharacter] = useState(null); 




//   const handleClose = () => {
    
//     setOpen(false);
//     setSelectedCharacter(null);
//   }

//   const handleOpen = (character) => {
//     setSelectedCharacter(character);
//     setOpen(true);
//   }

//   useEffect(() => {
//     axios.get('https://dragonball-api.com/api/characters')
//     .then(response => {
//       console.log(response.data)
//       setData(response.data.items);
//       setLoading(false);
      
//     })
  
//   .catch(error => {
//     setError(error);
//     setLoading(false);
//   });
// }, []);

// if (loading) {
//   return <div>Loading...</div>
// }

// if (error) {
//   return <div>Error: {error.message}</div>
// }


//   return (
//     <>
//     <BrowserRouter>
//     <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/details/:id" element={<Details data={data} />} />
//           <Route path="/Add-DragonBall" element={<Add />} />
//         </Routes>
      
      
//         <div className='card'>
//           {data.map(character => (
//             <div key={character.id}>
//               <h2>{character.name}</h2>
//               <img src={character.image} alt={character.name} />
//               <button className='buttonOpen' onClick={() => handleOpen(character)}>Details</button>
            
//               {open && selectedCharacter && selectedCharacter.id === character.id && (
//               <Modal isOpen={open} onClose={handleClose}>
//                 <img src={character.image} alt={character.name} />
//                 <p>Race: {character.race}</p>
//                 <p>Ki: {character.ki}</p>
//                 <p>Affiliation: {character.affiliation}</p>
//                 <p>{character.originPlanet.name}</p>        
//               </Modal>
//               )}
//             </div>
//           ))} 
//         </div>
//         </BrowserRouter> 
        
//     </>
    
//   )
// }

// export default App
