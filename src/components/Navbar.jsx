import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
  <div>
    <div className='md:px-[60px] sm:px-[20px] z-20 fixed flex justify-between items-end h-[130px] w-full mx-auto  my-2 text-white bg-[#373d49]'>
      <Link to='home' smooth={true} duration={500}>
        <h1 className='w-full text-2xl font-bold mb-4 text-[#d19a66] px-4 cursor-pointer'>bherth</h1>
      </Link>
      <ul className='hidden md:flex'>
      <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
        <Link to='experience' smooth={true} duration={500}>
          <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
            Experience
          </span>
          </Link>
        </li>
      <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
        <Link to='skills' smooth={true} duration={500}>
          <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
            Skills
          </span>
          </Link>
        </li>
        <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
        <Link to='projects' smooth={true} duration={500}>
          <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
            Projects
          </span>
          </Link>
        </li>
        <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
        <Link to='about' smooth={true} duration={500}>
          <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
            Contact
          </span>
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden p-4 cursor-pointer'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul className={nav ? 'fixed z-20 left-0 top-0 w-[70%] h-full border-r shadow-2xl border-r-gray-600 bg-[#373d49] opacity-[98%] ease-in-out duration-300' : 'ease-in-out duration-300 fixed left-[-100%]'}>
        <Link to='home' smooth={true} duration={500}>
          <h1 onClick={handleNav} className='w-full text-xl font-bold mb-4 text-[#d19a66] px-4 cursor-pointer p-4 '>bherth</h1>
        </Link>
        <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer border-b border-gray-600'>
        <Link to='experience' smooth={true} duration={500}>
          <span onClick={handleNav} className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
            Experience
          </span>
          </Link>
        </li>
        <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer border-b border-gray-600'>
        <Link to='skills' smooth={true} duration={500}>
          <span onClick={handleNav} className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
            Skills
          </span>
          </Link>
        </li>
        <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer border-b border-gray-600'>
        <Link to='projects' smooth={true} duration={500}>
          <span onClick={handleNav} className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
            Projects
          </span>
          </Link>
        </li>
        <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer border-b border-gray-600'>
        <Link to='about' smooth={true} duration={500}>
          <span onClick={handleNav} className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
            Contact
          </span>
          </Link>
        </li>
      </ul>
    </div>
    <div onClick={handleNav} className={nav ?'z-10 blur-2xl opacity-[90%] fixed w-[100%] h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700' : 'hidden'}></div>
    </div>
  );
};

export default Navbar;
