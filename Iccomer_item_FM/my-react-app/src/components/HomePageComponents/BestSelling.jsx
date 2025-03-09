import React from 'react'
import { Button } from '../ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BestSelling = () => {
    const arr = [
        {
          img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e62d65536b6a75698f_store%20one-min.png",
          subImg:"https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2d253f08a89912d90709_Ellipse%20287.png",
          title: "Staples",
          subtitle1: "Bag",
          subtitle2: "Perfume",
          discountImg:"https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2eeefd8efb290e2d7d78_Icon.png",
          paragraph: "Delivery with in 24 hours",
        },
        {
          img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e74bd907803dd35b4f_store%20two-min.png",
          subImg:"https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2d253a093c1dea9a21c7_Ellipse%20287-1.png",
          title: "Now Delivery",
          subtitle1: "Bag",
          subtitle2: "Perfume",
          discountImg:"https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2eeefd8efb290e2d7d78_Icon.png",
          paragraph: "Delivery with in 24 hours",
        },
        
        {
          img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e668e3265021e48a0b_store%20three-min.png",
          subImg:"https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2d25fbba384ffd156e76_Ellipse%20287-2.png",
          title: "Bevmo",
          subtitle1: "Bag",
          subtitle2: "Perfume",
          discountImg:"https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2eeefd8efb290e2d7d78_Icon.png",
          paragraph: "Delivery with in 24 hours",
        },
        
        {
          img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6eaf8537c8058cf04_store%20four-min.png",
          subImg:"https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2d25dddbd27c9eda91b5_Ellipse%20287-3.png",
          title: "Quicklly",
          subtitle1: "Bag",
          subtitle2: "Perfume",
          discountImg:"https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2eeefd8efb290e2d7d78_Icon.png",
          paragraph: "Delivery with in 24 hours",
        },
        
      ];

  return (
    <div className='p-5 flex flex-col gap-12 mt-28' data-aos="slide-left">
        <h1 className="font-bold text-3xl">Best Selling Store</h1>
      <div className="grid grid-cols-2  w-full gap-2 md:flex">
            {arr.map((item) => (
              <div className="rounded-lg overflow-hidden ">
                <div className="overflow-hidden rounded-lg relative">
                  <img src={item.img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
                  <img className='absolute bottom-0' src={item.subImg} alt="" />
                </div>
                <div className=" p-5 flex flex-col gap-3 ">
                  <h1 className="text-2xl font-bold">{item.title}</h1>
                  <div className='text-sm text-gray-400 flex gap-2'>
                    <p className="font-semibold ">{item.subtitle1}</p>
                    <p>&#8226;</p>
                    <p className="font-semibold">{item.subtitle2}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img className='w-4 h-4' src={item.discountImg} alt="" />
                    <p className='text-sm text-[#c34482]'>{item.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default BestSelling
