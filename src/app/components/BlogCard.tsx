'use client';
import React from 'react'
import { Avatar } from './Avatar';

export const BlogCard = (props:any) => {
    console.log(props)
  return (
    <div className='bg-white drop-shadow-lg text-center rounded-3xl p-5 border-2 '>
      <img src={props.image} alt="" className='rounded-3xl shadow-xl  mx-auto -mt-16'/>
      <h2 className='text-2xl text-left font-bold'>{props.title}</h2>
      <p className='text-left'>{props.content}</p>
      <div>
        <Avatar img={props.avatar} />
  
      </div>
    </div>
  )
}
