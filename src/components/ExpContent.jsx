import React from "react";


export default function ExpContent(props){
    return (

        <div className='h-auto text-start  mx-2 pt-3 pr-5 sm:pr-10'>
        <div className='flex'>
          <p className='text-[#4888f0] md:mt-[45px]'> {props.position}: </p>
          <p className='text-gray-300 ml-2 md:mt-[45px]'>  {'{'} </p>
        </div>
        <div className='flex'>
          <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> company_name: </p>
          <a href={props.website} target='_blank' rel='noreferrer noopener' className='text-gray-300 ml-1 mt-[15px] hover:text-blue-500 cursor-pointer'> {props.companyName}, </a>
        </div>
        <div className='flex'>
          <p className='text-[#d19a66] ml-1 md:ml-7 mt-[3px] '> date: </p>
          <p className='text-gray-300 ml-1 mt-[3px] '> {props.date}, </p>
        </div>
        <div className='flex'>
          <p className='text-[#d19a66] ml-1 md:ml-7 mt-[3px] '> location: </p>
          <p className='text-gray-300 ml-1 mt-[3px] '> {props.location}, </p>
        </div>
        <div className='flex'>
          <p className='text-[#d19a66] ml-1 md:ml-7 mt-[15px] '> jd: </p>
          <p className='text-gray-300 ml-1 mt-[15px] '>{props.jd} </p>
        </div>
        <p className='text-gray-00 ml-3 mt-[2px]'>  {'};'} </p>
      </div>

    );
}