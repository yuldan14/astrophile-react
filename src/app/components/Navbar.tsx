'use client';
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <main>
        <div className='relative h-[4rem] nunito bg-[#efefef] '>
            <div className='flex justify-between h-[3rem] top-0 sticky z-10'>
                <div className='w-[50%] flex'>
                    <Image
                    className='rounded-[50%] object-cover ml-10 aspect-square hidden sm:flex'
                        src='/logo1.png'
                        width={50}
                        height={50}
                        alt='logo'
                    />
                    <h1 className='text-1xl font-bold h-[100%] flex items-center ml-5 text-sm md:text-lg'>ASTRO<span className='span'>PHILE</span></h1>
                </div>
                <div className='w-[70%] items-center'>
                    <ul className='flex justify-around h-[100%] items-center'>
                        <li className='text-[.60rem] sm:text-[.75rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#002d64] p-1 pl-5 pr-5 rounded-3xl'><a href="#Hero">Home</a></li>
                        <li className='text-[.60rem] sm:text-[.75rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#002d64] p-1 pl-5 pr-5 rounded-3xl'> <a href="#Product">Product</a></li>
                        <li className='text-[.60rem] sm:text-[.75rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#002d64] p-1 pl-5 pr-5 rounded-3xl'>About Us</li>
                        
                    </ul>
                </div>
            </div>
        </div>

    </main>
  )
}

export default Navbar
