import React from "react";
import "./Instractions.css"



const Instractions = () => {
    return (
        <div className="Instruction">
            <h2>Instruction</h2>
            <ol>
                <li className="LiInst"><span className="PreSpan">Beat the eggs:</span><span className="InstSpan"> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
                <li className="LiInst"><span className="PreSpan">Heat the pan:</span><span className="InstSpan">Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
                <li className="LiInst"><span className="PreSpan">Cook the omelette:</span><span className="InstSpan"> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
                <li className="LiInst"><span className="PreSpan">Add fillings (optional):</span><span className="InstSpan">When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
                <li className="LiInst"><span className="PreSpan">Fold and serve:</span><span className="InstSpan">As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span> </li>
                <li className="LiInst"><span className="PreSpan">Enjoy:</span><span className="InstSpan">Serve hot, with additional salt and pepper if needed.</span></li>
            </ol>
        </div>
    )
}


export default Instractions