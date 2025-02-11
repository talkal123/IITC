import React, { useState } from "react";
import AddToCart from "./AddToCart";

const Item = ({ data }) => {

  const [cartItems, setCartItems] = useState([]);


  function handleClick(item) {

    // setCartItems((lastItems) => [...lastItems, item]);

    // let found = false;
    // for (let i = 0; i < cartItems.length; i++) {
    //   if (cartItems[i].name === item.name) {
    //     cartItems[i].quantity++;
    //     found = true;
    //   }
    //   if (found) {
    //   }
    //   console.log(i);
    //   console.log(found);
    // }

    setCartItems((prev) => {
      
    })
  }

  function handleClickMinus(item) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((i) => i.name !== item.name);
    });
  }

  return (
    <div className="border w-full p-4 grid grid-cols-2">
      <div className="grid grid-cols-3 gap-4 w-full border">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="border w-full flex flex-col items-center position relative"
          >
            <img
              src={item.image.tablet}
              className="object-contain w-full"
              alt=""
            />
            <div className="border p-2 flex flex-col gap-2 w-full">
              <p className="text-gray-400 text-sm">{item.category}</p>
              <p className="font-bold">{item.name}</p>
              <p className="font-bold text-orange-500">{item.price} $</p>
              <AddToCart
                onAdd={() => handleClick(item)}
                onMinus={() => handleClickMinus(item)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="border p-4">
        <h2 className="font-bold mb-2">Items in Cart:</h2>
        {cartItems.map((item, index) => (
          <div
            key={item.name}
            className="border-b p-2 jus flex justify-between"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <div>
                Price: {item.price} <span className="text-green-700">$</span>
              </div>
              <p>Quantity: {}</p>
            </div>
            <div
              onClick={() => handleClickMinus(item)}
              className="hover:bg-orange-300 cursor-pointer border rounded-full w-5 h-5 flex items-center justify-center"
            >
              <div>-</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
