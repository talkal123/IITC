import React from 'react'
import HomePhoto from '../../assets/Home.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePicture = () => {
  return (
    <div className='w-full h-full overflow-hidden relative flex flex-col justify-center items-center mt-28' data-aos="zoom-in">
      <img
        src={HomePhoto}
        alt=""
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
      <div className='absolute bg-green-900 top-15 right-16 flex flex-col gap-6 p-4 sm:p-6 max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] w-[80%] sm:w-[60%] md:w-[50%] text-white'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-center'>
          Get 5% Cash back on $200
        </h1>
        <h3 className='font-bold text-lg sm:text-xl md:text-xl text-center'>
          Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
        </h3>
        <div>
          <button className='border-2 p-2 rounded-lg hover:border-0 hover:bg-black'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePicture
