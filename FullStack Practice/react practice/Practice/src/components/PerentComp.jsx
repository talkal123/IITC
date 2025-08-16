import React, { useState } from "react";

function ParentComp(props) {
    const [show,setShow] = useState(false);

    return (
        <div>
            <h1>Perents</h1>
            <button onClick={() => setShow(true)}>Show</button>
            {show && props.children}
        </div>
    )
}

export default ParentComp
