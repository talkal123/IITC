import React from "react";



function Message (props) {
    return (
        <div style={{fontSize:"20px",background:"yellow"}}>
            Message: {props.txt}
            <button onClick={() => {
                props.hideMessage1()

            }} className="float-end">x</button>
        </div>
    )
}


export default Message