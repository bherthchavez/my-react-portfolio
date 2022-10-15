import React from 'react';
import Acc1 from '../assets/el-4.PNG';
import Acc5 from '../assets/el-5.PNG';

const Skills = () => {
    return (
        <div name='projects' className='w-full h-screen text-gray-300 mt-16 md:mt-0'>
            <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center h-full'>
                <div>
                    <p className='text-2xl md:text-4xl font-bold inline'>Current Projects</p>
                    <p className='py-1 md:py-4 text-sm md:text-base'>(more coming soon)</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className="rounded-xl overflow-hidden text-sm sm:text-xm shadow-xl max-w-[800px] ">
                        <div className=" bg-[#21252b] h-10 rounded-t-xl">
                            <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
                            <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
                            <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
                        </div>
                        <div className="bg-[#343943]">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className='h-auto border-b border-gray-600 md:border-none'>
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
                                   
                                        <p className='text-gray-500'> /* EL - Accounting Cloud Based */ </p>
                                        <div className='flex'>
                                        <p className='text-[#4888f0] md:mt-[25px]'> #EL-ACC </p>
                                        <p className='text-gray-300 ml-2 '>  {'{'} </p>
                                        </div>
                                        <div className='flex'>
                                            <p className='text-[#d6a23b] ml-1 md:ml-7 mt-[15px] '> project-for: </p>
                                            <p className='text-gray-300 ml-1 mt-[15px] '> AL KATHIRI GROUPS, </p>
                                         </div>
                                         <div className='flex'>
                                            <p className='text-[#d6a23b] ml-1 md:ml-7 mt-[3px] '> location: </p>
                                            <p className='text-gray-300 ml-1 mt-[3px] '> Doha, Qatar, </p>
                                         </div>
                                         <div className='flex'>
                                            <p className='text-[#d6a23b] ml-1 md:ml-7 mt-[10px] '> description: </p>
                                            <p className='text-gray-300 ml-1 mt-[10px] '> tracking the income  </p>
                                         </div>
                                         <p className='text-gray-300 ml-1 md:ml-7 mt-[3px] '> and expenses of business bank account's, as well as the approval and printing of created bills and payment vouchers, </p>
                                         <div className='flex'>
                                            <p className='text-[#d6a23b] ml-1 md:ml-7 mt-[10px] '> language: </p>
                                            <p className='text-gray-300 ml-1 mt-[10px] '> NODE JS, EXPRESS </p>
                                         </div>
                                         <p className='text-gray-300 ml-1  md:ml-7 mt-[3px] '> BOOTSTRAP, MONGO DB, HEROKU, </p>
                                         <p className='text-gray-00 ml-3 mt-[25px]'>  {'};'} </p>
                                    
                                     </div>
                                  </div>
                                </div>

                                <div className='h-auto'>
                                    <div className='relative'>
                                        <img className='w-17 h-17 mx-0 rotate-10 scale-[85%] translate-x-20 skew-x-30 opacity-50 hover:opacity-100 hover:transform-none' src={Acc1} alt="/" />
                                        {/* <img className='w-17 h-17 mx-0 rotate-10 scale-75 translate-x-20 skew-x-30 opacity-50 hover:opacity-100 hover:transform-none' src={Acc1} alt="/" /> */}
                                        <img className='w-17 h-17 mx-0 absolute top-32 scale-75 translate-x-20 skew-x-30 opacity-50 hover:opacity-100 hover:transform-none' src={Acc5} alt="/" />
                                        {/* <p className='ml-2 text-gray-400 text-sm pt-1'>react.js</p> */}
                                    </div>
                                
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
