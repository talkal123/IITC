import React from 'react';
import Furniture from '../../assets/Furniture.png';
import Travels from '../../assets/Travels.png';
import Sneakers from '../../assets/Sneakers.png';
import Books from '../../assets/Books.png';
import HandBag from '../../assets/HandBag.png';
import Tech from '../../assets/Tech.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopOurTop = () => {
  const arr = [
    {
        title: "Furniture",
        img: Furniture
    },
    {
        title: "Travels",
        img: Travels
    },
    {
        title: "Sneakers",
        img: Sneakers
    },
    {
        title: "Books",
        img: Books
    },
    {
        title: "HandBag",
        img: HandBag
    },
    {
        title: "Tech",
        img: Tech
    },
];

  return (
    <div className='p-5 flex flex-col gap-12 mt-28' data-aos="fade-up">
      <h1 className='font-bold text-3xl'>Shop Our Top</h1>
      <div className='grid grid-cols-3 md:flex gap-5'>
        {arr.map((item, index) => (
          <div key={index} className='relative overflow-hidden rounded-lg group max-w-[250px] max-h-[300px]'>
            <img
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
              src={item.img}
              alt={item.title}
            />
            <div className='absolute top-0 left-0 w-full text-center  text-white p-2'>
              <h1 className='font-bold text-2xl'>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopOurTop;
