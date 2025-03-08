import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetUpto = () => {
  const arr = [
    {
      bgColor: "yellow-300",
      color: "yellow-300",
      title: "Save",
      price: "$100",
      subtitle: "Explore Our Furniture & Home Furnishing Range",
      img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png",
    },
    {
      bgColor: "red-300",
      color: "red-300",
      title: "Save",
      price: "$29",
      subtitle: "Explore Our Furniture & Home Furnishing Range",
      img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png",
    },
    {
      bgColor: "green-300",
      color: "green-300",
      title: "Save",
      price: "$67",
      subtitle: "Explore Our Furniture & Home Furnishing Range",
      img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png",
    },
    {
      bgColor: "sky-200",
      color: "sky-200",
      title: "Save",
      price: "$59",
      subtitle: "Explore Our Furniture & Home Furnishing Range",
      img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png",
    },
  ];
  return (
    <div className="p-5 flex flex-col gap-12 mt-28" data-aos="zoom-out">
        <h1 className="font-bold text-3xl">Get Up to 70% off</h1>
    <div className="gap-2 grid grid-cols-2 md:flex">
      {arr.map((item, index) => (
        <div className="">
          <div
            className={`50% border rounded-lg p-8 flex flex-col bg-[#f2e4d9]`}
            style={{ backgroundColor: item.bgColor }}
          >
            <h1
              className={`text-2xl font-bold`}
              style={{ backgroundColor: item.color }}
            >
              {item.title}
            </h1>
            <h1 className={`text-4xl font-bold`}>
                {item.price}
            </h1>
            <p className="font-bold text-xs">{item.subtitle}</p>
          </div>
          <div className="group border overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              src={item.img}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default GetUpto;
