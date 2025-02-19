import { useState, useEffect } from "react";
import Item from "../components/Item";
import ItemDetails from "../components/ItemDetails";
import axios from "axios";
import CardItemHomePage from "../components/CardItemHomePage";

const WomenPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("womens-bags")

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
      <div className="flex flex-col">
        <label for="select-option">Choose an option:</label>
        <select id="select-option" value={category} onChange={handleCategoryChange}>
          <option value="womens-bags">womens-bags</option>
          <option value="womens-dresses">womens-dresses</option>
          <option value="womens-jewellery">mens-shoes</option>
          <option value="womens-shoes">womens-shoes</option>
          <option value="womens-watches">womens-watches</option>
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

export default WomenPage;
