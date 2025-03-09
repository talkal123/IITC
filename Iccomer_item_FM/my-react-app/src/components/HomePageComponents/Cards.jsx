import React from 'react'
import { Button } from '../ui/button'
import Card from "../../assets/Cards.png"
import CardsRed from "../../assets/CardsRed.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Cards = () => {
  return (
    <div className='w-full bg-[#ffe6cc] p-24 flex justify-between gap-5 mt-28' data-aos="slide-right">
        <div className='flex flex-col gap-5'>
            <h1 className='text-5xl font-bold'>Get 5% Cash back</h1>
            <p className='text-lg'>On Shopcart.com</p>
            <Button className="hover:bg-green-900 max-w-[135px] rounded-full pr-8 pl-8 p-6">Learn More</Button>
        </div>
        <div className='hidden md:flex flex-col relative '>
            <img className='transform rotate-[-35deg]' src={Card} alt="" />
            <img className='absolute top-0 transform rotate-[-30deg]' src={CardsRed} alt="" />
            <img className='absolute top-5 transform rotate-[-25deg]' src={Card} alt="" />
        </div>
    </div>
  )
}

export default Cards
