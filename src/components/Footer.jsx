import React from "react";
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Netlify from '../assets/netlify.png';
import {
  FaGithub,
} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsInstagram } from 'react-icons/bs';
import Resume from '../assets/resume.pdf';


const About = (props) => {
  return (

    <div className={props.isNav ? 'max-w-[800px] h-auto mx-auto p-4 blur' : 'max-w-[800px] h-auto mx-auto p-4'}>
      <div className="flex mt-0 justify-center items-center mb-1">
        <span className="my-auto mx-2 text-gray-400 text-sm"> Build with: </span>
      </div>
      <div className="flex mt-0 justify-center items-center ">
        <span className="w-5 h-5">
          <img src={ReactImg} alt="react icon" />
        </span>
        <span className="my-auto mx-2 text-gray-500"> + </span>
        <span className="w-5 h-5">
          <img src={Tailwind} alt="Tailwind icon" />
        </span>
        <span className="my-auto mx-2 text-gray-500"> + </span>
        <span className="w-5 h-5">
          <img src={Netlify} alt="Netlify icon" />
        </span>
      </div>
      <div className="mt-6 text-center w-auto flex lg:block justify-between items-center">
        <p className=' text-gray-400'>
          ⓒ {new Date().getFullYear()} Julbert Pruel
        </p>
        <ul className="flex lg:hidden justify-center">
          <li>
            <a href='https://github.com/bherthchavez' target='_blank' rel='noreferrer noopener' className='transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300 flex justify-between items-center w-full text-gray-500 hover:text-[#d19a66]'>
              <FaGithub size={20} className='m-4 shadow-xl' />

            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/julbert-pruel-65a975129/' target='_blank' rel='noreferrer noopener' className='transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300 flex justify-between items-center w-full text-gray-500 hover:text-[#d19a66]'>
              <FaLinkedinIn size={20} className='m-4 shadow-xl' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/bherth_chavez/' target='_blank' rel='noreferrer noopener' className='flex justify-between items-center w-full text-gray-500 hover:text-[#d19a66]' >
              <BsInstagram size={20} className='m-4 shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' />
            </a>
          </li>
          <li>
            <a href={Resume} title='Download Resume' className='flex justify-between items-center w-full text-gray-500 hover:text-[#d19a66] transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300' download>
              <BsFillPersonLinesFill size={20} className='m-4 shadow-xl' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );


}

export default About;