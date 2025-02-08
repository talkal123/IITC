import React, { useState } from 'react'
// import Photo from '../assets/images/image-waffle-tablet.jpg'
import AddToCart from './AddToCart';
const Item = ({ data }) => {
 
  // const [name,setName] = useState('')
  // const [category,setCategory] = useState('')
  // const [price,setPrice] = useState('')
  const [cartItems, setCartItems] = useState([])
  console.log(cartItems);
  
  const [quantity, setQuantity] = useState(0)
  

  function handleClick(item) {
    //#1
    // setName(item.name); // שמירת הקטגוריה ב-state
    // setCategory(item.category); // שמירת הקטגוריה ב-state
    // setPrice(item.price + " $"); // שמירת הקטגוריה ב-state
    // console.log(item.name);
    // console.log(item.category);
    // console.log(item.price);
    //#2
    setQuantity(quantity +1)
    setCartItems(lastItems => [...lastItems, item])

    let found = false
    for (let i = 0; i < cartItems.length; i++){
      if (cartItems[i].name === item.name){
        cartItems[i].quantity ++
        found = true
      }
      if (found){

      }
      console.log(i);
      console.log(found);
      
      
    }
    
    
  }

  function handleClickMinus(item){
    setCartItems(cartItems.slice(0, -1))
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
                <AddToCart  onAdd ={() => handleClick(item)} onMinus ={() => handleClickMinus(item)}/>
            </div>
          </div>
        ))}
      </div>
      <div className='border p-4'>
        <h2 className='font-bold mb-2'>Items in Cart:</h2>
        {cartItems.map((item, index) => (
          <div key={index} className='border-b p-2 jus flex justify-between'>
            <div>
              <p className='font-semibold'>{item.name}</p>
              <div>Price: {item.price} <span className='text-green-700'>$</span></div>
              <p>Quantity: {quantity}</p>
            </div>
            <div onClick={handleClickMinus} className='hover:bg-orange-300 cursor-pointer border rounded-full w-5 h-5 flex items-center justify-center'><div>-</div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Item
