import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Link } from "react-router-dom";
import DeliveryInformation from "./CartComponents/DeliveryInformation";
import OrderSummery from "./CartComponents/OrderSummery";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [cartDetails, setCartDetails] = useState("");
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  console.log(cart);

  const handleClick = () => {
    const productsTitleCart = cart.map((item) => item.title).join(", ");
    const productsBrandCart = cart.map((item) => item.brand).join(", ");
    const productsAmountCart = cart.map((item) => item.amount).join(", ");
    const productsPriceCart = price;

    setCartDetails({
      titles: productsTitleCart,
      brands: productsBrandCart,
      amounts: productsAmountCart,
      totalPrice: Math.round(productsPriceCart),
    });

    setIsPurchaseSuccessful(true);
  };

  const continueBtn = () => {
    setTimeout(() => {
      setCart([]);
    }, 1000); 
  }

  return (
    <div className="p-5 flex flex-col md:flex-row justify-between gap-4">
  <div className="flex flex-col gap-5">
    <DeliveryInformation />
    <OrderSummery />
  </div> 
      <article className="border w-[300px] rounded-lg">
        {cart.map((item) => (
          <div className="border-b p-4" key={item.id}>
            <div className="flex items-center space-x-2">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
              <p className="font-semibold">{item.title}</p>
            </div>
            <div className="flex items-center justify-between my-2">
              <button
                onClick={() => handleChange(item, +1)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              >
                +
              </button>
              <button className="px-4 py-2 border ">{item.amount}</button>

              <button
                onClick={() => handleChange(item, -1)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
              >
                -
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-700">
                {item.price} $
              </span>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="p-4 flex flex-col gap-5 items-center">
          <div>
            {cart.length > 0 ? (
              <>
              <span>Total Price of your Cart: </span>
            <span className="font-bold text-green-700">
              {Math.round(price)} $
            </span>
            </>
            ): (
              <div>Empty Cart</div>
            )}
            
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              
                {cart.length > 0 ? (
                  <Button variant="outline" onClick={handleClick}>
              Buy Now
              </Button>
                ) : (
                  <></>
                )}
              
            </AlertDialogTrigger>
            <AlertDialogContent
              className={`${
                isPurchaseSuccessful
                  ? "animate-slide-in-from-top bg-gray-100 w-full"
                  : "bg-white"
              } transition-all duration-500 ease-out overflow-y-auto`}
            >
              <AlertDialogHeader className="z-10 relative">
                <AlertDialogTitle>Your order has been accepted</AlertDialogTitle>
                <AlertDialogDescription>
                  {cart.length > 0 ? (
                    <>
                      <pre>
                        <span className="font-bold">Name:</span>{" "}
                        {cartDetails.titles}
                      </pre>
                      <pre>
                        <span className="font-bold">Brand:</span>{" "}
                        {cartDetails.brands}
                      </pre>
                      <pre>
                        <span className="font-bold">Amount:</span>{" "}
                        {cartDetails.amounts + ""}
                      </pre>
                      <pre>
                        <span className="font-bold">Total Price:</span>{" "}
                        {cartDetails.totalPrice + " $"}
                      </pre>
                    </>
                  ) : (
                    <p>No result</p>
                  )}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Link to="/" onClick={continueBtn}>Continue Shopping</Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </article>
    </div>
  );
};

export default Cart;
