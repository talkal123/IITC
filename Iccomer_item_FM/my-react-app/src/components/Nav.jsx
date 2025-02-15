import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="p-8 border-b-2 flex justify-between">
      <div className="flex gap-10">
        <div>
          <h1 className="font-bold text-3xl">Sneakers</h1>
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
        <div>cart</div>
        <div className="border rounded-full h-8 w-8"></div>
      </div>
    </div>
  );
};

export default Nav;
