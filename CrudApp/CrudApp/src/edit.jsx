import React, { useEffect, useState } from 'react'
import './edit.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

 function Edit() {
    const {id} = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3030/users/' + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:3030/users/' + id, data)
        .then(res => {
            alert("data update successfully !");
            navigate('/')
        })
    }
  return (
      <div className='d-flex'>
            <div className="w-50">
                <form onSubmit={handleSubmit}>
                <div>
                        <label htmlFor='name'>Id:</label>
                        <input type='text' disabled name='name' value={data.name} className='form-control' />
                    </div>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input onChange={e => setData({...data,name: e.target.value})} type='text' name='name' value={data.name} className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input onChange={e => setData({...data,email: e.target.value})} type="email" name="email" value={data.email} className="form-control" />
                    </div><br />
                    <button className='btn-info'>Update</button>
                </form>
            </div>
        </div>
  )
}

export default Edit