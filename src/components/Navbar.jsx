import React, { useEffect, useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import Aos from "aos";
import "aos/dist/aos.css";

import {
  FaGithub,
} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsInstagram } from 'react-icons/bs';
import Resume from '../assets/Julbert Pruel.pdf';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  nav ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")

  const [colorChange, setColorchange] = useState(true);
  const [scrollY, setscrollY] = useState(window.scrollY);
  const changeNavbarColor = () => {

    if (window.scrollY < scrollY) {
      setColorchange(true);
    }
    else {
      setscrollY(window.scrollY)
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const classNav = window.scrollY ? 'backdrop-blur-md bg-[#373d49]/30 shadow-md' : ''


  return (
    <>
      <div>
        <div
          className={colorChange ? `${classNav} z-20 fixed flex justify-between ease-in-out px-4 sm:px-8 duration-500 items-center  top-0 w-screen h-16 text-white ` : `z-20 fixed flex justify-between items-center w-screen ease-out-in duration-500 top-[-100%] h-16 text-white`}
        >
          <div className='flex gap-2'>
            <Link to='home' smooth={true} duration={500}>
              <h1 data-aos="fade-down" data-aos-delay="1800" className='w-full text-2xl font-bold text-[#d19a66] cursor-pointer'>{!nav && 'bherth'}</h1>
            </Link>
            {/* <img data-aos="flip-left" src='https://www.codewars.com/users/bherthchavez/badges/small' alt='Me' className='' /> */}
          </div>
          <ul className='hidden md:flex'>
            <li data-aos="fade-down" data-aos-delay="1900" className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
              <Link to='experience' smooth={true} duration={500}>
                <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                  Experience
                </span>
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="2000" className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
              <Link to='skills' smooth={true} duration={500}>
                <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                  Skills
                </span>
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="2200" className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
              <Link to='projects' smooth={true} duration={500}>
                <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                  Projects
                </span>
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay="2400" className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
              <Link to='about' smooth={true} duration={500}>
                <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                  Contact
                </span>
              </Link>
            </li>
          </ul>
          <div data-aos="fade-left" data-aos-delay="2000" className="relative  block md:hidden">
            <nav>
              <button
                className="w-11 h-10 relative focus:outline-none"
                onClick={handleNav}
              >
                <div className="block w-8 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    className={`block absolute h-[0.100rem]  w-6 text-white bg-current transform transition duration-500 ease-in-out rounded-lg ${nav ? 'rotate-45' : '-translate-y-1.5'
                      }`}
                  ></span>
                  <span
                    className={`block absolute h-[0.100rem] w-4 text-white bg-current transform transition duration-500 ease-in-out rounded-lg ${nav ? 'opacity-0' : ''
                      }`}
                  ></span>
                  <span
                    className={`block absolute h-[0.100rem] w-6 text-white bg-current transform transition duration-500 ease-in-out rounded-lg ${nav ? '-rotate-45' : 'translate-y-1.5'
                      }`}
                  ></span>
                </div>
              </button>
            </nav>
          </div>
        </div>
        <div className={nav ? 'fixed z-30 left-0 top-0 w-[70%] h-full border-r shadow-2xl border-r-gray-600 backdrop-blur-xl bg-[#373d49]/10 ease-in-out duration-300 bg-opacity-[85%] text-white' : 'z-30 fixed w-[70%] top-0 h-full ease-in-out duration-300  left-[-100%] text-white'}>
          <ul>
            <Link to='home' smooth={true} duration={500}>
              <h1 onClick={handleNav} className='w-full text-xl font-bold mb-4 text-[#d19a66] px-4 cursor-pointer p-4 '>bherth</h1>
            </Link>
            <Link to='experience' smooth={true} duration={500}>
              <li onClick={handleNav} className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer border-b border-gray-600'>
                <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                  Experience
                </span>
              </li>
            </Link>
            <Link to='skills' smooth={true} duration={500}>
              <li onClick={handleNav} className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer border-b border-gray-600'>
                <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                  Skills
                </span>
              </li>
            </Link>
            <Link to='projects' smooth={true} duration={500}>
              <li onClick={handleNav} className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer border-b border-gray-600'>
                <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                  Projects
                </span>
              </li>
            </Link>
            <Link to='about' smooth={true} duration={500}>
              <li onClick={handleNav} className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer border-b border-gray-600'>
                <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                  Contact
                </span>
              </li>
            </Link>
          </ul>

          <div className='mt-20'>
            <ul className="flex justify-center">
              <li>
                <a href='https://github.com/bherthchavez' target='_blank' rel='noreferrer noopener' className='transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300 flex justify-between items-center text-gray-500 hover:text-[#d19a66]'>
                  <FaGithub size={20} className='m-3 shadow-xl' />

                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/julbert-pruel-65a975129/' target='_blank' rel='noreferrer noopener' className='transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300 flex justify-between items-center  text-gray-500 hover:text-[#d19a66]'>
                  <FaLinkedinIn size={20} className='m-3 shadow-xl' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/bherth_chavez/' target='_blank' rel='noreferrer noopener' className='flex justify-between items-center  text-gray-500 hover:text-[#d19a66] transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' >
                  <BsInstagram size={20} className='m-3 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' />
                </a>
              </li>
              <li>
                <a href={Resume} title='Download Resume' className='flex justify-between items-center  text-gray-500 hover:text-[#d19a66] transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' download="Julbert Pruel.pdf">
                  <BsFillPersonLinesFill size={20} className='m-3 shadow-xl' />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div onClick={handleNav} className={nav ? 'z-10 backdrop-blur-sm bg-[#373d49]/20 mt-24  fixed w-full h-full' : 'hidden'}></div>

    </>

  );
};

export default Navbar;