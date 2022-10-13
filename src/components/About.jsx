import React from "react";
import Typed from 'react-typed';

const About = () => {
return ( 
    <div name='about' className='text-white'>
      <div className='max-w-[800px] mt-[-70px] w-full h-screen mx-auto text-left flex flex-col justify-center px-4'>
    
        <div className='flex flex-col justify-center'>
        <div className="rounded-xl  overflow-hidden shadow-xl max-w-[800px] ">
        <div className=" group  bg-[#21252b] h-10 rounded-t-xl">
        <button className='bg-[#f96256] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
        <button className='bg-[#fdbc3d] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
        <button className='bg-[#33c948] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
        </div>
        <div className="bg-[#343943]">
            <div className="text-start px-3 pb-6 pt-2">
            <div className='flex'>
            <p className="mt-2 text-white pr-2">&gt;  </p>
            <p className="mt-2 font-light text-white">currentLocation</p>
            </div>
            <p className="font-light text-[#d19a66] ml-3">'Makati City, Philippines'</p>
            <div className='flex'>
            <p className="mt-2 text-white pr-2">&gt;  </p>
            <p className="mt-2 font-light text-white">contactInfo</p>
            </div>
            <p className="font-light text-[#d19a66] ml-3">['bherthchavez@gmail.com', 'LinkedIn, 'github']</p>
           
            <div className='flex'>
            <p className="mt-2 text-white pr-2">&gt;  </p>
            <p className="mt-2 font-light text-white">my.resume</p>
            </div>
            <p className="font-light text-[#d19a66] ml-3">'Julbert.pdf'</p>

            <div className='flex'>
            <p className="mt-2 text-white pr-2">&gt;  </p>
            <p className="mt-2 font-light text-white"> my.education</p>
            </div>
            <p className="font-light text-[#d19a66] ml-3"> 'BS in Information Technology - Asian Development Foundation College of Tacloban City, Philippines'</p>
           
            <div className='flex'>
            <p className="mt-2 text-white pr-2">&gt;  </p>
            <p className="mt-2 font-light text-white"> my.skills</p>
            </div>
            <p className="font-light text-[#d19a66] ml-3">['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'React', 'Node JS', 'Mongo DB', 'MySQL', 'git']</p>

            <div className='flex'>
            <p className="mt-2 text-white pr-2">&gt;  </p>
            <Typed
          className='mt-2 font-light text-white'
            strings={['']}
            typeSpeed={120}
          />
            </div>
        </div>
        </div>

        </div>
        </div>
      </div>
    </div>
);


}

export default About;