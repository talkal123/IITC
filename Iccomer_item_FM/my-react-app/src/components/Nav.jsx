// import ReactDOM from "react-dom/client";
// import { Outlet, Link } from "react-router-dom";
// import { HiShoppingCart } from "react-icons/hi";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

// const Nav = ({ size, setShow }) => {
//   return (
//     <div className="p-8 border-b-2 flex justify-between">
//       <div className="flex gap-10">
//         <div>
//           <h1 onClick={() => setShow(true)} className="font-bold text-3xl">
//             T&C Fashion
//           </h1>
//         </div>
//         <div className="mt-2">
//           <ul className="flex gap-3">
//           <NavigationMenu>
//   <NavigationMenuList>
//     <NavigationMenuItem>
//       <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
//       <NavigationMenuContent>
//         <NavigationMenuLink>Link</NavigationMenuLink>
//       </NavigationMenuContent>
//     </NavigationMenuItem>
//   </NavigationMenuList>
// </NavigationMenu>

//             <li className="text-gray-500">
//               <Link to="/">Collection</Link>
//             </li>
//             <li className="text-gray-500">
//               <Link to="/men">Men</Link>
//             </li>
//             <li className="text-gray-500">
//               <Link to="/decoration">Home</Link>
//             </li>
//             <li className="text-gray-500">
//               <Link to="/women">Women</Link>
//             </li>
//             <li className="text-gray-500">
//               <Link to="/about">About</Link>
//             </li>
//             <li className="text-gray-500">
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex items-center gap-5">
//         <div className="">
//           <Link to="/cart">
//             <div className="flex flex-col items-center ">
//               <HiShoppingCart className="w-5 h-5" />
//               <span>{size}</span>
//             </div>
//           </Link>
//         </div>
//         <div>
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>CN</AvatarFallback>
//           </Avatar>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import ReactDOM from "react-dom/client";
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

const Nav = ({ size, setShow }) => {
  return (
    <div className="p-8 border-b-2 flex justify-between">
      <div className="flex gap-10">
        <div>
          <h1 onClick={() => setShow(true)} className="font-bold text-3xl">
            T&C Fashion
          </h1>
        </div>
        <div className="mt-2">
          <ul className="flex gap-3">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <li className="text-gray-500">
                        <Link to="/">Collection</Link>
                      </li>
                      <li className="text-gray-500">
                        <Link to="/men">Men</Link>
                      </li>
                      <li className="text-gray-500">
                        <Link to="/decoration">Home</Link>
                      </li>
                      <li className="text-gray-500">
                        <Link to="/women">Women</Link>
                      </li>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <li className="text-gray-500 mt-2">
              <Link to="/about">About</Link>
            </li>
            <li className="text-gray-500 mt-2">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="">
          <Link to="/cart">
            <div className="flex flex-col-reverse items-center ">
              <HiShoppingCart className="w-5 h-5" />
              {size > 0 ? (
                <div className="rounded-full bg-green-900 pr-2 pl-2"><span className="text-white">{size}</span></div>

              ): (
                <span>{size}</span>
              )}
            </div>
          </Link>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Nav;
