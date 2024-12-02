import React, { useState } from "react";
import './style.css';
import Modal from "../modal/Modal"; 
import pokemonType from '../../helpers/pokemonTypes.jsx'


function Card ({pokemon}) {
    const [isModalOpen, setIsModalOpen] = useState(false);  
        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);
    
return (
    <div className="Card" style={{ backgroundColor: pokemonType[pokemon.types[0]?.type?.name] || "#ffffff" }}>
        <div className="Card_img">
            <img src={pokemon.sprites.other?.showdown?.front_default}></img>
        </div>
        <div className="Card_name">
            <p style={{fontWeight:"600",fontSize:"25px",color:"white"}}>{pokemon.name}</p>
            <div className="pokemonType">Id : {pokemon.id}#</div> 
            <button className="openModelButton" onClick={openModal}>All Details</button>
        </div>
        {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="img_container" style={{ backgroundColor: pokemonType[pokemon.types[0]?.type?.name] || "#ffffff" }}>
                <div className="detailsContainer">
                    <div className="leftDetails">
                        <p>{pokemon.name}</p>
                        <div className="leftDetailsDivs">
                            <div>{pokemon.abilities[0]?.ability.name}</div>
                            <div>{pokemon.abilities[1]?.ability.name}</div>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <p>#00{pokemon.id}</p>
                    </div>

                </div>
                <img style={{width:"220px",height:"220px"}} src={pokemon.sprites.front_default}></img>   
            </div>

            <div className="allCardTypes">
            <div className="Card_types">Type:  
                {pokemon.types.map((type, index) => {
                    return ( <span key={index} className="Card_type" style={{backgroundColor: pokemonType[type.type.name]}}> {type.type.name} </span>
                )

                })}
            </div>
            <div className="Card_info">
                <div className="Card_data Card_data--weight">
                    <p className="title">height: {pokemon.height}</p>
                </div>
                <div className="Card_data Card_data--height">
                    <p className="title">Weight: {pokemon.weight}</p>
                </div>
                <div className="Card_data Card_data--stats">
                    <p className="title">Stats: {pokemon.stats[0].stat.name}</p>
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