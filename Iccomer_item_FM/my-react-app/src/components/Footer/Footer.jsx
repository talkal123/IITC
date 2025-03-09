import React from "react";
import TC from "../../assets/T.png";

const Footer = () => {
  return (
    <footer className="border-t-2 p-5 flex">
      <div className="flex flex-col gap-10  max-w-96 p-5">
        <div>
          <img src={TC} alt="" className="w-full" />
        </div>
        <div className="flex flex-col">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.
        </div>

        <div className="flex items-center justify-around ">
          <div className="border-2 mr-2 rounded-lg p-3 max-h-16 flex items-center">
            <img
              src="data:image/png;base64,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"
              alt="MasterCard"
            />
          </div>

          <div className="border-2 mr-2 rounded-lg p-3 max-h-16 flex items-center">
            <img
              src="data:image/png;base64,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"
              alt="Visa"
            />
          </div>

          <div className="border-2 mr-2 rounded-lg p-3 max-h-16 flex items-center">
            <img
              src="data:image/png;base64,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"
              alt="Discover"
            />
          </div>

          <div className="border-2 mr-2 rounded-lg p-3 max-h-16 flex items-center">
            <img
              src="data:image/png;base64,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"
              alt="American Express"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-4 w-full p-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Department</h3>
          <ul className="flex flex-col gap-1">
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Fashion
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Education Product
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Frozen Food
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Beverages
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Organic Grocery
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Office Supplies
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Beauty Products
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Books
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Electronics & Gadget
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Travel Accessories
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Fitness
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Sneakers
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Toys
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Furniture
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">About us</h3>
          <ul className="flex flex-col gap-1">
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              About shopcart
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Careers
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              News & Blog
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Services</h3>
          <ul className="flex flex-col gap-1">
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Gift Card
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Mobile App
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Shipping & Delivery
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Order Pickup
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Account Signup
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Help</h3>
          <ul className="flex flex-col gap-1">
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Shopcart Help
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Returns
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Track orders
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Contact us
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Feedback
            </li>
            <li className="relative hover:text-red-400 hover:translate-x-4 transition-all duration-300 cursor-pointer">
              Security & Fraud
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
