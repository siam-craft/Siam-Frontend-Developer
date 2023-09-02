import React, { useState } from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const loginClick = () => {
    setOpen(!open);
    navigate('/login');
  };
  const registerClick = () => {
    setOpen(!open);
    navigate('/register');
  };

  return (
    <nav>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex md:items-center md:justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-[Poppins] font-bold text-2xl cursor-pointer  flex items-center text-gray-800">
            <span className="text-3xl text-indigo-600 mr-1 ">
              <BsFillRocketTakeoffFill />
            </span>
            Designer
          </div>
          <div
            onClick={handleClick}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            role="presentation"
          >
            {open ? <GrFormClose /> : <BiMenu />}
          </div>
          <ul
            className={`md:flex md:items-center md:gap-10 font-[Poppins] md:pb-0 pb-16 absolute md:static bg-white md:z-auto z-[-1] top-0 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in border-  ${
              open ? 'top-16' : 'top-[-400px]'
            }`}
          >
            <li className="md:text-xl my-7 md:my-0">
              <Link
                onClick={() => setOpen(!open)}
                to="/"
                className="text-gray-700 hover:text-gray-400 duration-500"
              >
                Home
              </Link>
            </li>
            <button
              onClick={() => loginClick()}
              className="bg-indigo-600 hover:bg-indigo-500 duration-150 px-4 py-2 font-[Poppins] text-white text-md md:text-xl rounded-md block mb-5 md:mb-0"
              type="button"
            >
              Login
            </button>
            <button
              onClick={() => registerClick()}
              className="bg-indigo-600 hover:bg-indigo-500 duration-150 px-4 py-2 font-[Poppins] text-white text-md md:text-xl rounded-md block mb-5 md:mb-0"
              type="button"
            >
              Sign up
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
