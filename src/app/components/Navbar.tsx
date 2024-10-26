'use client';
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <main>
        <div className='relative  items-center h-[5rem] nunito flex justify-center bg-transparent w-[100%] '>
            <div className='flex  top-0 sticky z-10  w-[80%] h-[3.4rem] bg-[#002d64] rounded-3xl text-white '>
                <div className='w-[50%] flex '>
                    <Image
                    className='rounded-[1.4rem] object-cover aspect-square hidden sm:flex h-[3.4rem] w-[3.4rem]'
                        src='/logo1.png'
                        width={50}
                        height={50}
                        alt='logo'
                        
                    />
                    <h1 className='text-1xl font-bold h-[100%] flex items-center ml-5 text-sm md:text-lg'>ASTRO<span className='span'>PHILE</span></h1>
                </div>
                <div className='w-[100%] items-center'>
                    <ul className='flex justify-around h-[100%] items-center'>
                        <li className='text-[.60rem] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#3f80cf] p-1 pl-5 pr-5 rounded-3xl'><a href="#Hero">Home</a></li>
                        <li className='text-[.60rem] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#3f80cf] p-1 pl-5 pr-5 rounded-3xl'> <a href="#Product">Product</a></li>
                        <li className='text-[.60rem] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#3f80cf] p-1 pl-5 pr-5 rounded-3xl'><a href="#AboutUs">About Us</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>

    </main>
  )
}

export default Navbar
