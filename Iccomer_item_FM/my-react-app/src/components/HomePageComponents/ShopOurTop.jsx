import React from 'react';
import Furniture from '../../assets/Furniture.png';

const ShopOurTop = () => {
  const arr = [
    {
        title: "Furniture",
        img: Furniture
    },
    {
        title: "Furniture",
        img: Furniture
    },
    {
        title: "Furniture",
        img: Furniture
    },
    {
        title: "Furniture",
        img: Furniture
    },
    {
        title: "Furniture",
        img: Furniture
    },
];

  return (
    <div className='p-10 flex flex-col gap-10'>
      <h1 className='font-bold text-2xl'>Shop Our Top</h1>
      <div className='flex gap-5'>
        {arr.map((item, index) => (
          <div key={index} className='relative overflow-hidden rounded-lg group max-w-[250px] max-h-[300px]'>
            <img
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
              src={item.img}
              alt={item.title}
            />
            <div className='absolute top-0 left-0 w-full text-center  text-white p-2'>
              <h1 className='font-bold'>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopOurTop;
