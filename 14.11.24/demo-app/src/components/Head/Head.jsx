import React from "react";
import "./Head.css"


import Intro from "../Intro/Intro.jsx"
import Pretime from "../Pretime/Pretime.jsx"


const Head = () => {
    return (
        <div className = "head">
             
            
            <Intro/>
            <Pretime/>
        </div>
    )
}

export default Head