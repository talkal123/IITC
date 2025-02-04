import React from 'react'

const AddToCart = ({onAdd, onMinus} ) => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <div onClick={onMinus} className='border rounded-full w-5 h-5 bg-white hover:bg-orange-300 cursor-pointer flex items-center justify-center'>
        -
      </div>
      <div onClick={onAdd} className='border rounded-full w-5 h-5 bg-white hover:bg-orange-300 cursor-pointer flex items-center justify-center'>
        +
      </div>
    </div>
  )
}

export default AddToCart
