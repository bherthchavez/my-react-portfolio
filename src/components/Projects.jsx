import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Folder from '../assets/folder.png';
import AccDashboard from '../assets/projects/accounting_dash.png';
import AccInv from '../assets/projects/accounting_inv.png';
import hr1 from '../assets/hr1.PNG';
import Keep from '../assets/keep.png';
import PosLanding from '../assets/projects/pos_landing.png';
import PosDashboard from '../assets/projects/pos_dashboard.png';
import Pos from '../assets/projects/pos.png';
import hr2 from '../assets/hr2.PNG';
// import TicTacHome from '../assets/TicTacHome.png';
// import TicTacGame from '../assets/TicTacGame.png';

// --- Project Data Configuration ---
const PROJECTS = [
  {
    label: 'Point of Sale System',
    short: 'POS..',
    timeline: 22,
    images: [{ src: PosLanding, alt: 'Landing Page' }, { src: PosDashboard, alt: 'Dashboard Page' }, { src: Pos, alt: 'POS Page' }],
    details: () => (
      <>
        {/* Point of Sale System */}
        <div className='flex'>
          <p className='text-[#d19a66] md:mt-[25px] font-bold'>POS_Details =</p>
          <p className='text-gray-300 ml-2 md:mt-[25px]'>{'{'}</p>
        </div>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[15px]'>project-for:</span> <span className='text-gray-300'>Biyaya - Kape Tindahan Atbp,</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[3px]'>location:</span> <span className='text-gray-300'>Tanay Rizal, Philippines,</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[15px]'>description:</span> <span className='text-gray-300'>A modern Point-of-Sale web application built with the MERN stack, Redux for state management, Vite for optimized builds, and Tailwind CSS for responsive UI design. The system enables coffee shop owners to efficiently manage their shops with features such as user authentication, shop profile customization, menu and employee management, and image uploads. Customers can also explore shop profiles and menus through a clean, public-facing interface.</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[17px]'>built with:</span> <span className='text-gray-300'>REACTJS, VITE, REDUX, NODEJS, EXPRESS, TAILWIND CSS, MONGO DB, VERCEL, RENDER,</span></p>
        <p className='text-gray-00 ml-3 mt-[10px] mb-12'>{'};'}</p>
        <div className='flex flex-col'>
          <a href='https://devbiyaya.netlify.app/' target='_blank' rel='noreferrer noopener' className='text-[#4888f0] hover:text-blue-600 underline font-bold'>Demo Landing Page</a>
          <a href='https://devbiyaya.netlify.app/login' target='_blank' rel='noreferrer noopener' className='text-[#4888f0] hover:text-blue-600 underline font-bold'>Demo Login Page</a>
          <p className='text-gray-500 font-light text-xs'>Use credential below to login:</p>
          <p><span className='text-gray-500'>Username:</span> <span className='text-gray-300'>admin</span></p>
          <p><span className='text-gray-500'>Password:</span> <span className='text-gray-300'>admin</span></p>
        </div>
      </>
    ),
  },
  {
    label: 'Accounting',
    short: 'Acc..',
    timeline: 22,
    images: [{ src: AccDashboard, alt: 'Accounting App Screenshot' }, { src: AccInv, alt: 'Accounting App Screenshot' }],
    details: () => (
      <>
        {/* EL - Accounting Cloud Based */}
        <div className='flex'>
          <p className='text-[#d19a66] md:mt-[25px] font-bold'>Accouting_Details =</p>
          <p className='text-gray-300 ml-2 md:mt-[25px]'>{'{'}</p>
        </div>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[15px]'>project-for:</span> <span className='text-gray-300'>AL KATHIRI GROUPS,</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[3px]'>location:</span> <span className='text-gray-300'>Doha, Qatar,</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[15px]'>description:</span> <span className='text-gray-300'>It tracks income and expenses from business bank accounts and can approve and print bills and payment vouchers,</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[17px]'>built with:</span> <span className='text-gray-300'>NODE JS, EXPRESS, BOOTSTRAP, MONGO DB, HEROKU,</span></p>
        <p className='text-gray-00 ml-3 mt-[10px] mb-12'>{'};'}</p>
        <div className='flex flex-col'>
          <a href='https://akg-accounting-qatar.onrender.com/' target='_blank' rel='noreferrer noopener' className='text-[#4888f0] hover:text-blue-600 underline font-bold'>View Live Demo</a>
          <p className='text-gray-500 font-light text-xs'>Use credential below to login:</p>
          <p><span className='text-gray-500'>Username:</span> <span className='text-gray-300'>user</span></p>
          <p><span className='text-gray-500'>Password:</span> <span className='text-gray-300'>user</span></p>
        </div>
      </>
    ),
  },
  {
    label: 'HR',
    short: 'HR..',
    timeline: 22,
        images: [{ src: hr1, alt: 'HR App Screenshot 1' }, { src: hr2, alt: 'HR App Screenshot 2' }],
    details: () => (
      <>
        {/* HR System */}
        <div className='flex'>
          <p className='text-[#d19a66] md:mt-[25px] font-bold'>HR_Details =</p>
          <p className='text-gray-300 ml-2 md:mt-[25px]'>{'{'}</p>
        </div>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[15px]'>project-for:</span> <span className='text-gray-300'>Alftoon Marketing,</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[3px]'>location:</span> <span className='text-gray-300'>Doha, Qatar,</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[15px]'>description:</span> <span className='text-gray-300'>Managing employee details and files. Secure file storage using Cloudinary. The system provides a mobile-friendly interface,</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[17px]'>built with:</span> <span className='text-gray-300'>MONGO DB, EXPRESS, REACT, NODE, REDUX, TAILWIND. RENDER</span></p>
        <p className='text-gray-00 ml-3 mt-[10px] mb-10'>{'};'}</p>
        <div className='flex flex-col'>
          <a href='https://hr-mern-frontend.onrender.com/' target='_blank' rel='noreferrer noopener' className='text-[#4888f0] hover:text-blue-600 underline font-bold'>View Live Demo</a>
          <p className='text-gray-500 font-light text-xs'>Use credential below to login:</p>
          <p><span className='text-gray-500'>Username:</span> <span className='text-gray-300'>admin</span></p>
          <p><span className='text-gray-500'>Password:</span> <span className='text-gray-300'>admin</span></p>
        </div>
      </>
    ),
  },
  {
    label: 'Google Keep Clone',
    short: 'Goo..',
    timeline: 14,
    images: [{ src: Keep, alt: 'Google Keep Clone Screenshot', className: 'h-52' }],
    details: () => (
      <>
        {/* Keep Clone */}
        <div className='flex'>
          <p className='text-[#d19a66] md:mt-[25px] font-bold'>Goole_Keep_Clone =</p>
          <p className='text-gray-300 ml-2 md:mt-[25px]'>{'{'}</p>
        </div>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[15px]'>description:</span> <span className='text-gray-300'>A Simple Google Keep Clone</span></p>
        <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[17px]'>built with:</span> <span className='text-gray-300'>React, Vite, TypeScript, Redux, Tailwind, Firebase and Vercel</span></p>
        <p className='text-gray-00 ml-3 mt-[10px] mb-10'>{'};'}</p>
        <div className='flex flex-col'>
          <a href='https://react-ts-redux-google-keep.vercel.app/' target='_blank' rel='noreferrer noopener' className='text-[#4888f0] hover:text-blue-600 underline font-bold'>View Live Demo</a>
        </div>
      </>
    ),
  },
//   {
//     label: 'Tic Tac Toe',
//     short: 'Tic..',
//     timeline: 14,
//     images: [
//       { src: TicTacHome, alt: 'Tic Tac Toe Home Screen' },
//       { src: TicTacGame, alt: 'Tic Tac Toe Game Screen' },
//     ],
//     details: () => (
//       <>
//         {/* Simple Tic Tac Toe Game */}
//         <div className='flex'>
//           <p className='text-[#d19a66] md:mt-[25px] font-bold'>Tic_Tac_Toe_Game =</p>
//           <p className='text-gray-300 ml-2 md:mt-[25px]'>{'{'}</p>
//         </div>
//         <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[15px]'>description:</span> <span className='text-gray-300'>A Simple Tic Tac Toe Game</span></p>
//         <p><span className='text-[#d19a66] ml-1 md:ml-7 mt-[17px]'>built with:</span> <span className='text-gray-300'>MERN Stack, Vite, Tailwind, Vercel and Render</span></p>
//         <p className='text-gray-00 ml-3 mt-[10px] mb-10'>{'};'}</p>
//         <div className='flex flex-col'>
//           <a href='https://tic-tac-toe-mern.vercel.app/' target='_blank' rel='noreferrer noopener' className='text-[#4888f0] hover:text-blue-600 underline font-bold'>View Live Demo</a>
//         </div>
//       </>
//     ),
//   },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [nav, setNav] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const activeProject = PROJECTS[nav];

  // --- Reusable Tab Rendering Function ---
  const renderTabs = (isMobile = false) => (
    <div className={`flex text-start bg-[#2b2f37] ${isMobile ? 'sm:hidden' : 'hidden sm:flex'}`}>
      {PROJECTS.map((project, idx) => {
        const isActive = nav === idx;
        const tabClasses = isActive
          ? 'flex-grow border-b-[1px] border-gray-400'
          : 'flex-grow border-y-[1px] border-r-[1px] border-gray-900 hover:border-gray-700';
        const spanClasses = isActive
          ? 'text-xs uppercase px-3 py-[13px] flex hover:bg-[#343943] bg-[#343943] cursor-pointer'
          : 'cursor-pointer text-xs uppercase border-b-2 border-transparent px-3 py-3 flex hover:bg-[#3d434e] bg-[#21252b]';

        return (
          <div key={project.label} className={tabClasses}>
            <span onClick={() => setNav(idx)} className={spanClasses}>
              <img className='w-[14px] h-[14px] mr-2 opacity-60' src={Folder} alt='Folder icon' />
              {isMobile ? project.short : project.label}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div name='projects' className='w-full h-auto sm:h-screen text-gray-300 mt-28 md:mt-0'>
      <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center h-full'>
        {isOpen && (
          <>
            {console.log('Lightbox srcs:', {
              main: activeProject.images[photoIndex]?.src,
              next: activeProject.images[(photoIndex + 1) % activeProject.images.length]?.src,
              prev: activeProject.images[(photoIndex + activeProject.images.length - 1) % activeProject.images.length]?.src,
            })}
            <Lightbox
              mainSrc={activeProject.images[photoIndex].src}
              nextSrc={activeProject.images[(photoIndex + 1) % activeProject.images.length].src}
              prevSrc={activeProject.images[(photoIndex + activeProject.images.length - 1) % activeProject.images.length].src}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + activeProject.images.length - 1) % activeProject.images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % activeProject.images.length)
              }
            />
          </>
        )}
        {/* --- Header --- */}
        <div data-aos='fade-up'>
          <p className='text-2xl md:text-3xl font-bold inline'>Current Projects</p>
          <p className='py-1 md:py-4 text-sm md:text-base'>(more coming soon)</p>
        </div>

        {/* --- Project Card --- */}
        <div data-aos='fade-up' data-aos-delay='100' className='flex flex-col justify-center'>
          <div className='rounded-xl overflow-hidden text-sm sm:text-xm shadow-xl max-w-[800px]'>
            {/* --- Card Header --- */}
            <div className='bg-[#21252b] h-10 rounded-t-xl flex items-center'>
              <button className='bg-[#ad443c] w-[15px] h-[15px] rounded-full font-medium ml-4 my-3'></button>
              <button className='bg-[#b98a2c] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
              <button className='bg-[#258f33] w-[15px] h-[15px] rounded-full font-medium ml-2 my-3'></button>
            </div>

            {/* --- Navigation Tabs --- */}
            {renderTabs(false)} {/* Desktop */}
            {renderTabs(true)}  {/* Mobile */}

            {/* --- Content --- */}
            <div className='bg-[#343943]'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* --- Details Pane --- */}
                <div className='h-auto border-b border-gray-600 md:border-none'>
                  <div className='flex mb-4'>
                    {/* --- Line Numbers --- */}
                    <div className='h-auto pt-3 mx-3'>
                      <ul className='text-center text-gray-500'>
                        {Array.from({ length: activeProject.timeline }, (_, i) => (
                          <li key={i}>{i + 1}</li>
                        ))}
                      </ul>
                    </div>
                    {/* --- Project Details --- */}
                    <div className='h-auto text-start mx-2 pt-3'>
                      {activeProject.details()}
                    </div>
                  </div>
                </div>

                {/* --- Image Pane --- */}
                <div className={` justify-center items-center m-auto gap-2 p-3 ${activeProject.images.length > 1 && ''}`}>
                  {activeProject.images.map((img, index) => (
                    <img
                      key={img.src}
                      className={`rounded-md border-2 border-slate-700 cursor-pointer ${img.className || ''}`}
                      src={img.src}
                      alt={img.alt}
                      onClick={() => { setIsOpen(true); setPhotoIndex(index); }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

