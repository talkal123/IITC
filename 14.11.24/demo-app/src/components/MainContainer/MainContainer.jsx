import "./MainContainer.css"
import React from "react";
import Background from "../Background/Background.jsx"
import Head from "../Head/Head.jsx";
import Recipe from "../Recipe/Recipe.jsx"

const MainContainer = () => {
    return(
        <div className="Main-Container">
            
            <Background />
            <Head />
            <Recipe />
        </div>
    )
}

export default MainContainer