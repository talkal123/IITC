import React, { useEffect } from 'react';
import Furniture from '../../assets/Furniture.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseByBrand = () => {

 
  const arr = [
    {
        title: "Staples",
        subtitle: "Delivery with in 24 hours",
        img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png"
    },
    {
        title: "Grocery outlet",
        subtitle: "Delivery with in 24 hours",
        img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png"
    },
    {
        title: "Sports Basement",
        subtitle: "Delivery with in 24 hours",
        img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png"
    },
    {
        title: "Target",
        subtitle: "Delivery with in 24 hours",
        img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png"
    },
    {
        title: "Sprouts",
        subtitle: "Delivery with in 24 hours",
        img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png"
    },
    {
        title: "Mollie stones",
        subtitle: "Delivery with in 24 hours",
        img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png"
    },
    {
        title: "Container Store",
        subtitle: "Delivery with in 24 hours",
        img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png"
    },
    {
        title: "Bevmo!",
        subtitle: "Delivery with in 24 hours",
        img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png"
    },
];

  return (
    <div className='p-5 flex flex-col gap-12 mt-28' data-aos="slide-right">
  <h1 className='font-bold text-3xl'>Choose By Brand</h1>
  <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
    {arr.map((item, index) => (
      <div key={index} className='bg-gray-100 hover:border-black rounded-lg border p-3 flex gap-5  items-center justify-center '>
        <div className='h-20 w-20 border rounded-full overflow-hidden mb-4'>
          <img src={item.img} className='w-full h-full object-cover' alt={item.title} />
        </div>
        <div className="text-center">
          <h3 className='text-xl'>{item.title}</h3>
          <span className='text-gray-500 text-xs'>{item.subtitle}</span>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default ChooseByBrand;
