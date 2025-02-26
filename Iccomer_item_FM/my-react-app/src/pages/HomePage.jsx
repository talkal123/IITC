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
import Cards from "@/components/HomePageComponents/Cards";
import MostSelling from "@/components/HomePageComponents/MostSelling";
import TrendingProducts from "@/components/HomePageComponents/TrendingProducts";
import BestSelling from "@/components/HomePageComponents/BestSelling";
import ServicesToHelp from "@/components/HomePageComponents/ServicesToHelp";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const imageUrl = "https://images.unsplash.com/photo-1612415231093-b4398fd0c1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHN0eWxlfGVufDB8fDB8fHww";

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
    <div>
      <HeaderPhoto image={imageUrl} title={"shopping and department store."} paragraph={"Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance."}/>
      <ShopOurTop />
      <div className="p-5 flex flex-col gap-12 mt-28">
        <h1 className="font-bold text-3xl">Todays Best Deals for you!</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.slice(0, 3).map((products) => (
            <CardItemHomePage products={products} />
          ))}
        </div>
      </div>
      <ChooseByBrand />
      <GetUpto />
      <div className="p-5 flex flex-col gap-12 mt-28">
        <h1 className="font-bold text-3xl">Weekly Popular Products</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.slice(4, 7).map((products) => (
            <CardItemHomePage products={products} />
          ))}
        </div>
      </div>
      <HomePicture />
      <TodaysBestDeals />
      <Cards />
      <MostSelling products={products}/>
      <TrendingProducts />
      <BestSelling />
      <ServicesToHelp />
    </div>
  );
};

export default HomePage;
