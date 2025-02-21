import React, { useState,useEffect } from 'react'
import Item from '../components/Item'
import ItemDetails from '../components/ItemDetails'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const ItemPage = ({handleClick}) => {
  const [product, setProduct] = useState([])
  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = () => {
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res => {
      setProduct(res.data)
    }).catch(err => {
      console.log(err);
    })

    if (!product) {
      return <div>Loading...</div>; 
    }
  }
  return (
    <div>
      <div className='grid grid-cols-2'>
        <Item product={product}/>
        <ItemDetails product={product} handleClick={handleClick} />
    </div>
    </div>
  )
}

export default ItemPage
