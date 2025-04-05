import Nav from '@/components/Nav';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const PokemonById = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setPokemon(response.data)
      setLoading(false)
    })
    .catch((error) => {
      console.error("שגיאה בהבאת נתונים:", error);
      setLoading(false);
    });
  },[id])

  if (loading) {
    return <div>Loading...</div>; // מציג טקסט אם הנתונים עדיין נטענים
  }

  console.log(pokemon);
  
    
  return (
    <div className='bg-green-300 p-10 max-w-[1100px] mx-auto flex flex-col'>
      <Nav />
      <div className='border mt-5'>
        <div className='flex justify-between border p-5'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-white text-3xl'>{pokemon.name}</h1>
            <div className='flex gap-2'>
              <div className="text-white rounded-lg max-w-20 min-w-20 p-0.5 text-center bg-white/20">{pokemon.abilities[0].ability.name}</div>
              <div className="text-white rounded-lg max-w-20 min-w-20 p-0.5 text-center bg-white/20">{pokemon.types[0].type.name}</div>
            </div>
          </div>
          <div className="text-white rounded-lg p-0.5 text-center"># {pokemon.id}</div>
        </div>
        <div className='flex justify-center'>
          <img src={pokemon.sprites.other.dream_world.front_default} className='w-62' alt="" />
        </div>
      </div>
    </div>
  )
}

export default PokemonById
