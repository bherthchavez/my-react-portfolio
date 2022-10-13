import React from 'react';
import {
  FaGithub,
} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import { BsFillPersonLinesFill, BsInstagram } from 'react-icons/bs';
const Side = () => {

  return (
    <div className='fixed flex justify-between items-end h-[130px] w-full mx-auto px-[60px] my-2 text-white bg-[#343943]'>
     <div className='hidden lg:flex fixed flex-col left-[4%] top-[55%]'>
        <ul>
          <li className='w-auto h-[50px] flex justify-between items-center'>
            <a href='https://github.com/bherthchavez' target='_blank' rel='noreferrer noopener' className='flex justify-between items-center w-full text-gray-500 hover:text-[#d19a66]'>
            <FaGithub size={20} className='m-4 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' />

           </a>
          </li>
          <li className='w-auto h-[50px] flex justify-between items-center'>
            <a href='https://www.linkedin.com/in/julbert-pruel-65a975129/' target='_blank' rel='noreferrer noopener' className='flex justify-between items-center w-full text-gray-500 hover:text-[#d19a66]'>
            <FaLinkedinIn size={20} className='m-4 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' />
            </a>
          </li>
          <li className='w-auto h-[50px] flex justify-between items-center'>
            <a href='https://www.instagram.com/bherth_chavez/' target='_blank' rel='noreferrer noopener' className='flex justify-between items-center w-full text-gray-500 hover:text-[#d19a66]' >
              <BsInstagram size={20} className='m-4 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' />
            </a>
          </li>
          <li className='w-auto h-[50px] flex justify-between items-center'>
            <a href='/'  className='flex justify-between items-center w-full text-gray-500 hover:text-[#d19a66]'>
              <BsFillPersonLinesFill size={20} className='m-4 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' />
            </a>
          </li>
          <li className='w-auto h-[200px] flex justify-between items-center  text-gray-400'>
          <hr className='mx-auto w-[1.5px] h-40 rounded border-0 bg-gray-600 m-4 ' />
          </li>
        </ul>
      </div>

      <div className='hidden lg:flex fixed flex-col right-[4%] top-[55%]'>
        <ul>
          <li className='w-auto h-auto flex justify-between items-center'>
            <a href='mailto:bherthchavez@gmail.com' target='_blank' rel='noreferrer noopener' className='flex justify-between items-center w-full text-gray-500 hover:text-[#d19a66] [writing-mode:vertical-lr] shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300'  data-bs-toggle="tooltip" data-bs-placement="left" title="Email Me">
            bherthchavez@gmail.com
            </a>

          </li>
          <li className='w-auto h-auto flex justify-between items-center  text-gray-400'>
          <hr className='mx-auto w-[1.5px] h-52 rounded border-0 bg-gray-600 m-4 ' />
          </li>
        </ul>
      </div>
  </div>
  );
};

export default Side;
