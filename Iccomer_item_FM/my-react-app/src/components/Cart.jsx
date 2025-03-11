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
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import DeliveryInformation from "./CartComponents/DeliveryInformation";
import OrderSummery from "./CartComponents/OrderSummery";
import PurchaseSuccessful from "../assets/success.svg"
import Footer from "./Footer/Footer";
const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [cartDetails, setCartDetails] = useState("");
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false);
  const initialValues = {
    payment: "",
    email: "",
    Address:"",
    CardHolder: "",
    CardNumber: "",
    expiry: "",
    CVC: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const initialValuesDelivery = { firstName: "", lastName: "", email: "", address: "", city: "", zipCode: "", mobile: "" };
const [formValuesDelivery, setFormValuesDelivery] = useState(initialValuesDelivery);
const [formErrorsDelivery, setFormErrorsDelivery] = useState({});
const [isSubmitDelivery, setIsSubmitDelivery] = useState(false);

const handleChangeDelivery = (e) => {
  const { name, value } = e.target;
  setFormValuesDelivery({ ...formValuesDelivery, [name]: value });
  console.log(formValuesDelivery);
};

const handleSubmitDelivery = (e) => {
  e.preventDefault();
  setFormErrorsDelivery(validateDelivery(formValuesDelivery));
  setIsSubmitDelivery(true);
};

useEffect(() => {
  console.log(formErrorsDelivery);
  if (Object.keys(formErrorsDelivery).length === 0 && isSubmitDelivery) {
    console.log(formValuesDelivery);
  }
}, [formErrorsDelivery]);

const validateDelivery = (values) => {
  const errors = {};
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  if (!values.firstName) {
    errors.firstName = "FirstName is required! ";
  }
  if (!values.lastName) {
    errors.lastName = "LastName is required! ";
  }
  if (!values.address) {
    errors.address = "Address is required!";
  } else if (/[^a-zA-Z\s]/.test(values.address)) { 
    errors.address = "Address can only include letters and spaces!";
  }
  if (!values.city) {
    errors.city = "City is required!";
  } else if (/[^a-zA-Z\s]/.test(values.city)) { 
    errors.city = "City can only include letters and spaces!";
  }
  if (!values.zipCode) {
    errors.zipCode = "Zip Code is required!";
  } else if (!/^\d+$/.test(values.zipCode)) {
    errors.zipCode = "Zip Code can only contain numbers!";
  } else if (values.zipCode.length !== 5) {
    errors.zipCode = "Zip Code must be exactly 5 digits!";
  } else if (values.zipCode.length < 5) {
    errors.zipCode = "Zip Code is required minimum 5 Keys!";
  } else if (values.zipCode.length > 5) {
    errors.zipCode = "Zip Code is required maximum 5 Keys!";
  }
  if (!values.mobile) {
    errors.mobile = "Mobile is required!";
  } else if (!/^\d+$/.test(values.mobile)) {
    errors.mobile = "Mobile can only contain numbers!";
  } else if (values.mobile.length < 10) {
    errors.mobile = "Mobile must be at least 10 digits!";
  } else if (values.mobile.length > 10) {
    errors.mobile = "Mobile can be at most 10 digits!";
  }
  if (!values.email) {
    errors.email = "Email is required! ";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not valid email format!";
  }

  return errors;
};

const sendEmail = () => {
  const orderDetails = {
    to_email: formValues.email,  // כתובת המייל של הנמען
    from_name: formValues.CardHolder,  // שם השולח
    customerName: formValues.CardHolder,
    customerEmail: formValues.email,
    customerAddress: formValues.Address,
    totalPrice: Math.round(price),
    cartItems: cart.map((item) => item.title).join(", "),  // רשימת המוצרים
  };

  emailjs.send("service_ldx2o9d", "template_letlew7", orderDetails, "rW6lWI-oWrXpF-fYG")
    .then(
      (result) => {
        console.log("Success:", result.text);
        setIsPurchaseSuccessful(true);  
      },
      (error) => {
        console.log("Error:", error.text);
      }
    );
};


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
    if (!values.Address) {
      errors.Address = "Address is required! ";
    } else if (/[^a-zA-Z\s]/.test(values.Address)) {
      errors.Address = "Address can only include letters and spaces!";
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

    sendEmail();

    setIsPurchaseSuccessful(true);
  };

  const continueBtn = () => {
    setTimeout(() => {
      setCart([]);
    }, 1000);
  };

  return (
    <div>
    <div className="p-5 flex flex-col md:grid grid-cols-2 justify-between gap-4">
      <div className="flex flex-col gap-5">
      <article className="border rounded-lg overflow-y-auto max-h-96">
        {cart.map((item) => (
          <div className="border-b p-4" key={item.id}>
            <h1 className="font-bold text-xl">Review Item And Shipping</h1>
            <div className="flex justify-between">
            <div className="flex items-center space-x-2 ">
              <div>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-24 object-cover bg-gray-50"
                />
              </div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>{item.brand}</p>
              </div>
            </div>
            <div>
            <div className="flex items-center justify-between my-2 gap-2 ">
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
            <div className="flex flex-col justify-between items-center gap-2">
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
          
          
        </div>
      </article>
      <DeliveryInformation  
          formValuesDelivery={formValuesDelivery} 
          setFormValuesDelivery={setFormValuesDelivery}
          formErrorsDelivery={formErrorsDelivery} 
          handleChangeDelivery={handleChangeDelivery} 
          handleSubmitDelivery={handleSubmitDelivery} 
          isSubmitDelivery={isSubmitDelivery} 
        />
        </div>
      <div className="flex flex-col gap-5">
        <OrderSummery
          formValues={formValues}
          formErrors={formErrors}
          isSubmit={isSubmit}
          handleChangeOrder={handleChangeOrder}
          handleSubmitOrder={handleSubmitOrder}
          cart = {cart}
          cartDetails ={cartDetails}
          formValuesDelivery={formValuesDelivery}
          price={price}
          isPurchaseSuccessful={isPurchaseSuccessful}
          continueBtn ={continueBtn }
          handleClick ={handleClick}
        />
      </div>
    </div>
          <Footer />
          </div>

    
  );
};

export default Cart;
