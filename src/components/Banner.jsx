import React from 'react';

const Banner = () => (
  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Rocket Travel</h1>
      <p className="text-lg mb-8">
        Pursue your dream and fly through our ROCKETS
      </p>
      <button
        type="button"
        className="bg-white text-indigo-500 hover:bg-indigo-600 text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
      >
        Get Started
      </button>
    </div>
  </div>
);

export default Banner;
