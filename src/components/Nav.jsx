import React, { useState } from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import Button from './Button';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

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
              <a
                className="text-gray-700 hover:text-gray-400 duration-500"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="md:text-xl my-7 md:my-0">
              <a
                className="text-gray-700 hover:text-gray-400 duration-500"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="md:text-xl my-7 md:my-0">
              <a
                className="text-gray-700 hover:text-gray-400 duration-500"
                href="/service"
              >
                Service
              </a>
            </li>
            <Button>Login</Button>
            <Button>Sign up</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
