import React, { useState } from 'react'
// import Photo from '../assets/images/image-waffle-tablet.jpg'
import AddToCart from './AddToCart';
const Item = ({ data }) => {
 
  // const [name,setName] = useState('')
  // const [category,setCategory] = useState('')
  // const [price,setPrice] = useState('')
  const [cartItems, setCartItems] = useState([])
  

  function handleClick(item) {
    // setName(item.name); // שמירת הקטגוריה ב-state
    // setCategory(item.category); // שמירת הקטגוריה ב-state
    // setPrice(item.price + " $"); // שמירת הקטגוריה ב-state
    // console.log(item.name);
    // console.log(item.category);
    // console.log(item.price);

    setCartItems(lastItems => [...lastItems], item)
    
  }

  return (
    <div className='border w-full p-4 grid grid-cols-2'>
      <div className='grid grid-cols-3 gap-4 w-full border'>
        {data.map((item, index) => (
          <div key={index} className='border w-full flex flex-col items-center position relative'>
            
            <img src={item.image.tablet} className='object-contain w-full' alt="" />
            <div className='border p-2 flex flex-col gap-2 w-full'>
              <p className='text-gray-400 text-sm'>{item.category}</p>
              <p className='font-bold'>{item.name}</p>
              <p className='font-bold text-orange-500'>{item.price} $</p>
              <button onClick={() => handleClick(item)} ><AddToCart /></button>
            </div>
          </div>
        ))}
      </div>
      <div className='border p-4'>
        <h2 className='font-bold mb-2'>Items in Cart:</h2>
        {cartItems.map((item, index) => (
          <div key={index} className='border-b p-2'>
            <p>{item.name}</p>
            <p>{item.price} $</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Item
