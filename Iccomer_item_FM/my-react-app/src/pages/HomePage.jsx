import { useState, useEffect } from 'react'
import Item from '../components/Item'
import ItemDetails from '../components/ItemDetails'
import axios from 'axios'
import CardItemHomePage from '../components/CardItemHomePage'

const HomePage = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    axios.get('https://dummyjson.com/products')
    .then(res => {
      setProducts(res.data.products)
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-4'>
      {products.map(products => (
        <CardItemHomePage products={products}/>
      ))}
    </div>
  )
}

export default HomePage
