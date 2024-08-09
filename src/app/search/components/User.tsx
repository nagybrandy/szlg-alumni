'use client';

import React from 'react';
import classNames from 'classnames';
import { iconButton } from '@material-tailwind/react';
import { PencilIcon } from '@heroicons/react/24/solid';
import { Avatar } from '@/app/components/Avatar';

interface User {
  elem: any;
}

export default function User(props: User) {
  const { elem } = props;

  return (
    <div className='rounded-xl text-amber-950 flex items-center py-2.5'>
      <Avatar />
      <div className="ml-1 text-l font-bold">{elem.name ?? "A felhasználó nem adott meg nevet"}</div>
      <div className='ml-1'>{`- ${elem.year ?? "A felhasználó nem adott meg évfolyamot"}, ${elem.class ? `${elem.class} osztály` : "A felhasználó nem adott meg osztályt"} - ${elem.job ?? "A felhasználó nem adott meg állást"}`}</div>
    </div>
  );
}