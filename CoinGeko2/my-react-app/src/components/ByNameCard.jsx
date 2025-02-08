import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { Link } from "react-router-dom";

const ByNameCard = ({ coin }) => {

  return (
        <Link to={`/coin/${coin.id}`}>
        <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
          <div className=" flex items-center gap-1 w-full">
            <img className="w-6" src={coin.image} alt="" />
            <p>{coin.name}</p>
            <small className="text-xs">({coin.symbol})</small>
          </div>
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
    
          </div>
        </div>
        </Link>
  );
};

export default ByNameCard;
