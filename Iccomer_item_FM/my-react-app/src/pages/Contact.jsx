import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '@/components/Footer/Footer';

const Contact = () => {

  const [fullName, setFullName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email = "talkal153@gmail.com"

    emailjs
      .sendForm('service_0t5i64q', 'template_8chc57j', form.current, {
        publicKey: 'rW6lWI-oWrXpF-fYG',from_email: email,
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
    value={fullName} 
    name="from_name"
    onChange={(e) => setFullName(e.target.value)} 
    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
    placeholder="Enter your name"
  />
  
  <label className='text-lg font-semibold text-gray-700 mb-2'>Email</label>
  <input 
    type="email"
    value={fromEmail} 
    name="to_name"
    onChange={(e) => setFromEmail(e.target.value)} 
    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
    placeholder="Enter your email"
  />

  <label className='text-lg font-semibold text-gray-700 mb-2'>Message</label>
  <textarea 
    name="message" 
    value={message}
    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
    onChange={(e) => setMessage(e.target.value)} 
    rows="5" 
    placeholder="Write your message here"
  />

  <input 
    type="submit" 
    value="Send"
    onClick={() => alert("Your Contact Is Sent")} 
    className='w-full p-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300'
  />
</form>
</div>  
<Footer className="mt-2"/>
</div>

  );
};


export default Contact;
