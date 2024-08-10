'use client';

import React from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';
import { Avatar } from '@/app/components/Avatar';
import Link from "next/link";

interface UserProps {
  elem: {
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string;
    location: string;
    job: string;
    user_id: number;
  };
}

export default function User({ elem }: UserProps) {
  return (
    <Link href={`/profile/${elem.user_id.toString()}`}>
      <div className='rounded-xl text-left text-amber-950 flex items-center py-2.5 border-2 shadow-md p-4'>
        <Avatar img={elem.profile_picture} alt={`${elem.username}'s profile picture`} />
        <div className="ml-3">
          <div className="text-l font-bold">
            {elem.first_name || elem.last_name ? `${elem.first_name} ${elem.last_name}` : elem.username}
          </div>
          <div className='text-sm text-gray-500'>{elem.email}</div>
          <div className='text-sm'>{elem.location || "Location not provided"}</div>
          <div className='text-sm'>{elem.job || "Job not provided"}</div>
        </div>
      </div>
    </Link>
  );
}
