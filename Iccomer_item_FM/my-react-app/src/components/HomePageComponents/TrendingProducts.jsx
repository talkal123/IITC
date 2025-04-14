import React from "react";
import { Button } from "../ui/button";
import 'aos/dist/aos.css';

const TrendingProducts = () => {
  const arr = [
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png",
      title: "Furniture Village",
      subtitle: "Delivery with in 24 hours",
    },
    {
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png",
      title: "Fashion World",
      subtitle: "Delivery with in 24 hours",
    },
  ];
  return (
    <div className="p-5 flex flex-col gap-12 mt-28" data-aos="zoom-in">
    <h1 className="text-3xl font-bold">Trending Products for you!</h1>
    <div className="grid grid-cols-2 w-full gap-5">
      {arr.map((item) => (
        <div className="rounded-lg overflow-hidden">
          <div className="overflow-hidden">
            <img src={item.img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
          </div>
          <div className=" p-10 flex flex-col gap-5 bg-[#aaaaaa29]">
            <h1 className="font-bold text-3xl">{item.title}</h1>
            <p className="font-semibold">{item.subtitle}</p>
            <Button className="text-lg hover:bg-green-900 max-w-[155px] rounded-full pr-12 pl-12 p-6">Learn More</Button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TrendingProducts;
