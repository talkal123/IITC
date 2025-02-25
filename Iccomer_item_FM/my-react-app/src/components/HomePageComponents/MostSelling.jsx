import React from 'react'
import CardItemHomePage from '../CardItemHomePage'

const MostSelling = ({products}) => {
  return (
    <div className="p-5 flex flex-col gap-12 mt-28">
        <h1 className="font-bold text-2xl">Weekly Popular Products</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.slice(8, 11).map((products) => (
            <CardItemHomePage products={products} />
          ))}
        </div>
      </div>
  )
}

export default MostSelling
