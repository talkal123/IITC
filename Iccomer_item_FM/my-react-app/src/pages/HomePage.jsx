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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Footer from "@/components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const imageUrl = "https://images.unsplash.com/photo-1612415231093-b4398fd0c1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHN0eWxlfGVufDB8fDB8fHww";

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
      delay: 100, 
      offset: 250, 
    });
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
      <div className="p-2 flex flex-col gap-12 mt-28" data-aos="slide-left">
        <h1 className="font-bold text-3xl">Todays Best Deals for you!</h1>
        <ScrollArea className="w-full pb-6">
        <div className="grid grid-cols-1 gap-5 md:flex">
          {products.slice(0, 8).map((products) => (
            <CardItemHomePage products={products} />
          ))}
        </div>
        <ScrollBar orientation="horizontal"/>
        </ScrollArea>
      </div>
      <ChooseByBrand />
      <GetUpto />
      <div className="p-2 flex flex-col gap-12 mt-28" data-aos="zoom-out">
        <h1 className="font-bold text-3xl">Weekly Popular Products</h1>
        <ScrollArea className="w-full pb-6">
        <div className="grid grid-cols-1 gap-5 md:flex">
          {products.slice(9, 17).map((products) => (
            <CardItemHomePage products={products} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <HomePicture />
      <TodaysBestDeals />
      <Cards />
      <MostSelling products={products}/>
      <TrendingProducts />
      <BestSelling />
      <ServicesToHelp />
      <Footer />
    </div>
  );
};

export default HomePage;
