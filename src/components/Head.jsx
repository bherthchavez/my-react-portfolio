import React from 'react';
import Typed from 'react-typed';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import mypic from '../assets/mypic.png';


function Head() {

  return (

    <div name='home' className='text-white'>
      <div className='max-w-[800px] mt-[-70px] w-full h-screen mx-auto text-left flex flex-col justify-center px-4'>

        <img src={mypic} alt='/' className='border-[#d19a66] border-2 mt-[200px] h-32 w-32 rounded-2xl shadow-2xl grayscale hover:grayscale-[75%] transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' />

        <div className='max-w-[1240px]'>
          <div className='w-full my-4'>
            <p className='text-[#d19a66] md:text-lg'>
              Hi, my name is </p>
            <div className='flex justify-start items-center'>
              <p className='md:text-6xl sm:text-2xl text-3xl py-2 font-bold text-WHITE'>
                &gt;
              </p>
              <Typed
                className='md:text-6xl text-3xl font-bold md:pl-4 pl-2 '
                strings={['Julbert Pruel.']}
                typeSpeed={100}
              />
            </div>
            <p className='text-[#d19a66] font-bold md:text-lg'>
              FULL STACK WEB DEVELOPER
            </p>
          </div>
        </div>
        <p className=' text-gray-500 py-5'> I`m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building Cloud based ERP applications.</p>
        <Link to='skills' smooth={true} duration={500}>
          <button className='md:text-base sm:text-sm border-2 group px-6 flex justify-end items-center border-[#d19a66] w-auto rounded-md font-medium my-6 py-3 text-[#d19a66] hover:bg-[#343943] hover:border-[#343943]'>
            Chek out my skills!
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>

          </button>
          </Link>
      </div>

    </div>
  );
};

export default Head;