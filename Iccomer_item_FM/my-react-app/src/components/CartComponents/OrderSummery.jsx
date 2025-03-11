import React, { useState,useEffect,useRef } from 'react'
import { Button } from '../ui/button'
import { GoCheck } from "react-icons/go";
import emailjs from '@emailjs/browser';

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
} from "../ui/alert-dialog";
import { Link } from "react-router-dom";
import PurchaseSuccessful from "../../assets/success.svg"



const OrderSummery = ({handleClick,cart,cartDetails,formValuesDelivery,price,isPurchaseSuccessful,continueBtn, formValues, formErrors, handleChangeOrder, handleSubmitOrder,isSubmit }) => {
  


  return (
    <div className='border p-5 flex flex-col gap-6 rounded-lg'>
      <h1 className='text-2xl font-semibold border-b-2 p-2'>Order Summery</h1>
      <form onSubmit={handleSubmitOrder} className='flex flex-col gap-5'>
        <h1 className='text-xl font-semibold border-b-2 p-2'>Payment</h1>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-3'>
            <input type="checkbox" checked name='cash' value="cash" className='w-4 h-4 rounded-fu' />
            <h1>Cash on Delivery</h1>
          </div>
          <div className='flex items-center gap-3'>
            <input type="checkbox" checked name='shopcart' value="shopcart" className='w-4 h-4 rounded-fu' />
            <h1>Shopcart Card</h1>
          </div>
          <div className='flex items-center gap-3'>
            <input type="checkbox" checked name='paypal' value="paypal" className='w-4 h-4 rounded-fu' />
            <h1>Paypal</h1>
          </div>
          <div className='flex items-center gap-3'>
            <input type="checkbox" checked name='credit' value="credit" className='w-4 h-4 rounded-fu' />
            <h1>Credit or Debit card</h1>
          </div>
          <div className='flex items-center gap-3'>
            <img src="data:image/png;base64,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" className='w-13 h-10  p-2 bg-gray-100' alt="" />
            <img src="data:image/png;base64,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" className='w-13 h-10   p-2 bg-gray-100' alt="" />
            <img src="data:image/png;base64,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" className='w-13 h-10   p-2 bg-gray-100' alt="" />
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Email*</h1>
            <input onChange={handleChangeOrder} type="text" value={formValues.email} name='email' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'> {formErrors.email}</p>
          </div>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Address*</h1>
            <input onChange={handleChangeOrder} type="text" value={formValues.Address} name='Address' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'> {formErrors.Address}</p>
          </div>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Card Holder Name*</h1>
            <input onChange={handleChangeOrder} type="text" value={formValues.CardHolder} name='CardHolder' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'> {formErrors.CardHolder}</p>
          </div>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Card Number*</h1>
            <input onChange={handleChangeOrder} type="text" value={formValues.CardNumber} name='CardNumber' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'> {formErrors.CardNumber}</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Expiry*</h1>
            <input onChange={handleChangeOrder} type="text" value={formValues.expiry} name='expiry' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'> {formErrors.expiry}</p>
          </div>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>CVC*</h1>
            <input onChange={handleChangeOrder} type="text" value={formValues.CVC} name='CVC' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'> {formErrors.CVC}</p>
          </div>
        </div>
        <div className='mt-2 flex items-center gap-5'>
                  <Button>Saved Information</Button>
                  {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className='font-semibold text-green-500 flex gap-2 items-center'>Information Saved successfuly <GoCheck className='w-5 h-5'/></div>
              ) :(
                <p></p>
              )}
            </div>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
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
                  ? "animate-slide-in-from-top bg-gray-50 w-full shadow-lg rounded-xl"
                  : "bg-white shadow-md"
              } transition-all duration-500 ease-out overflow-y-auto`}
            >
              <AlertDialogHeader className="z-10 relative px-8 py-6">
                <AlertDialogTitle className="text-center text-2xl font-semibold text-teal-600">
                  Your order has been accepted
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {cart.length > 0 ? (
                    <div className="flex flex-col md:flex-row gap-8 p-6">
                      <div className="flex-1 space-y-4">
                        <div className="text-sm text-gray-600">
                          <pre>
                            <span className="font-bold">Item:</span> {cartDetails.titles}
                          </pre>
                          <pre>
                            <span className="font-bold">Brand:</span> {cartDetails.brands}
                          </pre>
                          <pre>
                            <span className="font-bold">Amount:</span> {cartDetails.amounts + ""}
                          </pre>
                          <pre>
                            <span className="font-bold">Total Price:</span> {cartDetails.totalPrice + " $"}
                          </pre>
                        </div>
            
                        <div className="border-t-2 mt-4 pt-4 text-gray-700">
                          <h1 className="font-semibold text-lg text-teal-600">Reception:</h1>
                          <p><span className="font-bold">Name:</span> {formValues.CardHolder}</p>
                          <p className='inline'><span className="font-bold">Email:</span> {formValues.email}</p>
                          <p><span className="font-bold">Address:</span> {formValues.Address}</p>
                        </div>
                      </div>
            
                      
                      <div className="max-w-[200px] mx-auto md:mx-0">
                        <img
                          className="w-full"
                          src={PurchaseSuccessful}
                          alt="Purchase Successful"
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-gray-500">No result</p>
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
            ) : (
              <p></p>
            )
            
          }
      </form>
    </div>
  )
}

export default OrderSummery
