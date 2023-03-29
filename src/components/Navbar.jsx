import React, {  useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import Head from './Head';
import About from './About';
import Side from './Side'
import Skills from './Skills'
import Footer from './Footer'
import Projects from './Projects'
import Experience from './Experience'
import Aos from "aos";
import "aos/dist/aos.css";

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
  const changeNavbarColor = () =>{

     if(window.scrollY < scrollY){
       setColorchange(true);
     }
     else{
      setscrollY(window.scrollY)
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const classNav = window.scrollY ? 'bg-[#373d49]  opacity-95 bg shadow-md': null


  return (
    <>
    <div 
        className={colorChange ? `${classNav} z-20 fixed flex justify-between ease-in-out px-4 sm:px-8 duration-500 items-center  top-0 w-full h-16 text-white ` : `fixed  z-20 flex justify-between items-center w-full ease-out-in duration-500 top-[-100%] h-16 text-white`}
      >
           <Link to='home' smooth={true} duration={500}>
          <h1 data-aos="fade-down" data-aos-delay="1800" className='w-full text-2xl font-bold text-[#d19a66] cursor-pointer'>{!nav && 'bherth'}</h1>
        </Link>
        <ul className='hidden md:flex'>
          <li data-aos="fade-down"  data-aos-delay="1900" className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
            <Link to='experience' smooth={true} duration={500}>
              <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                Experience
              </span>
            </Link>
          </li>
          <li data-aos="fade-down"  data-aos-delay="2000" className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
            <Link to='skills' smooth={true} duration={500}>
              <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                Skills
              </span>
            </Link>
          </li>
          <li data-aos="fade-down"  data-aos-delay="2200" className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
            <Link to='projects' smooth={true} duration={500}>
              <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                Projects
              </span>
            </Link>
          </li>
          <li data-aos="fade-down"  data-aos-delay="2400" className='p-4 flex group transition-all duration-300 ease-in-out cursor-pointer'>
            <Link to='about' smooth={true} duration={500}>
              <span className='bg-left-bottom bg-gradient-to-r from-[#d19a66] to-[#d19a66] bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out'>
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <div data-aos="fade-down" data-aos-delay="2000" onClick={handleNav} className={nav ? 'block md:hidden  cursor-pointer rotate-180 duration-500' : 'block md:hidden  cursor-pointer rotate-0 duration-100'}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <ul className={nav ? 'fixed z-20 left-0 top-0 w-[70%] h-full border-r shadow-2xl border-r-gray-600 bg-[#373d49] ease-in-out duration-300 bg-opacity-[85%]' : 'ease-in-out duration-300 fixed left-[-100%]'}>
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
      </div>
      <div onClick={handleNav} className={nav ? 'z-10 opacity-[20%] mt-[100px] fixed w-full h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700' : 'hidden'}></div>
      <Side isNav={nav} />
      <Head isNav={nav} />
      <Experience isNav={nav} />
      <Skills isNav={nav} />
      <Projects isNav={nav} />
      <About isNav={nav} />
      <Footer isNav={nav} />
    </>

  );
};

export default Navbar;