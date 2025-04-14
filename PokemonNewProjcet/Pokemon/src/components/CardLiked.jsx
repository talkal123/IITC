import React, { useState } from 'react'
import { Card, CardTitle } from './ui/card'
import { Badge } from './ui/badge';
import pokeball from "../assets/pokeball.png"
import typeColors from '@/helpers/pokemonTypes';


const CardLiked = ({ likedPokemons }) => {
  // מוודאים שיש מערך של פוקימונים לפני שמבצעים פעולה
  if (!likedPokemons || likedPokemons.length === 0) {
    return <div>No Pokemons...</div>; // מוודא שלא ניגשים לנתונים של null או מערך ריק
  }

  return (
    <>
      {likedPokemons.map((pokemon) => {
        // לחשב את הצבע רקע עבור כל פוקימון לפי סוגו
        const backgroundColor = typeColors[pokemon.type.toLowerCase()] || "#fff";

        return (
          <Card
            key={pokemon.id} // הוסף מפתח לכל כרטיס
            className="min-h-[400px] min-w-[300px] p-5 shadow-2xl"
            style={{
              backgroundColor: backgroundColor,
              backgroundImage: `url(${pokeball})`,
              backgroundSize: '80px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right'
            }}
          >
            <div className="flex justify-between">
              <h3 className="font-bold text-white text-xl">{pokemon.name}</h3>
            </div>
            <div className="grid grid-cols-2 items-center gap-10">
              <div className="flex flex-col gap-2">
                <div className="text-white rounded-lg text-center bg-white/20">
                  # {pokemon.id}
                </div>
                <div className="text-white rounded-lg p-0.5 text-center bg-white/20">
                  {pokemon.type}
                </div>
              </div>
              <div>
                {/* תמונה של הפוקימון */}
                <img src={pokemon.image} className="" alt={pokemon.name} />
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
};
export default CardLiked;
