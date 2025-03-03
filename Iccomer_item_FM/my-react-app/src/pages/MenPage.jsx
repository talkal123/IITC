import { useState, useEffect } from "react";
import Item from "../components/Item";
import ItemDetails from "../components/ItemDetails";
import axios from "axios";
import CardItemHomePage from "../components/CardItemHomePage";
import { Button } from "@/components/ui/button"
import HeaderPhoto from "@/components/HeaderPhoto";
import ServicesToHelp from "@/components/HomePageComponents/ServicesToHelp";
import Footer from "@/components/Footer/Footer";

const MenPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("mens-shoes")
  const [priceRange, setPriceRange] = useState("all");
  // const [brand, setBrand] = useState("all");

  // console.log(brand);
  

  useEffect(() => {
    getItems();
  }, [category,priceRange]);

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); 
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value); 
  };

  // const handleBrandChange = (e) => {
  //   setBrand(e.target.value); 
  // };

  return (
    <>
      <div>
        <HeaderPhoto image="https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0eWxlJTIwbWVufGVufDB8fDB8fHww" title={"shopping and department store."} paragraph={"Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance."}/>
        <div className="flex flex-col gap-12 p-5">
        <div className="mt-24 flex gap-2">
        <select id="select-option" value={category} onChange={handleCategoryChange} className="border p-2 rounded-full bg-gray-100">
          <option value="mens-shirts">Men-Shirts</option>
          <option value="mens-watches">Men-Watches</option>
          <option value="mens-shoes">Mens-shoes</option>
        </select>

         <select id="select-price-range" value={priceRange} onChange={handlePriceRangeChange} className="border p-2 rounded-full bg-gray-100">
            <option value="all">All prices</option>
            <option value="under-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
          </select> 
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {products.filter(product => {
          if (priceRange === "under-50") return product.price < 50;
          if (priceRange === "50-100") return product.price >= 50 && product.price <= 100;
          if (priceRange === "100-200") return product.price >= 100 && product.price <= 200;
          if (priceRange === "all") return true;
           
        }).length === 0 ? (
          <p>No results found</p> 
        ) : products
        .map((products) => (
          <CardItemHomePage products={products} />
        ))}
      </div>
      
      </div>
      <ServicesToHelp />
      </div>
      <Footer />
    </>
  );
};

export default MenPage;





