'use client';
import React from 'react'
import { Avatar } from './Avatar';

export const BlogCard = (props:any) => {
  console.log(props)
  return (
    <div className='bg-white drop-shadow-lg text-center rounded-3xl p-5 border-2 '>
      <img src={props.image} alt="" className='rounded-3xl shadow-xl  mx-auto w-[450px] mb-5  h-[250px] -mt-16'/>
      <p className='text-left text-xs italic text-green-800 pb-1'>{props.type}</p>
      <h2 className='text-2xl text-left font-bold'>{props.title}</h2>
      <p className='text-left'>{props.content}</p>
      <div className='flex items-center mt-4'>
          {<Avatar img={props.author_image} />}
          <div className='ml-3'>
            <p className='text-left text-m font-bold text-green-900'>{props.author}</p>
            <p className='text-left text-xs italic text-green-900'>{props.created_at}</p>
          </div>
      </div>
    </div>
  )
}
