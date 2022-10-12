import React from 'react';
const Navbar = () => {

  return (
    <div className='flex justify-between items-end h-24 max-w-[800px] mx-auto px-4 text-white'>
    <h1 className='w-full text-3xl font-bold text-[#d19a66]'>bherth</h1>
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
