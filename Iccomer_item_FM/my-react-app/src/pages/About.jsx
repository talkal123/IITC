import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
  );
};

export default About;
