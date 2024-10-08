import React, { useEffect, useState } from 'react';
import  {ReactTyped}  from 'react-typed';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import mypic from '../assets/mypic.png';
import { aboutMe } from "./ExpData";
import Aos from "aos";
import "aos/dist/aos.css";

function Head() {

  const [readMore, setReadMore] = useState(false)

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div name='home' className={'text-white'}>

      <div className={`max-w-[800px] mt-[-70px] w-full h-auto sm:h-screen mx-auto text-left flex flex-col justify-center px-4`}>
        <img data-aos="flip-left" src={mypic} alt='Me' className='border-[#d19a66] border-2 mt-[200px] h-32 w-32 rounded-2xl shadow-2xl sepia-[80%] opacity-90  hover:sepia-0 hover:opacity-100 transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' />
        <div className='max-w-[1240px]'>
          <div className='w-full my-4'>
            <p data-aos="fade-left"
              data-aos-delay="100" className='text-[#d19a66] md:text-lg'>
              Hi, my name is </p>
            <div data-aos="fade-left"
              data-aos-delay="200" className='flex justify-start items-center'>
              <p className='md:text-6xl sm:text-2xl text-3xl py-2 font-bold text-WHITE'>
                &gt;
              </p>
              <ReactTyped
                className='md:text-6xl text-3xl font-bold md:pl-4 pl-2 '
                strings={['Julbert Pruel.']}
                typeSpeed={100}
              />
            </div>
            <p data-aos="fade-left"
              data-aos-delay="300"
              className='text-[#d19a66] font-bold md:text-lg uppercase'>
              MERN Full Stack Web Developer 
            </p>
          </div>
        </div>
        <div
          className={readMore ? `text-gray-400  pb-5 text-sm md:text-base` : `text-gray-500 pt-2 pb-10 text-sm md:text-base`}>
          {!readMore ?
            <h1 data-aos="fade-left"
                data-aos-delay="400" >
              <p className='text-sm'>{aboutMe.substring(0, 210)}  <span onClick={() => setReadMore(!readMore)} className={!readMore ? `cursor-pointer text-sm font-extrabold text-gray-600 hover:text-[#f8a04d]` : `cursor-pointer text-sm font-extrabold text-gray-500 hover:text-[#f8a04d]`}>{!readMore ? ` ...show more` : ` show less`}</span></p>
            </h1>
            :
            <h1>
              <p className='text-sm'>{aboutMe.substring(0, 312)}</p>
              <p className='my-3 text-sm'>{aboutMe.substring(313, 566)}</p>
              <p className='my-3 text-sm'>{aboutMe.substring(566)}</p>
              <p onClick={() => setReadMore(!readMore)} className={!readMore ? `cursor-pointer text-sm font-extrabold text-gray-600 hover:text-[#f8a04d]` : `cursor-pointer text-sm font-extrabold text-gray-500 hover:text-[#f8a04d]`}>{!readMore ? ` ...show more` : ` show less`}</p>
            </h1>
          }
        </div>
        
        <Link className='w-64 h-12 mb-16 md:mb-0' to='projects' smooth={true} duration={500}>
          <span data-aos="fade-left"
            data-aos-delay="500" className='whitespace-nowrap md:text-sm text-xs border md:border-1 group px-6 flex justify-between text-center items-center border-[#d19a66] w-[270px] md:w-[300px] rounded-md font-medium  py-3 text-[#d19a66] hover:bg-[#343943] hover:border-[#343943] cursor-pointer'>
            Check out my recent Projects!
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>

          </span>
        </Link>
        
      </div>

    </div>
  );
};

export default Head;