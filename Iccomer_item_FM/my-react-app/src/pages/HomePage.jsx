import { useState, useEffect } from "react";
import Item from "../components/Item";
import ItemDetails from "../components/ItemDetails";
import axios from "axios";
import CardItemHomePage from "../components/CardItemHomePage";
import HeaderPhoto from "@/components/HeaderPhoto";
import ShopOurTop from "@/components/HomePageComponents/ShopOurTop";
import ChooseByBrand from "@/components/HomePageComponents/ChooseByBrand";
import GetUpto from "@/components/HomePageComponents/GetUpto";
import HomePicture from "@/components/HomePageComponents/HomePicture";
import TodaysBestDeals from "@/components/HomePageComponents/TodaysBestDeals";

const HomePage = () => {
  const [products, setProducts] = useState([]);

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
    <>
      <HeaderPhoto />
      <ShopOurTop />
      <div className="p-16 flex flex-col gap-12">
        <h1 className="font-bold text-2xl">Todays Best Deals for you!</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.slice(0, 3).map((products) => (
            <CardItemHomePage products={products} />
          ))}
        </div>
      </div>
      <ChooseByBrand />
      <GetUpto />
      <div className="p-16 flex flex-col gap-12">
        <h1 className="font-bold text-2xl">Weekly Popular Products</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.slice(4, 7).map((products) => (
            <CardItemHomePage products={products} />
          ))}
        </div>
      </div>
      <HomePicture />
      <TodaysBestDeals />
    </>
  );
};

export default HomePage;
