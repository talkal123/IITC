import React from 'react';

const ItemDetails = ({ product, handleClick }) => {
  console.log(product);

  if (!product || !product.images || product.images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 text-lg">{product.category}</p>
        <h1 className="text-4xl font-bold text-gray-800">{product.brand}</h1>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-lg">{product.description}</p>
        <h3 className="text-3xl font-semibold text-gray-800">${product.price}</h3>
      </div>

      <div className="flex justify-center mt-6">
        <div className="w-full sm:w-auto">
          <button
            onClick={() => handleClick(product)}
            className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
