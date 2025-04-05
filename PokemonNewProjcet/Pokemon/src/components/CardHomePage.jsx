import React from 'react'
import { Card, CardTitle } from './ui/card'
import { Badge } from './ui/badge';
import pokeball from "../assets/pokeball.png"
import typeColors from '@/helpers/pokemonTypes';


const CardHomePage = ({data}) => {

  return (
    <div className="grid grid-cols-2 gap-6">
    {data.map((poke, index) =>{
    const backgroundColor = typeColors[poke.type.toLowerCase()] || '#fff'; // צבען רקע לפי סוג הפוקימון
    return (
    <Card key={index} className="p-5 shadow-2xl" style={{backgroundColor: backgroundColor,backgroundImage: `url(${pokeball})`, backgroundSize: '80px',backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
      <div>
        <h3 className='font-bold text-white text-xl'>{poke.name}</h3>
      </div>
      <div className='grid grid-cols-2 items-center gap-10'>
        <div className='flex flex-col gap-2'>
          <div className="text-white rounded-lg max-w-20 p-0.5 text-center bg-white/20"># {poke.id}</div>
          <div className="text-white rounded-lg max-w-20 p-0.5 text-center bg-white/20">{poke.type}</div>
        </div>
        <div>
          <img src={poke.image} className='' alt="" />
        </div>
      </div>
    </Card>
    );
  })}
    
    </div>
  )
}

export default CardHomePage
