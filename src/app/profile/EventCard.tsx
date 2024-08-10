'use client';
import React from 'react'
import { Avatar } from '../components/Avatar';

export const EventCard = (props:any) => {
    console.log(props)
  return (
    <><div className="flex mb-8">
      <div className='flex flex-col w-16'>
        <div className="flex min-w-12 min-h-12 bg-green-800 rounded-full">
          <img src="/home_icon_alone.png" alt="" className='w-5 h-5 m-auto'/>
        </div>
        <div className='bg-gray-100 h-full w-1 m-auto'></div>
      </div>
      <div className="ml-4">
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <p className='text-left text-green-700'>{props.date}</p>
        <p className="text-gray-600">
          The secret to achieving greater success lies in having numerous sources of comfort and support, much like having a collection of pillows. To put it differently, it took me a quarter-century of hard work, determination.
        </p>
      </div>
    </div>
    {/*<div className="border-l-4 border-gray-300 ml-6 mb-8 h-8"></div>*/}</>
  /* <div className='bg-white text-center rounded-3xl p-5 flex flex-row space-x-3'>
      <div className='pt-1 absolute'>
        <img src="/home_logo.png" alt="logo" className='self-center w-20'/>
        {props.index !== 0 && <div className='bg-[#ECEFF1] h-full w-1 self-right m-auto -mt-44'></div>}
        <div className='bg-[#ECEFF1] h-full w-1 self-right m-auto'></div>
      </div>
      <div>
        <h2 className='text-2xl text-left font-bold'>{props.title}</h2>
        <p className='text-left'>{props.date}</p>
        <p className='text-left text-[#607D8B] max-h-[300px]'>{props.content}</p>
      </div>
      <p></p>
    </div> */
  );
};

