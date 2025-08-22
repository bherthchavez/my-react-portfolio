
import React, { useEffect, useState } from "react";
import Folder from '../assets/folder.png';
import ExpContent from "./ExpContent";
import { ExpData } from "./ExpData";
import Aos from "aos";
import "aos/dist/aos.css";

const TABS = [
  { label: 'Optum', short: 'O..' },
  { label: 'Alftoon', short: 'A..' },
  { label: 'SMIT', short: 'S..' },
  { label: 'Blue Media', short: 'B..' },
  { label: 'Deugro', short: 'D..' },
  { label: 'Gatessoft', short: 'G..' },
];

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [nav, setNav] = useState(0);

  // Render navigation tabs (desktop or mobile)
  const renderTabs = (isMobile = false) => (
    <div className={`text-start bg-[#2b2f37] ${isMobile ? 'flex md:hidden text-xs text-gray-500' : 'hidden md:flex'}`}>
      {TABS.map((tab, idx) => {
        const isActive = nav === idx;
        const baseTabClass =
          'flex-grow ' +
          (isActive
            ? 'border-b-[1px] border-gray-400'
            : 'border-y-[1px]' +
              (idx < TABS.length - 1 ? ' border-r-[1px]' : '') +
              ' border-gray-900 hover:border-gray-700');
        const baseSpanClass =
          'text-xs uppercase px-3 py-[13px] flex cursor-pointer ' +
          (isActive
            ? 'hover:bg-[#343943] bg-[#343943]'
            : 'border-b-2 border-transparent py-3 hover:bg-[#3d434e] bg-[#21252b]');
        return (
          <div className={baseTabClass} key={tab.label}>
            <span
              onClick={() => setNav(idx)}
              className={baseSpanClass}
            >
              <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt="HTML icon" />
              {isMobile ? tab.short : tab.label}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div name='experience' className='w-full h-screen text-gray-300'>
      <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center h-full'>
        {/* Section Header */}
        <div data-aos="fade-up">
          <p className='text-2xl md:text-3xl font-bold inline'>Experience</p>
          <p className='py-1 md:py-4 text-sm md:text-base'>Relevant Work Experience</p>
        </div>
        {/* Experience Card */}
        <div data-aos="fade-up" data-aos-delay="100" className='flex flex-col justify-center'>
          <div className="rounded-xl overflow-hidden shadow-xl max-w-[800px]">
            {/* Card Header Dots */}
            <div className="bg-[#21252b] h-10 rounded-t-xl flex items-center">
              <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
              <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
              <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
            </div>
            {/* Desktop Tabs */}
            {renderTabs(false)}
            {/* Mobile Tabs */}
            {renderTabs(true)}
            {/* Experience Content */}
            <div className="bg-[#343943]">
              <div className="text-start text-sm">
                <div className="flex items-start">
                  <div className="flex mb-4">
                    {/* Timeline/Numbers */}
                    <div className='h-auto pt-3 mx-3'>
                      <ul className='text-center text-gray-500'>
                        {Array.from({ length: 18 }, (_, i) => (
                          <li key={i}>{i + 1}</li>
                        ))}
                      </ul>
                    </div>
                    {/* Experience Details */}
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
};

export default About;