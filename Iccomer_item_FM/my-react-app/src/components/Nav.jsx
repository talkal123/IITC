import ReactDOM from "react-dom/client";
import Chair from "../assets/chair.png";
import { Outlet, Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import TC from "../assets/T.png";
import Search from "./SearchComponent/Search";
import { IoIosHome } from "react-icons/io";

const Nav = ({ size, setShow }) => {
  return (
    <div className="p-8 border-b-2 flex justify-between">
      <div className="flex gap-0 md:gap-5">
        <div>
          <Link to="/">
            <div onClick={() => setShow(true)} className="font-bold text-3xl">
              <div className="flex items-center">
                <div className="block md:hidden">
                  <IoIosHome className="w-6 mt-1"/>
                </div>

                <img src={TC} alt="" className="w-32 hidden md:block" />
              </div>{" "}
            </div>
          </Link>
        </div>
        <div className="">
          <ul className="flex gap-3 mt-0 sm:mt-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="mr-1">Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-10 border-b-2">
                      <h1 className="font-semibold">Popular Categories</h1>
                    </div>
                    <div className="flex flex-col p-6 gap-10 md:flex-row">
                      <div className="flex flex-col gap-5">
                        <div>
                          <Link to="/men">
                            <div className="flex items-center gap-3 p-5 hover:bg-gray-200">
                              <div className="w-10 h-10">
                                <img
                                  src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png"
                                  alt=""
                                  className="w-full h-auto"
                                />
                              </div>
                              <div>
                                <span className="text-gray-500">Men</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="flex flex-col gap-5">
                        <div>
                          <Link to="/decoration">
                            <div className="flex items-center gap-3 p-5 hover:bg-gray-200">
                              <div className="w-10 h-10 flex">
                                <img
                                  src={Chair}
                                  alt=""
                                  className="w-full h-auto"
                                />
                              </div>
                              <div>
                                <span className="text-gray-500">Home</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-col gap-5">
                          <div>
                            <Link to="/women">
                              <div className="flex items-center gap-3 p-5 hover:bg-gray-200">
                                <div className="w-10 h-10">
                                  <img
                                    src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png"
                                    alt=""
                                    className="w-full h-auto"
                                  />
                                </div>
                                <div>
                                  <span className="text-gray-500">Women</span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="hidden md:flex gap-4 ">
              <li className="text-gray-500 mt-2">
                <Link to="/about">About</Link>
              </li>
              <li className="text-gray-500 mt-2">
                <Link to="/contact">Contact</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-5">
        <div>
          <Search />
        </div>
        <div className="">
          <Link to="/cart">
            <div className="flex flex-col-reverse items-center ">
              <HiShoppingCart className="w-5 h-5" />
              {size > 0 ? (
                <div className="rounded-full bg-green-900 pr-2 pl-2">
                  <span className="text-white">{size}</span>
                </div>
              ) : (
                <span>{size}</span>
              )}
            </div>
          </Link>
        </div>
        <div>
          <Link to="/account">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
