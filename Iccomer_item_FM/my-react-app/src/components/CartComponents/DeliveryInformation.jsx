import React, { useState } from 'react'
import { Button } from '../ui/button'

const DeliveryInformation = () => {
  

  const submitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    console.log(payload);
  }

  const handleClick = () => {
    alert('Your Information Is Saved')
  }

  return (
    <form onSubmit={submitForm} className='border p-5 flex flex-col gap-5'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl'>Delivery Information</h1>
        <div className='border p-2 pr-2 pl-2 rounded-full font-semibold bg-gray-300 text-sm'>Save information</div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex gap-5'>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>First Name*</h1>
            <input type="text" name='firstName' placeholder='Type here...' className='p-3 border rounded-md' />
          </div>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Last Name*</h1>
            <input type="text" name='lastName' placeholder='Type here...' className='p-3 border rounded-md' />
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <h1 className='font-semibold'>Address*</h1>
            <input type="text" name='Address' placeholder='Type here...' className='p-3 border w-full rounded-md' />
        </div>
      </div>

      <div className='flex gap-5'>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>City/ Town*</h1>
            <input type="text" name='City/Town' placeholder='Type here...' className='p-3 border rounded-md' />
          </div>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Zip Code*</h1>
            <input type="text" name='ZipCode' placeholder='Type here...' className='p-3 border rounded-md' />
          </div>
        </div>

      <div className='flex gap-5'>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Mobile*</h1>
            <input type="text" name='Mobile' placeholder='Type here...' className='p-3 border rounded-md' />
          </div>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-semibold'>Email*</h1>
            <input type="text" name='Email' placeholder='Type here...' className='p-3 border rounded-md' />
          </div>
        </div>

        <div className='mt-2'>
          <Button onClick={handleClick}>Saved Information</Button>
        </div>
      
    </form>
  )
}

export default DeliveryInformation
