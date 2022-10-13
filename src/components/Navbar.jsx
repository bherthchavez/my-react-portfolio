import React from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {

  return (
    <div className='md:px-[60px] sm:px-[20px] fixed flex justify-between items-end h-[130px] w-full mx-auto  my-2 text-white bg-[#343943]'>
        <Link to='home' smooth={true} duration={500}>
     <h1 className='w-full text-2xl font-bold mb-4 text-[#d19a66] px-4  cursor-pointer'>bherth</h1>
     </Link>
    <ul className='flex'>
      <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
        <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
         Projects
        </span>
      </li>
      <li className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
        <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
         Contact
        </span>
      </li>
    </ul>
  </div>
  );
};

export default Navbar;
