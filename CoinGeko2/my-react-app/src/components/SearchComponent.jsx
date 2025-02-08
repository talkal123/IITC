import React from 'react'

const SearchComponent = ({response}) => {
    console.log(response);
    
  return (
    <div>
      <input type="text" placeholder='Search here...' className='border border-black rounded-sm p-1'/>
      
    </div>
  )
}

export default SearchComponent
