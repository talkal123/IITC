import React from "react";
import { currencyFormat } from "../utils";
import { IoIosTrendingDown } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  console.log(coin);

  return (
    <Link to={`/coin/${coin.id}`}>
    <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
      <div className=" flex items-center gap-1 w-full">
        <img className="w-6" src={coin.image} alt="" />
        <p>{coin.name}</p>
        <small className="text-xs">({coin.symbol})</small>
      </div>
      <span className="w-full text-center flex items-center">
        {currencyFormat(coin.current_price)}
      </span>
      <span
        className={`flex gap-2 items-center ${
          coin.price_change_percentage_24h < 0
            ? "text-red-400"
            : "text-green-400"
        }`}
      >
        {coin.price_change_percentage_24h < 0 ? <IoIosTrendingDown  className="w-4 h-4"/> : <IoIosTrendingUp  className="w-4 h-4"/> }
        {coin.price_change_percentage_24h}
      </span>
      <div className="hidden sm:block">
        <p className="font-semibold">Market Cap</p>
        <span>{currencyFormat(coin.market_cap)}</span>

      </div>
    </div>
    </Link>
  );
};

export default Coin;
