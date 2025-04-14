import React, { useEffect, useState } from "react";
import CardHomePage from "../components/CardHomePage";
import axios from "axios";
import { Link } from "react-router";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import Filters from "@/components/Filters";
import NavHome from "@/components/NavHome";



const HomePage = () => {
  const [data,setData] = useState([])
  const [dataAll,setDataAll] = useState([])
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null); // כתובת ה-URL של הדף הבא
  const [prevPage, setPrevPage] = useState(null); // כתובת ה-URL של הדף הקודם


  const fetchData = async (url) => {
    try {
      setLoading(true); // התחלת טעינה

      const response = await axios.get(url);

      // שליחה של בקשות לכל הפוקימונים בצורה אסינכרונית
      const pokemonDetails = await Promise.all(
        response.data.results.map(pokemon =>
          axios.get(pokemon.url).then(res => ({
            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
            id: res.data.id,
            type: res.data.types[0].type.name
          }))
        )
      );

      setData(pokemonDetails); // עדכון ה-state עם המידע המלא
      setNextPage(response.data.next); // עדכון עם ה-URL של הדף הבא
      setPrevPage(response.data.previous); // עדכון עם ה-URL של הדף הקודם
      setLoading(false); // סיום טעינה
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // סיום טעינה במקרה של שגיאה
    }
  };



  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=10"); // קריאה ראשונית
  }, []); // הפעלת הפונקציה רק בהתחלה
  

  const fetchDataTwo = async (url) => {
    try {

      const response = await axios.get(url);

      // שליחה של בקשות לכל הפוקימונים בצורה אסינכרונית
      const pokemonDetails = await Promise.all(
        response.data.results.map(pokemon =>
          axios.get(pokemon.url).then(res => ({
            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
            id: res.data.id,
            type: res.data.types[0].type.name
          }))
        )
      );

      setDataAll(pokemonDetails); // עדכון ה-state עם המידע המלא
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataTwo("https://pokeapi.co/api/v2/pokemon?limit=150"); // קריאה ראשונית כשהקומפוננטה טוענת
  }, []); // הפעלת הפונקציה רק בהתחלה




  const filterPokemons = (type) => {
    if (!type) {
      setFilteredData(data);
      return;
    }
       // אם לא נבחר סוג, הצג את כל הפוקימונים
    
      const filtered  = data.filter((pokemon) =>
        pokemon.types?.some((t) => t.type.name === type) // מסנן לפי סוג
      );
      setData(filtered);
  };

  if (loading) return <div>Loading...</div>;

  
  return (
    <div className="p-10 max-w-[1100px] mx-auto flex flex-col gap-6">
      <NavHome  dataAll={dataAll}/>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
      {data.map((pokemon) => (
          <Link key={pokemon.id} to={`/${pokemon.id}`}>
            <CardHomePage data={pokemon} />
          </Link>
        ))}
      </div>
      <div className="flex gap-2 items-center justify-center mt-5">
        <Button onClick={() => fetchData(prevPage)} className="cursor-pointer hover:bg-blue-500 text-white">Back</Button>
        <Button onClick={() => fetchData(nextPage)} className="cursor-pointer hover:bg-blue-500 text-white">Next</Button>
      </div>
      <div dir="rtl" className="flex flex-row-reverse mx-auto fixed bottom-4 max-w-[1100px] ">
        <Filters filterPokemons={filterPokemons}/>
      </div>
    </div>
  );
};

export default HomePage;
