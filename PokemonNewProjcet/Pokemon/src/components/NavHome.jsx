import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import axios from "axios";
import { data, Link } from "react-router";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import HomePage from "@/pages/HomePage";
import { CiHeart } from "react-icons/ci";


const NavHome = ({ dataAll }) => {
    const [search, setSearch] = useState("");
    const [isDisplay, setIsDisplay] = useState(false);

    console.log(dataAll);
    

  const handleChange = (e) => {
    setIsDisplay((prevState) => !prevState);

    setSearch(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:flex justify-between p-5">
      <div className="flex flex-col gap-2">
        <div>
          <Link to={"/"}><MdOutlineKeyboardBackspace className="w-7 h-7 cursor-pointer"/></Link>
        </div>
        <div className="font-bold text-3xl">Pokedex</div>
        
      </div>
      <div className="relative">
        <Input
          className="bg-white "
          onChange={handleChange}
          value={search}
          placeholder="Search pokemon..."
        />

        {isDisplay === true && (
          <div className="bg-white z-20 absolute w-full rounded-lg mt-2 max-h-60 overflow-y-auto">
            {dataAll
              .filter((pokemon) => {
                return search.toLowerCase() === ""
                  ? pokemon
                  : pokemon.name.toLowerCase().includes(search);
              })
              .map((pokemon) => (
                <Link to={`/${pokemon.id}`} key={pokemon.id}>
                  <div className="p-4 hover:bg-gray-100 cursor-pointer flex gap-4 rounded-lg shadow-md transition-all duration-200 ease-in-out">
                    <div className="flex-shrink-0">
                      <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex flex-col justify-center w-full max-w-[calc(100%-4rem)]">
                      <div className="font-semibold text-lg text-gray-800 truncate">
                        {pokemon.name}
                      </div>

                      {pokemon.type ? (
                        <div className="text-sm text-gray-500 truncate">
                          {pokemon.type}
                        </div>
                      ) : (
                        <p>No pokemon</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavHome;