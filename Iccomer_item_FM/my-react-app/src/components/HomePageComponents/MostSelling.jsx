import React from 'react'
import CardItemHomePage from '../CardItemHomePage'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MostSelling = ({products}) => {
  return (
    <div className="p-2 flex flex-col gap-12 mt-28" data-aos="slide-left">
        <h1 className="font-bold text-3xl">Weekly Popular Products</h1>
        <ScrollArea className="w-full pb-6">
        <div className="grid grid-cols-1 gap-5 md:flex">
          {products.slice(24, 30).map((products) => (
            <CardItemHomePage products={products} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
        </ ScrollArea>
      </div>
  )
}

export default MostSelling
