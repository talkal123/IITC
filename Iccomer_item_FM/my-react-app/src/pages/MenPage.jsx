import { useState, useEffect } from "react";
import Item from "../components/Item";
import ItemDetails from "../components/ItemDetails";
import axios from "axios";
import CardItemHomePage from "../components/CardItemHomePage";
import { Button } from "@/components/ui/button"

const MenPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("mens-shoes")

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // עדכון הקטגוריה לפי הבחירה ב-select
  };

  return (
    <>
      <div>
        <label for="select-option">Choose an option:</label>
        <select id="select-option" value={category} onChange={handleCategoryChange}>
          <option value="mens-shirts">men-shirts</option>
          <option value="mens-watches">men-watches</option>
          <option value="mens-shoes">mens-shoes</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {products.map((products) => (
          <CardItemHomePage products={products} />
        ))}
      </div>
    </>
  );
};

export default MenPage;
