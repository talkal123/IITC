import React from "react"
import "./Recipe.css"
import Ingrediens from "../Ingrediens/Ingrediens.jsx"
import Instractions from "../Instractions/Instractions.jsx"
import Nut from "../Nut/Nut.jsx"

const Recipe = () => {
    return (
        <div>
            <Ingrediens/>
            <Instractions/>
            <Nut/>
        </div>
    )
    

}


export default Recipe