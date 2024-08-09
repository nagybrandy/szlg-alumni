import React from 'react'

export const BlogContainer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='flex flex-col space-y-16 mt-10 overflow-y-scroll p-10 h-screen'>
            {children}
        </div>
    )
}
