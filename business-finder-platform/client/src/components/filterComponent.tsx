import React from 'react'
import { useSearchParams } from 'react-router-dom'

 const FilterComponent = () => {

  return (
    <div className='border grid justify-items-center'>
      <h1>Filters</h1>
      <select name="select" id="">
        <option value="resturant">Resturant</option>
        <option value="electronics">Electronics</option>
        <option value="fastFood">Fast Food</option>

      </select>
    </div>
  )
}

export default FilterComponent
