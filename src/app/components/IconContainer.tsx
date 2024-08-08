import React from 'react'

const IconContainer = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='hover:opacity-80 transition-all'>
      {children}
    </div>
  )
}

export default IconContainer
