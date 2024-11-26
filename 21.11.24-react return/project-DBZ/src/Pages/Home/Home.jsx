import { useState,useEffect } from 'react';
import axios from 'axios';
import Modal from '../../Modal/Modal.jsx'
import '../../Modal/Modal.css'



const Home = () => {
  const [data, setData] = useState(null);
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null); 
  
  const fetchSingle = (id) => {
    console.log(`https://dragonball-api.com/api/characters/${id}`);
    
  }
  const handleClose = () => {
    
    setOpen(false);
    setSelectedCharacter(null);
  }

  const handleOpen = (character) => {
    setSelectedCharacter(character);
    setOpen(true);
  }

  useEffect(() => {
    axios.get(`https://dragonball-api.com/api/characters/`)
    .then(response => {
      console.log(response.data)
      setData(response.data.items);
      setLoading(false);
      
    })
  
  .catch(error => {
    setError(error);
    setLoading(false);
  });
}, []);

if (loading) {
  return <div>Loading...</div>
}

if (error) {
  return <div>Error: {error.message}</div>
}

  
  return(
    <>

    <div className='card'>
    {data.map(character => (
      <div key={character.id} onClick={() => fetchSingle(character.id)}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <button className='buttonOpen' onClick={() => handleOpen(character)}>Details</button>
      
        {open && selectedCharacter && selectedCharacter.id === character.id && (
        <Modal isOpen={open} onClose={handleClose}>
          <img src={character.image} alt={character.name} />
          <p>Race: {character.race}</p>
          <p>Ki: {character.ki}</p>
          <p>Affiliation: {character.affiliation}</p>
        </Modal>
        )}
      </div>
    ))} 
  </div>
  </>
  
  )
}


export default Home

















// import { useState } from "react";

// // React Router Dom Imports
// import { Link } from 'react-router-dom'


// const Home = () => {
//     return(
//       <>
//       <h1>this is the Home page</h1>
    
//       </>
//     )
//   }
  
  
//   export default Home