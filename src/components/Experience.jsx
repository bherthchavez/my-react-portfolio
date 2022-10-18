
import React from "react";
import Folder from '../assets/folder.png';

const About = () => {
  return (
    <div name='experience' className='w-full h-screen text-gray-300'>
      <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div>
          <p className='text-2xl md:text-3xl font-bold inline'>Experience</p>
          <p className='py-1 md:py-4 text-sm md:text-base '> Relevant Work Experience</p>
        </div>
        <div className='flex flex-col justify-center'>
          <div className="rounded-xl overflow-hidden shadow-xl max-w-[800px] ">
            <div className=" bg-[#21252b] h-10 rounded-t-xl">
              <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
              <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
              <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
            </div>
              <div className="hidden md:flex text-start bg-[#2b2f37]">
                <div className="flex-grow border-b-[1px] border-gray-400">
                  <a href="/" className="text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] focus:border-transparent bg-[#343943]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Alftoon
                  </a>
                </div>
                <div className="flex-grow border-t-[1px] border-r-[1px] border-b-[1px] border-gray-900 hover:border-none">
                  <a href="/" className=" font-medium text-xs uppercase border-x-0 border-t-0 border-b-2 border-transparent px-3 py-3 flex hover:border-transparent hover:bg-[#3d434e] focus:border-transparent bg-[#21252b]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> SMIT
                  </a>
                </div>
                <div className="flex-grow border-t-[1px] border-b-[1px]  border-r-[1px] border-gray-900 hover:border-none">
                  <a href="/" className=" font-medium text-xs uppercase border-x-0 border-t-0 border-b-2 border-transparent px-3 py-3 flex hover:border-transparent hover:bg-[#3d434e] focus:border-transparent bg-[#21252b]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Blue Media
                  </a>
                </div>
                <div className=" flex-grow border-t-[1px]  border-r-[1px] border-b-[1px] border-gray-900 hover:border-none">
                  <a href="/" className=" font-medium text-xs uppercase border-x-0 border-t-0 border-b-2 border-transparent px-3 py-3 flex hover:border-transparent hover:bg-[#3d434e] focus:border-transparent bg-[#21252b]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> deugro
                  </a>
                </div>
                <div className="flex-grow border-t-[1px] border-b-[1px] border-gray-900 hover:border-none">
                  <a href="/" className=" font-medium text-xs uppercase border-x-0 border-t-0 border-b-2 border-transparent px-3 py-3 flex hover:border-transparent hover:bg-[#3d434e] focus:border-transparent bg-[#21252b]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> GateSoft
                  </a>
                </div>
              </div>
              <div className="flex md:hidden text-start text-xs text-gray-500 bg-[#2b2f37]">
                <div className="flex-grow border-b-[1px] border-gray-400">
                  <a href="/" className="text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] focus:border-transparent bg-[#343943]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" />A..
                  </a>
                </div>
                <div className="flex-grow border-t-[1px] border-r-[1px] border-b-[1px] border-gray-900 hover:border-none">
                  <a href="/" className=" font-medium text-xs uppercase border-x-0 border-t-0 border-b-2 border-transparent px-3 py-3 flex hover:border-transparent hover:bg-[#3d434e] focus:border-transparent bg-[#21252b]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" />S..
                  </a>
                </div>
                <div className="flex-grow border-t-[1px] border-b-[1px]  border-r-[1px] border-gray-900 hover:border-none">
                  <a href="/" className=" font-medium text-xs uppercase border-x-0 border-t-0 border-b-2 border-transparent px-3 py-3 flex hover:border-transparent hover:bg-[#3d434e] focus:border-transparent bg-[#21252b]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" />B..
                  </a>
                </div>
                <div className=" flex-grow border-t-[1px]  border-r-[1px] border-b-[1px] border-gray-900 hover:border-none">
                  <a href="/" className=" font-medium text-xs uppercase border-x-0 border-t-0 border-b-2 border-transparent px-3 py-3 flex hover:border-transparent hover:bg-[#3d434e] focus:border-transparent bg-[#21252b]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" />D..
                  </a>
                </div>
                <div className="flex-grow border-t-[1px] border-b-[1px] border-gray-900 hover:border-none">
                  <a href="/" className=" font-medium text-xs uppercase border-x-0 border-t-0 border-b-2 border-transparent px-3 py-3 flex hover:border-transparent hover:bg-[#3d434e] focus:border-transparent bg-[#21252b]" >
                      <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" />G..
                  </a>
                </div>
              </div>
            <div className="bg-[#343943]">
              <div className="text-start text-sm">
                <div className="flex items-start">
                  <div className="flex mb-4 ">
                                     <div className='h-auto pt-3 mx-3 '>
                                     <ul className='text-center text-gray-500 '>
                                        <li> 1 </li>
                                        <li> 2 </li>
                                        <li> 3 </li>
                                        <li> 4 </li>
                                        <li> 5 </li>
                                        <li> 6 </li>
                                        <li> 7 </li>
                                        <li> 8 </li>
                                        <li> 9 </li>
                                        <li> 10 </li>
                                        <li> 11 </li>
                                        <li> 12 </li>
                                        <li> 13 </li>
                                        <li> 14 </li>
                                        <li> 15 </li>
                                        <li> 16 </li>
                                        <li> 17 </li>
                                        <li> 18 </li>
                                     </ul>
                                     </div>
                                     <div className='h-auto text-start  mx-2 pt-3'>
                                        <div className='flex'>
                                        <p className='text-[#4888f0] md:mt-[25px]'> Front-End-Develoepr: </p>
                                        <p className='text-gray-300 ml-2 md:mt-[25px]'>  {'{'} </p>
                                        </div>
                                        <div className='flex'>
                                            <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> company_name: </p>
                                            <a href='https://alftoon.qa/' target='_blank' rel='noreferrer noopener' className='text-gray-300 ml-1 mt-[15px] hover:text-blue-500'> ALFTOON MARKETING, </a>
                                         </div>
                                         <div className='flex'>
                                            <p className='text-[#d19a66] ml-1 md:ml-7 mt-[3px] '> date: </p>
                                            <p className='text-gray-300 ml-1 mt-[3px] '> November 2021 – 2022, </p>
                                         </div>
                                         <div className='flex'>
                                            <p className='text-[#d19a66] ml-1 md:ml-7 mt-[3px] '> location: </p>
                                            <p className='text-gray-300 ml-1 mt-[3px] '> Doha, Qatar, </p>
                                         </div>
                                         <div className='flex'>
                                            <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> jd: </p>
                                            <p className='text-gray-300 ml-1 mt-[15px] '>Developed and design company website and e-commerce using WordPress. Designing landing page 
                                            for every workshop and maintained the design of e-commerce mobile app using react native. </p>
                                         </div>
                                         <p className='text-gray-00 ml-3 mt-[20px]'>  {'};'} </p>
                                    
                                     </div>
                                  </div>
                  
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