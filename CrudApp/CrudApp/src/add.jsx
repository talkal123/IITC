import React, { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './add.css'
function Add() {
    const [inputData, setInputData] = useState({ name: '', email: '' })
    
    const navigat = useNavigate();
    function handleSubmit(event) {
        event.preventDefault()
        
        axios.post('http://localhost:3030/users', inputData)
        .then(res => {
            alert("Data Added Successfully!");
            Navigate('/');
        }).catch(err => console.log(err))
    }

    return (
        <></>
    )
}
export default Add