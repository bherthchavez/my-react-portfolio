import React, { useEffect, useState } from 'react';
import Typed from 'react-typed';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import mypic from '../assets/mypic.png';
import { aboutMe } from "./ExpData";
import Aos from "aos";
import "aos/dist/aos.css";

function Head(props) {

  const [readMore, setReadMore] = useState(false)

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div name='home' className={props.isNav ? 'text-white blur-sm' : 'text-white'}>
      <div className={`max-w-[800px] mt-[-70px] w-full h-auto sm:h-screen mx-auto text-left flex flex-col justify-center px-4`}>
        <img data-aos="flip-left" src={mypic} alt='Me' className='border-[#d19a66] border-2 mt-[200px] h-32 w-32 rounded-2xl shadow-2xl grayscale hover:grayscale-[75%] transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' />
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
              <Typed
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
          className={readMore ? `text-gray-400 pt-2 pb-10 text-sm md:text-base` : `text-gray-500 pt-2 pb-10 text-sm md:text-base`}>
          {!readMore ?
            <span data-aos="fade-left"
                data-aos-delay="400" >
              <p >{aboutMe.substring(0, 155)}  <span onClick={() => setReadMore(!readMore)} className={!readMore ? `cursor-pointer text-sm font-extrabold text-gray-600 hover:text-[#f8a04d]` : `cursor-pointer text-sm font-extrabold text-gray-500 hover:text-[#f8a04d]`}>{!readMore ? ` ...show more` : ` show less`}</span></p>
             

            </span>

            :
            <div>
              <p>{aboutMe.substring(0, 529)}</p>
              <p className='my-4'>{aboutMe.substring(529)}</p>
              <p onClick={() => setReadMore(!readMore)} className={!readMore ? `cursor-pointer text-sm font-extrabold text-gray-600 hover:text-[#f8a04d]` : `cursor-pointer text-sm font-extrabold text-gray-500 hover:text-[#f8a04d]`}>{!readMore ? ` ...show more` : ` show less`}</p>
            </div>
          }
        </div>
        <Link className='w-64 h-12 mb-16 md:mb-0' to='experience' smooth={true} duration={500}>
          <span data-aos="fade-left"
            data-aos-delay="500" className='whitespace-nowrap md:text-base text-sm border-[1px] md:border-2 group px-6 flex justify-between text-center items-center border-[#d19a66] w-[270px] md:w-[300px] rounded-md font-medium  py-3 text-[#d19a66] hover:bg-[#343943] hover:border-[#343943] cursor-pointer'>
            Chek out my experience!
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