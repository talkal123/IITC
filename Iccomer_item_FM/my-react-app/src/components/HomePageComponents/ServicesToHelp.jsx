import React from 'react'


const ServicesToHelp = () => {
    const arr = [
        {
          img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png",
          title: "Frequently asked questions",
          subtitle: "Updates on safe Shopping in our Stores",
        },
        {
          img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png",
          title: "Online Payment Process",
          subtitle: "Updates on safe Shopping in our Stores",
        },
        {
          img: "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png",
          title: "Home Delivery Options",
          subtitle: "Updates on safe Shopping in our Stores",
        },
    ]
  return (
    <div className="p-5 flex flex-col gap-12 mt-28" >
        <h1 className="font-bold text-3xl">Trending Products for you!</h1>
        <div className="md:grid grid-cols-3 w-full gap-5">
          {arr.map((item) => (
            <div className="rounded-lg overflow-hidden flex flex-col-reverse mb-5">
              <div className="overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" alt="" />
              </div>
              <div className="md:h-1/2 p-10 flex flex-col gap-5 bg-[#aaaaaa29]">
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p className="font-semibold">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
  )
}

export default ServicesToHelp
