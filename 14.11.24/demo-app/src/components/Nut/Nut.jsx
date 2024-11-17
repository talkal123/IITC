import React from "react";
import "./Nut.css"



const Nut = () => {
    return (
        <div className="Nut">
            <h2>Nutrition </h2>
            <span>
            The table below shows nutritional values per serving without the additional fillings.
            </span>
            <table>
                <tr className="TrNut">
                    <td>Calories</td>
                    <td className="TdNut">277kcal</td>
                </tr>
                <tr className="TrNut">
                    <td>Carbs</td>
                    <td className="TdNut">0g</td>
                </tr>
                <tr className="TrNut">
                    <td>protein</td>
                    <td className="TdNut">20g</td>
                </tr>
                <tr className="TrNut">
                    <td>fat</td>
                    <td className="TdNut">22g</td>
                </tr>
            </table>
        </div>
    )
}


export default Nut