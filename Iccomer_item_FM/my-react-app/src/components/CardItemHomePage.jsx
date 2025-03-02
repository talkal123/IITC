import React from "react";
import { Link } from "react-router-dom";
import Star from "../assets/Star.png";
import { Button } from "./ui/button";

const CardItemHomePage = ({ products }) => {
  if (!products || !products.images || products.images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="border rounded-lg shadow-md min-h-[405px] min-w-[380px] flex flex-col group overflow-hidden">
        {products.images.length > 0 ? (
          <div className="relative w-full h-48 overflow-hidden">
            <img
              src={products.images[0]}
              alt={products.title}
              className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-300 bg-[#aaaaaa29]"
            />
          </div>
        ) : (
          <div className="w-full h-24 bg-gray-200"></div>
        )}
        <div className="p-2 md:p-4">
          <h3 className="text-lg font-semibold mt-2 h-16 overflow-hidden text-ellipsis whitespace-nowrap">
            {products.title}
          </h3>
          <div className="flex gap-1 items-center">
            {Array(Math.round(products.rating))
              .fill(0)
              .map((_, index) => (
                <img key={index} src={Star} className="w-4 h-4" />
              ))}
            <span>({Math.round(products.rating)})</span>
          </div>
          <p className="text-gray-500">{products.brand}</p>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-green-500 mt-2">
              ${products.price}
            </p>
            {/* <Link to={`/product/${products.id}`}><button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">View Details</button></Link> */}
            <Link to={`/product/${products.id}`}>
              <Button
                variant="outline"
                className=" md:hover:bg-green-900 hover:text-white "
              >
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemHomePage;
