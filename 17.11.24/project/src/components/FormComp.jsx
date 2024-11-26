const FormComp = (props) => {
    console.log(props);
    
    const updateChoice = (e) => {        
        props.updateFunction(+e.target.innerText)
        props.setDidUserSubmit(true)
    }

    const showResult = (e) => {
        
    }
    
    return (
        <div>
            <button onClick={updateChoice}>1</button>
            <button onClick={updateChoice}>2</button>
            <button onClick={updateChoice}>3</button>
            <button onClick={updateChoice}>4</button>
            <button onClick={updateChoice}>5</button>
            <button>Submit</button>

        </div>
    )
}

export default FormComp