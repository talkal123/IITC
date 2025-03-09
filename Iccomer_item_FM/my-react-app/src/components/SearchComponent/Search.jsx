import React, { use, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')
  const [isDisplay, setIsDisplay] = useState(false);

  const handleChange = (e) => {
    setIsDisplay(prevState => !prevState)

    setSearch(e.target.value)
  }

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="relative">
  <Input onChange={handleChange} value={search} placeholder="Search products..." />

  {isDisplay === true && (
    <div className="bg-white z-20 absolute w-full rounded-lg mt-2 max-h-60 overflow-y-auto">
      {products
        .filter((item) => {
          return search.toLowerCase() === ''
            ? item
            : item.title.toLowerCase().includes(search);
        })
        .map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div className="p-2 hover:bg-gray-200 cursor-pointer flex gap-5">
              <div>
                <img src={item.images[0]} alt={item.title} className="w-12" />
              </div>
              <div>
                <div>{item.title}</div>
                <div className="text-sm text-gray-500">{item.brand}</div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )}
</div>

  );
};
  


export default Search
