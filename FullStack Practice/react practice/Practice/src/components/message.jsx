import React from "react";

export default function Message(props) {
    const cssObject = {
        color:"red",
        background: props.bg
    }

    return (
        <div className="container">
            <h2 style={cssObject}>Message: {props.txt}</h2>
        </div>
    )
}

