import React from 'react'
import { Link } from 'react-router-dom';
import Star from "../assets/Star.png"

const CardItemHomePage = ({products}) => {
    console.log(products);
    if (!products || !products.images || products.images.length === 0) {
      return <div>Loading...</div>;  
    }
    
  return (
    <div>
      <div className="p-4 border rounded-lg shadow-md min-h-[405px]">
        {products.images.length > 0 ? (
          <img src={products.images[0]} alt={products.title} className="w-full h-48 object-cover rounded-md" />

        ) : (
          <div className="w-full h-24 bg-gray-200"></div>
        )}
      <h3 className="text-lg font-semibold mt-2 h-16 overflow-hidden text-ellipsis whitespace-nowrap">{products.title}</h3>
      <div className='flex gap-1 items-center'>
        {Array(Math.round(products.rating)).fill(0).map((_, index) => ( <img key={index} src={Star} className='w-4 h-4'/>))}
        <span>({Math.round(products.rating)})</span>
      </div>
      <p className="text-gray-500">{products.brand}</p>
      <p className="text-xl font-bold text-green-500 mt-2">${products.price}</p>
      <Link to={`/product/${products.id}`}><button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">View Details</button></Link>
    </div>
    </div>
  )
}

export default CardItemHomePage
