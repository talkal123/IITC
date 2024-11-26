import React, { useEffect, useState, BrowserRouter, Route, Routes } from "react";
import axios from 'axios'



import { getAllPokemon, getPokemon } from "./copmponents/pokemon.jsx";
import NavBar from "./copmponents/NavBar/NavBar.jsx";
import Card from './copmponents/Card/Card.jsx'

function App() {
    const [_pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true)
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon/';

    useEffect(() => {
      async function fetchData() {
        let response = await getAllPokemon(initialUrl);
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        await loadingPokemon(response.results);
        setLoading(false);
      }
      fetchData();
    }, []);

    const next = async () => {
      setLoading(true);
      let data = await getAllPokemon(nextUrl)
      await loadingPokemon(data.results)
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);

    }

    const prev = async () => {
      if (!prevUrl) return;
      setLoading(true);
      let data = await getAllPokemon(prevUrl)
      await loadingPokemon(data.results)
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);

    }


    const loadingPokemon = async data => {
      let _pokemonData = await Promise.all(
        data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord
      })
    );

      setPokemonData(_pokemonData);
    };

    return (
      
      <div>
        {
        loading ? <h1>Loading...</h1> : (
        <>
        <NavBar />
        <div className="btn">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
          <div className="grid-container">
            {_pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon}></Card>
            })}
          </div>
          <div className="btn">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
        
        </>
        )
      }
      </div>
    )   
}

export default App;














