import React, { useState } from "react";
import './style.css';
import Modal from "../modal/Modal"; 
import pokemonType from '../../helpers/pokemonTypes.jsx'


function Card ({pokemon}) {
    const [isModalOpen, setIsModalOpen] = useState(false);  
        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);
    
return (
    <div className="Card">
        <div className="Card_img">
            <img src={pokemon.sprites.front_default}></img>   
        </div>
        <div className="Card_name">Name: {pokemon.name} 
        </div>
        <button className="openModelButton" onClick={openModal}>All Details</button>
        
        {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="allCardTypes">
            <div className="Card_types">Type:  
                {pokemon.types.map((type, index) => {
                    return ( <span key={index} className="Card_type" style={{backgroundColor: pokemonType[type.type.name]}}> {type.type.name} </span>
                )

                })}
            </div>
            <div className="Card_info">
                <div className="Card_data Card_data--weight">
                    <p className="title">Wight: {pokemon.weight}</p>
                </div>
                <div className="Card_data Card_data--height">
                    <p className="title">Weight: {pokemon.height}</p>
                </div>
                <div className="Card_data Card_data--ability">
                    <p className="title">Ability: {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
        <button className="closeModelButton" onClick={closeModal}>Close Details</button>
        </Modal>
        )}
    </div>
    )

}


export default Card;



































// import React from "react"


// export default function Card({children}) {
//     const cardStyle = {
//         width: '200px',
//         height: '200px',
//         background: 'red',
//         border: '1.5x solid green',
//         borderRadius: ' 2px',
//         padding: '4px',
//         margin: '4px'
//     }


// return (
//     <div style={cardStyle}>
//         {children}
//     </div>
// )

// }