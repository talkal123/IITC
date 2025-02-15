import React from 'react'

const ItemDetails = ({product}) => {
  console.log(product);

  if (!product || !product.images || product.images.length === 0) {
    return <div>Loading...</div>;  
  }
  
  return (
    <div className='border p-10 flex flex-col gap-8 justify-around'>
      <div className='flex flex-col gap-2'>
        <p className='text-gray-500'>{product.category}</p>
        <h1 className='text-4xl font-bold'>{product.brand}</h1>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-gray-500'>{product.description}</p>
        <h3 className='text-2xl font-bold'>$ {product.price}</h3>
      </div>
      <div className='flex gap-4'>
        <div className='border flex gap-5 justify-center w-full'>
           <button className='text-orange-400 font-bold text-lg'>-</button> 
           <button className='font-bold text-lg'>0</button> 
           <button className='text-orange-400 font-bold text-lg'>+</button> 
        </div>
        <div className='border flex justify-center w-full '>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails
