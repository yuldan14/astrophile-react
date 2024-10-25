'use client';
import React from 'react'


const Navbar = () => {
  return (
    <main>
        <div className='relative h-[4rem] nunito bg-black '>
            <div className='flex justify-between h-[3rem] top-0 sticky z-10'>
                <div className='w-[50%]'>
                    <h1 className='text-1xl font-bold pl-20 flex items-center h-[100%]'>ASTRO<span className='span'>PHILE</span></h1>
                </div>
                <div className='w-[50%] items-center'>
                    <ul className='flex justify-around h-[100%] items-center'>
                        <li className='text-[.5rem] sm:text-[.75rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#002d64] p-1 pl-5 pr-5 rounded-3xl'><a href="#Hero">Home</a></li>
                        <li className='text-[.5rem] sm:text-[.75rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#002d64] p-1 pl-5 pr-5 rounded-3xl'> <a href="#Product">Product</a></li>
                        <li className='text-[.5rem] sm:text-[.75rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#002d64] p-1 pl-5 pr-5 rounded-3xl'>About Us</li>
                        
                    </ul>
                </div>
            </div>
        </div>

    </main>
  )
}

export default Navbar
