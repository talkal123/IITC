import React, { useState } from "react";
import Message from "./message";

function AppParent() {
    let [show,setShow] = useState(true)

    const hideMessage = () => {
        setShow(false)
    }
    return (
        <div>
            <h2>Parent comp</h2>
          {show && <Message hideMessage1 = {hideMessage} txt="Work from parents"/> }
        </div>
    )
}

export default AppParent

