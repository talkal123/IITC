import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { GoCheck } from "react-icons/go";

const DeliveryInformation = () => {
  
  const  initialValues = { firstName: "",lastName: "", email: "", address:"", city:"", zipCode: "", mobile: ""};
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChangeDelivery = (e) => {
    const { name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
    console.log(formValues); 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {}
    const regex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!values.firstName) {
      errors.firstName = "FirstName is required! "
    }
    if(!values.lastName) {
      errors.lastName = "LastName is required! "
    }
    if (!values.address) {
      errors.address = "Address is required!";
    } else if (/[^a-zA-Z\s]/.test(values.address)) { 
      errors.address = "Address can only include letters and spaces!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    } else if (/[^a-zA-Z\s]/.test(values.city)) { 
      errors.city = "city can only include letters and spaces!";
    }
    if (!values.zipCode) {
      errors.zipCode = "Zip Code is required!";
    } else if (!/^\d+$/.test(values.zipCode)) {
      errors.zipCode = "Zip Code can only contain numbers!";
    } else if (values.zipCode.length !== 5) {
      errors.zipCode = "Zip Code must be exactly 5 digits!";
    }
      else if (values.zipCode.length < 5) {
      errors.zipCode = "Zip code is required minimum 5 Keys!"
    }  else if (values.zipCode.length > 5) {
      errors.zipCode = "Zip Code is required maximum 5 Keys!"
    } 
    if (!values.mobile) {
      errors.mobile = "Mobile is required!";
    } else if (!/^\d+$/.test(values.mobile)) {
      errors.mobile = "mobile can only contain numbers!";
    } else if (values.mobile.length < 10) {
      errors.mobile = "Mobile must be at least 10 digits!";
    } else if (values.mobile.length > 10) {
      errors.mobile = "Mobile can be at most 10 digits!";
    }
    if(!values.email) {
      errors.email = "Email is required! "
    } else if(!regex.test(values.email)) {
      errors.email ="This is not valid email format!"
    }


    return errors;

  }

  return (
    <div>
    <form onSubmit={handleSubmit} className='border p-5 flex flex-col gap-5 rounded-lg'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl'>Delivery Information</h1>
        <div className='border p-2 pr-2 pl-2 rounded-full font-semibold bg-gray-300 text-sm'>Save information</div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex gap-5'>
          <div className='gap-2 flex flex-col'>
            {formErrors.firstName ? (
            <h1 className='font-semibold text-red-400'>First Name*</h1>
            ): (
              <h1 className='font-semibold '>First Name*</h1>
            )}
            <input onChange={handleChangeDelivery} type="text" value={formValues.firstName} name='firstName' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'> {formErrors.firstName}</p>
          </div>
          
          <div className='gap-2 flex flex-col'>
          {formErrors.lastName ? (
          <h1 className='font-semibold text-red-400'>Last Name*</h1>
            ): (
              <h1 className='font-semibold'>Last Name*</h1>
            )}
            <input onChange={handleChangeDelivery} type="text" value={formValues.lastName} name='lastName' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'>{formErrors.lastName}</p>
          </div>
        </div>
        
        <div className='flex flex-col gap-2 w-full'>
            <h1 className='font-semibold'>Address*</h1>
            <input onChange={handleChangeDelivery} type="text" name='address' placeholder='Type here...' className='p-3 border w-full rounded-md' />
            <p className='text-red-500'>{formErrors.address}</p>
        </div>
      </div>

      <div className='flex gap-5'>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>City/ Town*</h1>
            <input onChange={handleChangeDelivery} type="text" name='city' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'>{formErrors.city}</p>
          </div>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Zip Code*</h1>
            <input onChange={handleChangeDelivery} type="text" name='zipCode' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'> {formErrors.zipCode}</p>
          </div>
        </div>

      <div className='flex gap-5'>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Mobile*</h1>
            <input onChange={handleChangeDelivery} type="text" name='mobile' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'>{formErrors.mobile}</p>
          </div>
          
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Email*</h1>
            <input onChange={handleChangeDelivery} type="text" value={formValues.email} name='email' placeholder='Type here...' className='p-3 border rounded-md' />
            <p className='text-red-500'>{formErrors.email}</p>
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
      
    </form>
    </div>
  )
}

export default DeliveryInformation


{/* <pre>{ JSON.stringify(formValues, undefined)}</pre> */}