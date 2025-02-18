import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

const Nav = ({size, setShow}) => {
  return (
    <div className="p-8 border-b-2 flex justify-between">
      <div className="flex gap-10">
        <div>
          <h1 onClick={() => setShow(true)} className="font-bold text-3xl">T&C Fashion</h1>
        </div>
        <div className="mt-2">
          <ul  className="flex gap-3">
            <li className="text-gray-500">
              <Link to="/Home">Collection</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/men">Men</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/women">Women</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/about">About</Link>
            </li>
            <li className="text-gray-500">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="">
          <Link to="/cart">
            <div className="flex flex-col items-center ">
            <HiShoppingCart className="w-5 h-5" />
            <span>{size}</span>
            </div>
          </Link>
        </div>
        <div className="border rounded-full h-8 w-8"></div>
      </div>
    </div>
  );
};

export default Nav;
