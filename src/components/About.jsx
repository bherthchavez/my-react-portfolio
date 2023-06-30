import React, { useEffect } from "react";
import Typed from 'react-typed';
import Resume from '../assets/Julbert Pruel.pdf';
import Aos from "aos";
import "aos/dist/aos.css";


const About = (props) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div name='about' className={props.isNav ? 'w-full h-screen text-gray-300 blur' : 'w-full h-screen text-gray-300'}>
      <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div data-aos="fade-up">
          <p className='text-2xl md:text-3xl font-bold inline'>Contact</p>
          <p className='py-1 md:py-4 text-sm md:text-base '> I am available for hire and open to any ideas of cooperation.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col justify-center'>
          <div className="rounded-xl overflow-hidden shadow-xl max-w-[800px] ">
            <div className=" bg-[#21252b] h-10 rounded-t-xl">
              <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
              <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
              <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
            </div>
            <div className="bg-[#343943]">
              <div className="text-start px-3 pb-6 pt-2 text-sm">
                <div className='flex'>
                  <p className="mt-2 text-gray-300 pr-2">&gt;  </p>
                  <p className="mt-2 font-light text-gray-300">bherth.currentLocation</p>
                </div>
                <p className="font-light text-[#d19a66] ml-3">'Makati City, Philippines'</p>
                <div className='flex'>
                  <p className="mt-2 text-gray-300 pr-2">&gt;  </p>
                  <p className="mt-2 font-light text-gray-300">bherth.contactInfo</p>
                </div>
                <div className="md:flex">
                  <div className="flex">
                    <p className="font-light text-[#d19a66] ml-3">{'['}'</p>
                    <a href='mailto:bherthchavez@gmail.com' target='_blank' rel='noreferrer noopener' className="font-light text-[#d19a66] hover:text-blue-500">bherthchavez@gmail.com</a>
                    <p className="font-light text-[#d19a66]">',</p>
                  </div>
                  <div className="flex">
                    <p className="font-light text-[#d19a66] ml-3">'</p>
                    <a href='https://www.linkedin.com/in/julbert-pruel-65a975129/' target='_blank' rel='noreferrer noopener' className="font-light text-[#d19a66] hover:text-blue-500">LinkedIn</a>
                    <p className="font-light text-[#d19a66]">',</p>
                  </div>
                  <div className="flex">
                    <p className="font-light text-[#d19a66] ml-3">'</p>
                    <a href='https://github.com/bherthchavez' target='_blank' rel='noreferrer noopener' className="font-light text-[#d19a66] hover:text-blue-500">github</a>
                    <p className="font-light text-[#d19a66]">'{']'}'</p>
                  </div>
                </div>
                <div className='flex'>
                  <p className="mt-2 text-gray-300 pr-2">&gt;  </p>
                  <p className="mt-2 font-light text-gray-300">bherth.contact.no</p>
                </div>
                <p className="font-light text-[#d19a66] ml-3">'09270075145'</p>
                <div className='flex'>
                  <p className="mt-2 text-gray-300 pr-2">&gt;  </p>
                  <p className="mt-2 font-light text-gray-300">bherth.resume</p>
                </div>
                <div className="flex">
                  <p className="font-light text-[#d19a66] ml-3">'</p>
                  <a download="resume.pdf" target="_blank" rel='noreferrer noopener' href={Resume} className="font-light text-[#d19a66] hover:text-blue-500">Julbert.pdf</a>
                  <p className="font-light text-[#d19a66]">',</p>
                </div>
                <div className='flex'>
                  <p className="mt-2 text-gray-300 pr-2">&gt;  </p>
                  <p className="mt-2 font-light text-gray-300"> bherth.education</p>
                </div>
                <p className="font-light text-[#d19a66] ml-3"> 'BS in Information Technology - Asian Development Foundation College of Tacloban City, Philippines'</p>
                <div className='flex'>
                  <p className="mt-2 text-gray-300 pr-2">&gt;  </p>
                  <Typed
                    className='mt-2 font-light text-gray-300'
                    strings={['Hire Me  ↓ ↓', 'Contact Me  ↓ ↓', 'Say Hello  ↓ ↓']}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"  className="pt-9 mx-auto md:m-0">
          <a href='mailto:bherthchavez@gmail.com' target='_blank' rel='noreferrer noopener' className='md:text-base text-sm border-[1px] md:border-2 group px-11 flex justify-between text-center items-center border-[#d19a66] w-40 rounded-md font-medium  py-3 text-[#d19a66] hover:bg-[#343943] shadow-xl'>
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );


}

export default About;