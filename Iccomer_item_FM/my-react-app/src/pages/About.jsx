import Footer from "@/components/Footer/Footer";
import React from "react";
import Slider from "../components/Slider"

const About = () => {
  return (
    <div className="flex flex-col gap-2">
    <Slider imageOne={"https://media.istockphoto.com/id/1766867227/photo/student-phone-and-shopping-bag-in-city-travel-walking-and-search-for-student-deal-discount-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ow1bZhbxnHvMzWnBInyQSepXIXs0nHcTRGNtFIE9p0k="} imageTwo={"https://media.istockphoto.com/id/856635076/photo/vintage-visit-to-florence.webp?a=1&b=1&s=612x612&w=0&k=20&c=mRyD4EhXYmw4u28IsGokNGSlqdnbFN14lt1mcKcTBYk="} imageThree={"https://media.istockphoto.com/id/1310533180/photo/cheerful-fashionable-adult-man-in-city-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cLikG9LNyw-OU3na0UP90b1SHn9ymia_KN5XEvIbdJQ="}/>
    <div className="mt-5 min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We are a team of passionate individuals dedicated to bringing the
          best experience for our customers. Our goal is to provide high-quality
          products with exceptional customer service. Our values are trust,
          integrity, and commitment to excellence.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our vision is to revolutionize the way people shop online by making
            the process easier, faster, and more enjoyable. We aim to become
            your trusted partner for all your shopping needs.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to provide high-quality products that meet the needs
            of our customers, with a focus on sustainability and ethical
            practices. We strive to build long-term relationships with our
            customers, ensuring that they have an exceptional shopping
            experience every time they interact with us.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default About;
