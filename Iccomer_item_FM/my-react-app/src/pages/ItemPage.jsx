import React from 'react'
import Item from '../components/Item'
import ItemDetails from '../components/ItemDetails'

const ItemPage = () => {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <Item />
        <ItemDetails />
    </div>
    </div>
  )
}

export default ItemPage
