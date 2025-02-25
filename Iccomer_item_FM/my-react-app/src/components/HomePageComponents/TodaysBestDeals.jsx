import React, { useState,useEffect } from "react";
import CardItemHomePage from "../CardItemHomePage";
import axios from "axios"

const TodaysBestDeals = () => {
  const [products, setProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [category,setCategory] = useState("laptops")
  console.log(category);
  
  
  
  useEffect(() => {
    getItems();
  }, [category]);

  const getItems = () => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const arr = [
    { title: "beauty", value: "beauty" },
    { title: "fragrances", value: "fragrances" },
    { title: "home-decoration", value: "home-decoration" },
    { title: "laptops", value: "laptops" },
    { title: "mobile-accessories", value: "mobile-accessories" },
    { title: "smartphones", value: "smartphones" },
    { title: "sunglasses", value: "sunglasses" },
    { title: "tops", value: "tops" },
  ];

  function handleClick(index,value) {
    setSelectedIndex(index);
    setCategory(value)
  }

  return (
    <div className="p-5 flex flex-col gap-12 mt-28">
      <h1 className="text-3xl font-bold">Todays Best Deals for you!</h1>
      <div className="inline md:flex">
  {arr.map((item, index) => (
    <button
      key={index}
      value={item.value}
      onClick={() => handleClick(index, item.value)}
      className={`border rounded-full pr-6 pl-6 font-semibold 
                  ${selectedIndex === index ? "bg-green-900 text-white" : "bg-white text-black"} 
                  mr-2 mt-2`}  
    >
      {item.title}
    </button>
  ))}
</div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {products.slice(0,6).map((products) => (
          <CardItemHomePage products={products} /> 
        ))}
      </div>
    </div>
  );
};

export default TodaysBestDeals;
