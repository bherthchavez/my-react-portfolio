import React from "react";
const About = () => {
  return (

    <div className='max-w-[800px] h-[100px] mx-auto text-center pt-8'>
      <a href='mailto:bherthchavez@gmail.com' target='_blank' rel='noreferrer noopener' className=' text-gray-400 hover:text-[#d19a66] '>
        ⓒ {new Date().getFullYear()} Julbert Pruel
      </a>
    </div>
  );


}

export default About;