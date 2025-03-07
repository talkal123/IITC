import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '@/components/Footer/Footer';

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ldx2o9d', 'template_letlew7', form.current, {
        publicKey: 'rW6lWI-oWrXpF-fYG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='flex flex-col gap-2'>
  <div>  
  <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 justify-center items-center max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg'>
  <label className='text-lg font-semibold text-gray-700 mb-2'>Name</label>
  <input 
    type="text" 
    name="from_name" 
    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
    placeholder="Enter your name"
  />
  
  <label className='text-lg font-semibold text-gray-700 mb-2'>Email</label>
  <input 
    type="email" 
    name="to_name" 
    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
    placeholder="Enter your email"
  />

  <label className='text-lg font-semibold text-gray-700 mb-2'>Message</label>
  <textarea 
    name="message" 
    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
    rows="5" 
    placeholder="Write your message here"
  />

  <input 
    type="submit" 
    value="Send" 
    className='w-full p-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300'
  />
</form>
</div>  
<Footer className="mt-2"/>
</div>

  );
};


export default Contact;
