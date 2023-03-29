
import React, { useEffect, useState } from "react";
import Folder from '../assets/folder.png';
import ExpContent from "./ExpContent";
import {ExpData} from "./ExpData";
import Aos from "aos";
import "aos/dist/aos.css";

const About = (props) => {
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
  const handleNavB = () => {
    setNav(2);
  };
  const handleNavD = () => {
    setNav(3);
  };
  const handleNavG = () => {
    setNav(4);
  };

  return (
    <div name='experience' className={props.isNav ? 'w-full h-screen text-gray-300 blur-sm' : 'w-full h-screen text-gray-300'}>
      <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div data-aos="fade-up">
          <p className='text-2xl md:text-3xl font-bold inline'>Experience</p>
          <p className='py-1 md:py-4 text-sm md:text-base '> Relevant Work Experience</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col justify-center'>
          <div className="rounded-xl overflow-hidden shadow-xl max-w-[800px] ">
            <div className=" bg-[#21252b] h-10 rounded-t-xl">
              <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
              <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
              <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
            </div>
            <div className="hidden md:flex text-start bg-[#2b2f37]">
              <div className={nav === 0 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavA} className={nav === 0 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : 'cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Alftoon
                </span>
              </div>

              <div className={nav === 1 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavS} className={nav === 1 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> SMIT
                </span>
              </div>
              <div className={nav === 2 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavB} className={nav === 2 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Blue Media
                </span>
              </div>
              <div className={nav === 3 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavD} className={nav === 3 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Deugro
                </span>
              </div>
              <div className={nav === 4 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavG} className={nav === 4 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> Gatessoft
                </span>
              </div>
            </div>

            <div className="flex md:hidden text-start text-xs text-gray-500 bg-[#2b2f37]">
              <div className={nav === 0 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavA} className={nav === 0 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : 'cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> A..
                </span>
              </div>

              <div className={nav === 1 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavS} className={nav === 1 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> S..
                </span>
              </div>
              <div className={nav === 2 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavB} className={nav === 2 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> B..
                </span>
              </div>
              <div className={nav === 3 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavD} className={nav === 3 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> D..
                </span>
              </div>
              <div className={nav === 4 ? 'flex-grow border-b-[1px] border-gray-400' : 'flex-grow border-y-[1px]  border-gray-900 hover:border-gray-700'}>
                <span onClick={handleNavG} className={nav === 4 ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943]  cursor-pointer' : ' cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]'}>
                  <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" /> G..
                </span>
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

                    <ExpContent
                      position={ExpData[nav].position}
                      companyName={ExpData[nav].companyName}
                      website={ExpData[nav].website}
                      date={ExpData[nav].date}
                      location={ExpData[nav].location}
                      jd={ExpData[nav].jd}

                    />
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