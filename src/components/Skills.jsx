import React, { useEffect } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Folder from '../assets/folder.png';
import Bootstrap from '../assets/bootstrap.png';
import Git from '../assets/git.png';
import Heroku from '../assets/heroku.png';
import Netlify from '../assets/netlify.png';
import MySQL from '../assets/mysql.png';
import Wordpress from '../assets/wordpress.png';
import Premiere from '../assets/Premiere.png';
import Ae from '../assets/ae.png';
import Ps from '../assets/ps.png';
import Xd from '../assets/xd.png';
import Jquery from '../assets/jquery.png';
import Redux from '../assets/redux.png';
import Express from '../assets/express.png';
import Render from '../assets/render.png';
import vercel from '../assets/vercel.jpg';
import vite from '../assets/Vitejs.png';
import ts from '../assets/Typescript.png';
import next from '../assets/nextjs.png';
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {

    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);

    return (
        <div name='skills' className={'w-full h-auto sm:h-screen text-gray-300 mt-24 md:mt-0'}>
            <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center h-full'>
                <div data-aos="fade-up">
                    <p className='text-2xl md:text-3xl font-bold inline'>Skills</p>
                    <p className='py-1 md:py-4 text-sm md:text-base '> These are the technologies I've worked with</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col justify-center'>
                    <div className="rounded-xl overflow-hidden shadow-xl max-w-[800px] ">
                        <div className=" bg-[#21252b] h-10 rounded-t-xl">
                            <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
                            <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
                            <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
                        </div>
                        <div className="bg-[#343943]">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-6">
                                <div className='h-auto px-4  pt-3 text-xs'>
                                    <div className='flex items-center'>
                                        <img className='w-7 h-7 mx-0 opacity-70' src={Folder} alt="HTML icon" />
                                        <p className='ml-2 text-[#d19a66] text-xs mt-2 md:mt-0 md:text-sm'>Programming Languages</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={HTML} alt="html icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>html</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={CSS} alt="css icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>css</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={JavaScript} alt="javascript icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>javascript</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={ts} alt="javascript icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>typescript</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={MySQL} alt="mysql icon" />
                                        <p className='ml-2 text-gray-400 pt-1'>mysql</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Mongo} alt="mongoDB icon" />
                                        <p className='ml-2 text-gray-400 pt-1'>mongoDB</p>
                                    </div>

                                    <div className='hidden md:flex items-center my-4  mt-6'>
                                        <img className='w-7 h-7 mx-0 opacity-70' src={Folder} alt="HTML icon" />
                                        <p className='ml-2 text-[#d19a66] text-xs mt-2 md:mt-0 md:text-sm'>Design Tools</p>
                                    </div>

                                    <div className='hidden md:flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-1' src={Xd} alt="XD icon" />
                                        <img className='w-7 h-7 mx-1' src={Ps} alt="Photoshop icon" />
                                        <img className='w-7 h-7 mx-1' src={Ae} alt="AE icon" />
                                        <img className='w-7 h-7 mx-1' src={Premiere} alt="Premiere icon" />
                                    </div>
                                    
                                    

                                </div>

                                <div className='h-auto px-4 pt-3 text-xs'>
                                    <div className='flex items-center'>
                                        <img className='w-7 h-7 mx-0 opacity-70' src={Folder} alt="HTML icon" />
                                        <p className='ml-2 text-[#d19a66] text-xs mt-2 md:mt-0 md:text-sm'>Libraries & Frameworks</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Redux} alt="Express icon" />
                                        <p className='ml-2 text-gray-400 pt-1'>Redux</p>
                                    </div>
                                   
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Tailwind} alt="tailwind icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>tailwind</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-6 mx-0' src={Bootstrap} alt="bootstrap icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>bootstrap</p>
                                    </div>

                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={ReactImg} alt="react icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>react</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={next} alt="react icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>next</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Node} alt="node icon" />
                                        <p className='ml-2 text-gray-400 pt-1'>node</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Express} alt="Express icon" />
                                        <p className='ml-2 text-gray-400 pt-1'>express</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Jquery} alt="Jquery icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>jQuery</p>
                                    </div>

                                </div>

                                <div className='h-auto px-4 pt-3 pb-6 text-xs'>
                                    <div className='flex items-center'>
                                        <img className='w-7 h-7 mx-0 opacity-70' src={Folder} alt="HTML icon" />
                                        <p className='ml-2 text-[#d19a66] text-xs mt-2 md:mt-0 md:text-sm'>Tools & Platforms</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Git} alt="git icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>.git</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={GitHub} alt="github icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>github</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={vite} alt="github icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>vite</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Netlify} alt="netlify icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>netlify</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Heroku} alt="heroku icon" />
                                        <p className='ml-2 text-gray-400 pt-1'>heroku</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Render} alt="heroku icon" />
                                        <p className='ml-2 text-gray-400 pt-1'>render</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={vercel} alt="wordpress icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>vercel</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Wordpress} alt="wordpress icon" />
                                        <p className='ml-2 text-gray-400  pt-1'>wordpress</p>
                                    </div>
                                    <div className='md:hidden flex items-center my-4'>
                                        <img className='w-7 h-7 mx-0 opacity-70' src={Folder} alt="HTML icon" />
                                        <p className='ml-2 text-[#d19a66] text-xs mt-2 md:mt-0 md:text-sm'>Design Tools</p>
                                      </div>
                                      <div className='md:hidden flex ml-0 md:ml-3'>
                                        <img className='w-7 h-7 mx-[1px] md:mx-1' src={Xd} alt="XD icon" />
                                        <img className='w-7 h-7 mx-[1px] md:mx-1' src={Ps} alt="Photoshop icon" />
                                        <img className='w-7 h-7 mx-[1px] md:mx-1' src={Ae} alt="AE icon" />
                                        <img className='w-7 h-7 mx-[1px] md:mx-1' src={Premiere} alt="Premiere icon" />
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
