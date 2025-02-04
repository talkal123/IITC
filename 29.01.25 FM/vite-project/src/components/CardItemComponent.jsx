
import React, { useState } from 'react'
import Item from './Item'
import dummyData from '../data.json'

const CardItemComponent = () => {
    const [data, setData] = useState(dummyData)
    
    
    
  return (
    <div className='border'>
      <Item data = {data} />
    </div>
  )
}

export default CardItemComponent
