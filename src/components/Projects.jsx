import React, { useEffect, useState } from 'react';
import Acc1 from '../assets/el-4.PNG';
import hr1 from '../assets/hr1.PNG';
import Folder from '../assets/folder.png';
import Keep from '../assets/keep.png';
import TicTacHome from '../assets/TicTacHome.png';
import TicTacGame from '../assets/TicTacGame.png';
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {

    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);


    const [nav, setNav] = useState(0);

    const handleNavA = () => {
        setNav(0);
    };
    const handleNavS = () => {
        setNav(1);
    };
    const handleNavG = () => {
        setNav(2);
    };

    return (
        <div name='projects' className={'w-full h-auto sm:h-screen text-gray-300 mt-28 md:mt-0'}>
            <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center h-full'>
                <div data-aos="fade-up">
                    <p className='text-2xl md:text-3xl font-bold inline'>Current Projects</p>
                    <p className='py-1 md:py-4 text-sm md:text-base'>(more coming soon)</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col justify-center'>
                    <div className="rounded-xl overflow-hidden text-sm sm:text-xm shadow-xl max-w-[800px] ">
                        <div className=" bg-[#21252b] h-10 rounded-t-xl">
                            <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
                            <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
                            <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
                        </div>
                        <div className="hidden sm:flex text-start bg-[#2b2f37]">
                            <div className={nav === 0 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                                <span onClick={handleNavA} className={nav === 0 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : 'cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                                    <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Accounting
                                </span>
                            </div>

                            <div className={nav === 1 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                                <span onClick={handleNavS} className={nav === 1 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                                    <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> HR
                                </span>
                            </div>
                            <div className={nav === 2 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                                <span onClick={handleNavG} className={nav === 2 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                                    <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Google Keep Clone
                                </span>
                            </div>
                            <div className={nav === 3 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                                <span onClick={() => setNav(3)} className={nav === 3 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                                    <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Tic Tac Toea
                                </span>
                            </div>
                        </div>


                        <div className="flex sm:hidden text-start bg-[#2b2f37]">
                            <div className={nav === 0 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                                <span onClick={handleNavA} className={nav === 0 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : 'cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                                    <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Acc..
                                </span>
                            </div>

                            <div className={nav === 1 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                                <span onClick={handleNavS} className={nav === 1 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                                    <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> HR..
                                </span>
                            </div>
                            <div className={nav === 2 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                                <span onClick={handleNavG} className={nav === 2 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                                    <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Goo..
                                </span>
                            </div>
                            <div className={nav === 3 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                                <span onClick={() => setNav(3)} className={nav === 3 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                                    <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Tic..
                                </span>
                            </div>
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

                                                {nav !== 2 && nav !== 3
                                                    && <>
                                                        <li> 15 </li>
                                                        <li> 16 </li>
                                                        <li> 17 </li>
                                                        <li> 18 </li>
                                                        <li> 19 </li>
                                                        <li> 20 </li>
                                                        <li> 21 </li>
                                                        <li> 22 </li>
                                                    </>

                                                }
                                            </ul>
                                        </div>
                                        {nav === 0 ?
                                            <div className='h-auto text-start  mx-2 pt-3'>
                                                <p className='text-gray-500'> {'/* EL - Accounting Cloud Based */'} </p>
                                                <div className='flex'>
                                                    <p className='text-[#d19a66] md:mt-[25px] font-bold'> Accouting_Details =  </p>
                                                    <p className='text-gray-300 ml-2 md:mt-[25px]'>  {'{'} </p>
                                                </div>
                                                <div className='flex'>
                                                    <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> project-for: </p>
                                                    <p className='text-gray-300 ml-1 mt-[15px] '> AL KATHIRI GROUPS, </p>
                                                </div>
                                                <div className='flex'>
                                                    <p className='text-[#d19a66] ml-1 md:ml-7 mt-[3px] '> location: </p>
                                                    <p className='text-gray-300 ml-1 mt-[3px] '> Doha, Qatar, </p>
                                                </div>
                                                <div className='flex'>
                                                    <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> description: </p>
                                                    <p className='text-gray-300 ml-1 mt-[15px] '> It tracks income and  </p>
                                                </div>
                                                <p className='text-gray-300 ml-1 md:ml-7'>  expenses from
                                                    business bank accounts and can approve and
                                                    print bills and payment vouchers, </p>
                                                <div className='flex'>
                                                    <p className='text-[#d19a66] ml-1 md:ml-7 mt-[17px] '>  built with: </p>
                                                    <p className='text-gray-300 ml-1 mt-[17px] '> NODE JS, EXPRESS </p>
                                                </div>
                                                <p className='text-gray-300 ml-1  md:ml-7 mt-[3px] '> BOOTSTRAP, MONGO DB, HEROKU, </p>
                                                <p className='text-gray-00 ml-3 mt-[10px] mb-12'>  {'};'} </p>

                                                <div className='flex flex-col '>
                                                    <a href='https://www.suwaija-erp.com/' target='_blank' rel='noreferrer noopener'
                                                        className='text-[#4888f0] hover:text-blue-600 underline font-bold'> View Live Demo </a>
                                                    <p className='text-gray-500 font-light text-xs'>Use credential below to login:</p>
                                                </div>
                                                <div className='flex'>
                                                    <p className='text-gray-500  mt-[10px] '>  Username: </p>
                                                    <p className='text-gray-300 mt-[10px] '> user </p>
                                                </div>
                                                <div className='flex'>
                                                    <p className='text-gray-500  '>  Password: </p>
                                                    <p className='text-gray-300 '> user </p>
                                                </div>

                                            </div>
                                            :
                                            nav === 1 ?
                                                <div className='h-auto text-start  mx-2 pt-3'>
                                                    <p className='text-gray-500'> {'/* HR System */'} </p>
                                                    <div className='flex'>
                                                        <p className='text-[#d19a66] md:mt-[25px] font-bold'> HR_Details = </p>
                                                        <p className='text-gray-300 ml-2 md:mt-[25px]'>  {'{'} </p>
                                                    </div>
                                                    <div className='flex'>
                                                        <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> project-for: </p>
                                                        <p className='text-gray-300 ml-1 mt-[15px] '> Alftoon Marketing, </p>
                                                    </div>
                                                    <div className='flex'>
                                                        <p className='text-[#d19a66] ml-1 md:ml-7 mt-[3px] '> location: </p>
                                                        <p className='text-gray-300 ml-1 mt-[3px] '> Doha, Qatar, </p>
                                                    </div>
                                                    <div className='flex'>
                                                        <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> description: </p>
                                                        <p className='text-gray-300 ml-1 mt-[15px] '> Managing employee details   </p>
                                                    </div>
                                                    <p className='text-gray-300 ml-1 md:ml-7'>  and files. Secure file storage using Cloudinary. The system provides a mobile-friendly interface,</p>
                                                    <div className='flex'>
                                                        <p className='text-[#d19a66] ml-1 md:ml-7 mt-[17px] '>  built with: </p>
                                                        <p className='text-gray-300 ml-1 mt-[17px] '> MONGO DB, EXPRESS,</p>
                                                    </div>
                                                    <p className='text-gray-300 ml-1  md:ml-7 mt-[3px] '>  REACT, NODE, REDUX, TAILWIND. RENDER </p>
                                                    <p className='text-gray-00 ml-3 mt-[10px] mb-10'>  {'};'} </p>


                                                    <div className='flex flex-col'>
                                                        <a href='https://hr-mern-frontend.onrender.com/' target='_blank' rel='noreferrer noopener'
                                                            className='text-[#4888f0] hover:text-blue-600 underline font-bold'> View Live Demo </a>
                                                        <p className='text-gray-500 font-light text-xs'>Use credential below to login:</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <p className='text-gray-500  mt-[10px] '>  Username: </p>
                                                        <p className='text-gray-300 mt-[10px] '> admin </p>
                                                    </div>
                                                    <div className='flex'>
                                                        <p className='text-gray-500  '>  Password: </p>
                                                        <p className='text-gray-300 '> admin </p>
                                                    </div>

                                                </div>
                                                : nav === 2 ?
                                                    <div className='h-auto text-start  mx-2 pt-3'>
                                                        <p className='text-gray-500'> {'/* Keep Clone */'} </p>
                                                        <div className='flex'>
                                                            <p className='text-[#d19a66] md:mt-[25px] font-bold'> Goole_Keep_Clone = </p>
                                                            <p className='text-gray-300 ml-2 md:mt-[25px]'>  {'{'} </p>
                                                        </div>
                                                        <div className='flex'>
                                                            <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> description: </p>
                                                            <p className='text-gray-300 ml-1 mt-[15px] '>A Simple Google Keep Clone </p>
                                                        </div>
                                                        <div className='flex'>
                                                            <p className='text-[#d19a66] ml-1 md:ml-7 mt-[17px] '>  built with: </p>
                                                            <p className='text-gray-300 ml-1 mt-[17px] '> React, Vite, TypeScript </p>
                                                        </div>
                                                        <p className='text-gray-300 ml-1  md:ml-7 mt-[3px] '>Redux, Tailwind, Firebase and Vercel </p>
                                                        <p className='text-gray-00 ml-3 mt-[10px] mb-10'>  {'};'} </p>


                                                        <div className='flex flex-col'>
                                                            <a href='https://react-ts-redux-google-keep.vercel.app/' target='_blank' rel='noreferrer noopener'
                                                                className='text-[#4888f0] hover:text-blue-600 underline font-bold'> View Live Demo </a>
                                                        </div>

                                                    </div>

                                                    : <div className='h-auto text-start  mx-2 pt-3'>
                                                        <p className='text-gray-500'> {'/* Simple Tic Tac Toe Game */'} </p>
                                                        <div className='flex'>
                                                            <p className='text-[#d19a66] md:mt-[25px] font-bold'> Tic_Tac_Toe_Game = </p>
                                                            <p className='text-gray-300 ml-2 md:mt-[25px]'>  {'{'} </p>
                                                        </div>
                                                        <div className='flex'>
                                                            <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> description: </p>
                                                            <p className='text-gray-300 ml-1 mt-[15px] '>A Simple Tic Tac Toe Game </p>
                                                        </div>
                                                        <div className='flex'>
                                                            <p className='text-[#d19a66] ml-1 md:ml-7 mt-[17px] '>  built with: </p>
                                                            <p className='text-gray-300 ml-1 mt-[17px] '> MERN Stack, Vite,  </p>
                                                        </div>
                                                        <p className='text-gray-300 ml-1  md:ml-7 mt-[3px] '>Tailwind, Vercel and Render  </p>
                                                        <p className='text-gray-00 ml-3 mt-[10px] mb-10'>  {'};'} </p>


                                                        <div className='flex flex-col'>
                                                            <a href='https://tic-tac-toe-mern.vercel.app/' target='_blank' rel='noreferrer noopener'
                                                                className='text-[#4888f0] hover:text-blue-600 underline font-bold'> View Live Demo </a>
                                                        </div>

                                                    </div>
                                        }

                                    </div>
                                </div>

                                <div className={`flex justify-center m-auto ${nav === 3 && 'h-60'} gap-2 p-3`}>

                                    {nav === 0 ?
                                        <>
                                            <img className='rounded-md border-2 border-slate-700' src={Acc1} alt="/" />
                                        </>
                                        : nav === 1 ?
                                            <>
                                                <img className='rounded-md border-2 border-slate-700' src={hr1} alt="/" />
                                            </>

                                            : nav === 2 ?
                                                <img className='h-52 rounded-md border-2 border-slate-700' src={Keep} alt="/" />

                                                : <>
                                                    <img className='rounded-md border-2 border-slate-700' src={TicTacHome} alt="/" />
                                                    <img className='rounded-md border-2 border-slate-700' src={TicTacGame} alt="/" />
                                                </>
                                    }




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
