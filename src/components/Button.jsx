import React from 'react';

const Button = ({ children }) => (
  <button
    className="bg-indigo-600 hover:bg-indigo-500 duration-150 px-4 py-2 font-[Poppins] text-white text-md md:text-xl rounded-md block mb-5 md:mb-0"
    type="button"
  >
    {children}
  </button>
);

export default Button;
