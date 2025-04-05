import React, { useEffect, useState } from "react";
import CardHomePage from "../components/CardHomePage";
import axios from "axios";
import { Link } from "react-router";
import Nav from "@/components/Nav";



const HomePage = () => {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // שליפה של 10 הפוקימונים הראשונים
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
        
        // שליחה של בקשות לכל הפוקימונים בצורה אסינכרונית
        const pokemonDetails = await Promise.all(
          response.data.results.map(pokemon => 
            axios.get(pokemon.url).then(res => ({
              name: res.data.name,
              image: res.data.sprites.other.dream_world.front_default,
              id:res.data.id,
              // ability:res.data.abilities[0].ability.name
              type:res.data.types[0].type.name
            }))
          )
        );
        
        setData(pokemonDetails); // עדכון ה-state עם המידע המלא
        setLoading(false); // סיום טעינה
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // סיום טעינה במקרה של שגיאה
      }
    };

    fetchData();
  }, []);

  

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-10 max-w-[1100px] mx-auto flex flex-col gap-6">
      <Nav />
      <div>
        {data.map((pokemon) => (
        <Link key={pokemon.id} to={`/${pokemon.id}`}><CardHomePage data={data} /></Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
