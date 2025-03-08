import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { GoCheck } from "react-icons/go";

const DeliveryInformation = ({
  formValuesDelivery,
  setFormValuesDelivery,
  formErrorsDelivery,
  handleChangeDelivery,
  handleSubmitDelivery,
  isSubmitDelivery,
}) => {

  const [isDisplay, setIsDisplay] = useState(false)

  const handleClick = () =>{
    setIsDisplay(originState => !originState);
  }
  return (
    <div className="flex flex-col gap-10 mt-5">
      <div className="flex gap-2 items-center">
        <input onChange={handleClick} type="checkbox" className="w-4 h-4" />
        <h3 className="font-semibold">Returning Customer?</h3>
      </div>
      {isDisplay === true ? (
        <form
        onSubmit={handleSubmitDelivery}
        className="border p-5 flex flex-col gap-5 rounded-lg"
      >
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Delivery Information</h1>
          <div className="border p-2 pr-2 pl-2 rounded-full font-semibold bg-gray-300 text-sm">
            Save information
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-5">
            <div className="gap-2 flex flex-col">
              {formErrorsDelivery.firstName ? (
                <h1 className="font-semibold text-red-400">First Name*</h1>
              ) : (
                <h1 className="font-semibold ">First Name*</h1>
              )}
              <input
                onChange={handleChangeDelivery}
                type="text"
                value={formValuesDelivery.firstName}
                name="firstName"
                placeholder="Type here..."
                className="p-3 border rounded-md"
              />
              <p className="text-red-500"> {formErrorsDelivery.firstName}</p>
            </div>

            <div className="gap-2 flex flex-col">
              {formErrorsDelivery.lastName ? (
                <h1 className="font-semibold text-red-400">Last Name*</h1>
              ) : (
                <h1 className="font-semibold">Last Name*</h1>
              )}
              <input
                onChange={handleChangeDelivery}
                type="text"
                value={formValuesDelivery.lastName}
                name="lastName"
                placeholder="Type here..."
                className="p-3 border rounded-md"
              />
              <p className="text-red-500">{formErrorsDelivery.lastName}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h1 className="font-semibold">Address*</h1>
            <input
              onChange={handleChangeDelivery}
              type="text"
              name="address"
              placeholder="Type here..."
              className="p-3 border w-full rounded-md"
            />
            <p className="text-red-500">{formErrorsDelivery.address}</p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="gap-2 flex flex-col">
            <h1 className="font-semibold">City/ Town*</h1>
            <input
              onChange={handleChangeDelivery}
              type="text"
              name="city"
              placeholder="Type here..."
              className="p-3 border rounded-md"
            />
            <p className="text-red-500">{formErrorsDelivery.city}</p>
          </div>
          <div className="gap-2 flex flex-col">
            <h1 className="font-semibold">Zip Code*</h1>
            <input
              onChange={handleChangeDelivery}
              type="text"
              name="zipCode"
              placeholder="Type here..."
              className="p-3 border rounded-md"
            />
            <p className="text-red-500"> {formErrorsDelivery.zipCode}</p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="gap-2 flex flex-col">
            <h1 className="font-semibold">Mobile*</h1>
            <input
              onChange={handleChangeDelivery}
              type="text"
              name="mobile"
              placeholder="Type here..."
              className="p-3 border rounded-md"
            />
            <p className="text-red-500">{formErrorsDelivery.mobile}</p>
          </div>

          <div className="gap-2 flex flex-col">
            <h1 className="font-semibold">Email*</h1>
            <input
              onChange={handleChangeDelivery}
              type="text"
              value={formValuesDelivery.email}
              name="email"
              placeholder="Type here..."
              className="p-3 border rounded-md"
            />
            <p className="text-red-500">{formErrorsDelivery.email}</p>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-5">
          <Button>Saved Information</Button>
          {Object.keys(formErrorsDelivery).length === 0 && isSubmitDelivery ? (
            <div className="font-semibold text-green-500 flex gap-2 items-center">
              Information Saved successfuly <GoCheck className="w-5 h-5" />
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </form>
      ) : (
        <p></p>
      )
      }
      
    </div>
  );
};

export default DeliveryInformation;

{
  /* <pre>{ JSON.stringify(formValues, undefined)}</pre> */
}
