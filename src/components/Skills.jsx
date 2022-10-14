import React from 'react';
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

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen text-gray-300'>
            <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline'>Skills</p>
                    <p className='py-4'> These are the technologies I've worked with</p>
                </div>

                <div className='flex flex-col justify-center'>
                    <div className="rounded-xl overflow-hidden shadow-xl max-w-[800px] ">
                        <div className=" bg-[#21252b] h-10 rounded-t-xl">
                            <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
                            <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
                            <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
                        </div>
                        <div className="bg-[#343943]">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-6">
                                <div className='h-auto px-4  pt-3'>
                                    <div className='flex'>
                                        <img className='w-7 h-7 mx-0' src={Folder} alt="HTML icon" />
                                        <p className='ml-2 text-[#f19947] text-sm mt-2 md:mt-0 md:text-lg'>my-skills</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={HTML} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>html</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={CSS} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>css</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={JavaScript} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>javascript</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Tailwind} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>tailwind</p>
                                    </div>
                                    <div className='flex ml-3 my-4'>
                                        <img className='w-7 h-6 mx-0' src={Bootstrap} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>bootstrap</p>
                                    </div>
                                </div>

                                <div className='h-auto px-4'>
                                    <div className='flex my-4'>
                                        <img className='w-7 h-7 mx-0' src={ReactImg} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>react.js</p>
                                    </div>
                                    <div className='flex my-4'>
                                        <img className='w-7 h-7 mx-0' src={Node} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>node.js</p>
                                    </div>
                                    <div className='flex my-4'>
                                        <img className='w-7 h-7 mx-0' src={Mongo} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>mongoDB</p>
                                    </div>
                                    <div className='flex my-4'>
                                        <img className='w-7 h-7 mx-0' src={MySQL} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>mysql</p>
                                    </div>
                                    <div className='flex xmy-4'>
                                        <img className='w-7 h-7 mx-0' src={Wordpress} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>wordpress</p>
                                    </div>
                                </div>

                                <div className='h-auto px-4 pb-6'>
                                    <div className='flex ml-3 md:ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Heroku} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>heroku</p>
                                    </div>
                                    <div className='flex ml-3 md:ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Netlify} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>netlify</p>
                                    </div>
                                    <div className='flex ml-3 md:ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={GitHub} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>github</p>
                                    </div>
                                    <div className='flex ml-3 md:ml-3 my-4'>
                                        <img className='w-7 h-7 mx-0' src={Git} alt="HTML icon" />
                                        <p className='ml-2 text-gray-400 text-sm pt-1'>.git</p>
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
