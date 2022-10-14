import React from "react";
import Typed from 'react-typed';
const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col justify-center'>
          <div className="rounded-xl overflow-hidden shadow-xl max-w-[800px] ">
            <div className=" bg-[#21252b] h-10 rounded-t-xl">
              <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
              <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
              <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
            </div>
            <div className="bg-[#343943]">
              <div className="text-start px-3 pb-6 pt-2">
                <div className='flex'>
                  <p className="mt-2 text-white pr-2">&gt;  </p>
                  <p className="mt-2 font-light text-white">bherth.currentLocation</p>
                </div>
                <p className="font-light text-[#d19a66] ml-3">'Makati City, Philippines'</p>
                <div className='flex'>
                  <p className="mt-2 text-white pr-2">&gt;  </p>
                  <p className="mt-2 font-light text-white">bherth.contactInfo</p>
                </div>
                <p className="font-light text-[#d19a66] ml-3">['bherthchavez@gmail.com', 'LinkedIn, 'github']</p>

                <div className='flex'>
                  <p className="mt-2 text-white pr-2">&gt;  </p>
                  <p className="mt-2 font-light text-white">bherth.resume</p>
                </div>
                <p className="font-light text-[#d19a66] ml-3">'Julbert.pdf'</p>

                <div className='flex'>
                  <p className="mt-2 text-white pr-2">&gt;  </p>
                  <p className="mt-2 font-light text-white"> bherth.education</p>
                </div>
                <p className="font-light text-[#d19a66] ml-3"> 'BS in Information Technology - Asian Development Foundation College of Tacloban City, Philippines'</p>
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