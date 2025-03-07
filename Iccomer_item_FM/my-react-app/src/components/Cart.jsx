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
  const initialValues = {
    payment: "",
    email: "",
    CardHolder: "",
    CardNumber: "",
    expiry: "",
    CVC: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChangeOrder = (e) => {
    const { name, value,} = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values.email) {
      errors.email = "email is required! ";
    }
    if (!values.CardHolder) {
      errors.CardHolder = "CardHolder is required! ";
    } else if (/[^a-zA-Z\s]/.test(values.CardHolder)) {
      errors.CardHolder = "CardHolder can only include letters and spaces!";
    }
    if (!values.CardNumber) {
      errors.CardNumber = "CardNumber is required! ";
    } else if (!/^\d+$/.test(values.CardNumber)) {
      errors.CardNumber = "CardNumber can only contain numbers!";
    } else if (values.CardNumber.length < 10) {
      errors.CardNumber = "CardNumber must be at least 10 digits!";
    } else if (values.CardNumber.length > 10) {
      errors.CardNumber = "CardNumber can be at most 10 digits!";
    }
    if (!values.expiry) {
      errors.expiry = "expiry is required! ";
    }
    if (!values.CVC) {
      errors.CVC = "CVC is required! ";
    } else if (!/^\d+$/.test(values.CVC)) {
      errors.CVC = "CVC can only contain numbers!";
    } else if (values.CVC.length < 3) {
      errors.CVC = "CVC must be at least 3 digits!";
    } else if (values.CVC.length > 3) {
      errors.CVC = "CVC can be at most 3 digits!";
    }

    return errors;
  };

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
  };

  return (
    <div className="p-5 flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col gap-5">
        <DeliveryInformation />
        <OrderSummery
          formValues={formValues}
          formErrors={formErrors}
          isSubmit={isSubmit}
          handleChangeOrder={handleChangeOrder}
          handleSubmitOrder={handleSubmitOrder}
        />
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
            ) : (
              <div>Empty Cart</div>
            )}
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              {cart.length > 0 ? (
                <Button variant="outline" className="bg-green-900 text-white" onClick={handleClick}>
                  <p>Pay {Math.round(price)} $</p>
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
                <AlertDialogTitle>
                  Your order has been accepted
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {cart.length > 0 ? (
                    <>
                      <pre>
                        <span className="font-bold">Item:</span>{" "}
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
                      <div className="border-t-2 flex flex-col gap-2">
                        <h1 className="font-semibold">Reception:</h1>
                        <p>Name: {formValues.CardHolder}</p>
                        <p>Email: {formValues.email}</p>

                      </div>
                    </>
                  ) : (
                    <p>No result</p>
                  )}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Link to="/" onClick={continueBtn}>
                    Continue Shopping
                  </Link>
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
