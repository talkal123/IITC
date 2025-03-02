import React, { useState } from 'react'
import { Button } from '../ui/button'

const DeliveryInformation = () => {
  

  const submitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    console.log(payload);

    

  }

  return (
    <form onSubmit={submitForm} className='border p-5 flex flex-col gap-5'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl'>DeliveryInformation</h1>
        <div className='border p-1 pr-2 pl-2 rounded-full font-medium bg-gray-300'>Save information</div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <div className='gap-2'>
            <h1 className='font-semibold'>First Name*</h1>
            <input type="text" name='firstName' placeholder='Type here...' className='p-3 border' />
          </div>
          <div className='gap-2'>
            <h1 className='font-semibold'>Last Name*</h1>
            <input type="text" name='lastName' placeholder='Type here...' className='p-3 border' />
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <h1 className='font-semibold'>Address*</h1>
            <input type="text" name='Address' placeholder='Type here...' className='p-3 border w-full' />
        </div>
      </div>

      <div className='flex gap-2'>
          <div className='gap-2'>
            <h1 className='font-semibold'>City/ Town*</h1>
            <input type="text" name='City/Town' placeholder='Type here...' className='p-3 border' />
          </div>
          <div className='gap-2'>
            <h1 className='font-semibold'>Zip Code*</h1>
            <input type="text" name='ZipCode' placeholder='Type here...' className='p-3 border' />
          </div>
        </div>

      <div className='flex gap-2'>
          <div className='gap-2'>
            <h1 className='font-semibold'>Mobile*</h1>
            <input type="text" name='Mobile' placeholder='Type here...' className='p-3 border' />
          </div>
          <div className='gap-2'>
            <h1 className='font-semibold'>Email*</h1>
            <input type="text" name='Email' placeholder='Type here...' className='p-3 border' />
          </div>
        </div>

        <div>
          <Button>Saved Information</Button>
        </div>
      
    </form>
  )
}

export default DeliveryInformation
