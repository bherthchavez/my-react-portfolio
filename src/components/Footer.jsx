import React from "react";
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Netlify from '../assets/netlify.png';
const About = (props) => {
  return (

    <div className={props.isNav ? 'max-w-[800px] h-[150px] mx-auto pt-4 blur' : 'max-w-[800px] h-[150px] mx-auto pt-4'}>
      <div className="flex mt-0 justify-center items-center mb-1">
        <span class="my-auto mx-2 text-gray-400 text-sm"> Build with </span>
      </div>
      <div className="flex mt-0 justify-center items-center ">
       <span className="w-5 h-5">
           <img  src={ReactImg} alt="react icon" />
        </span>
        <span class="my-auto mx-2 text-gray-500"> + </span>
        <span className="w-5 h-5">
           <img  src={Tailwind} alt="Tailwind icon" />
        </span>
        <span class="my-auto mx-2 text-gray-500"> + </span>
        <span className="w-5 h-5">
           <img  src={Netlify} alt="Netlify icon" />
        </span>
      </div>
      <div className="mt-6 text-center">
        <p className=' text-gray-400'>
          ⓒ {new Date().getFullYear()} Julbert Pruel
        </p>
      </div>
    </div>
  );


}

export default About;