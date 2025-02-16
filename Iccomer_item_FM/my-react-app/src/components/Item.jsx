import React from 'react';

const Item = ({ product }) => {

  if (!product || !product.images || product.images.length === 0) {
    return <div>Loading...</div>;  
  }

  const arr = [0, 1, 2, 3, ];  

  return (
    <div className=''>
      <div>
        <div> 
          <div className=''>
            <img src={product.images[0]} className='max-h-[400px]' alt="" />
          </div>

          <div className='grid grid-cols-4 gap-2 mt-2'>
            {arr.map((index) => {
              return (
                <div key={index} className='border rounded-lg'>
                  {product.images[index] ? (
                    <div><img src={product.images[index]} alt={`Small image ${index}`} /></div>
                  ) : (
                    <div className="w-full h-24 bg-gray-200"></div> 
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
