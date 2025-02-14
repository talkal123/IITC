import React from 'react'

const CardItemHomePage = ({products}) => {
    console.log(products);
    
  return (
    <div>
      <div className="p-4 border rounded-lg shadow-md min-h-[405px]">
      <img src={products.images} alt={products.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2 h-16 overflow-hidden text-ellipsis whitespace-nowrap">{products.title}</h3>
      <p className="text-gray-500">{products.brand}</p>
      <p className="text-xl font-bold text-green-500 mt-2">${products.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">View Details</button>
    </div>
    </div>
  )
}

export default CardItemHomePage
