'use client';

import React from 'react';
import classNames from 'classnames';

interface User {
  elem: any;
}

export default function User(props: User) {
  const { elem } = props;

  return (
    <div className='p-5 m-5 rounded-xl text-amber-950'>
      <h1 className="text-xl font-bold">{elem.title ?? "Hello :("}</h1>
      <p>{elem.description}</p>
    </div>
  );
}