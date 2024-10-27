import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div id='Footer' className='w-[100%] mt-[5rem] pl-5 pr-5 bg-gray-200 pt-10 h-[50vh]'>
      <div id="img" className='w-[100%] flex justify-center'>
        <Image
            src='/logo1.png'
            width={150}
            height={150}
            alt='logo'
            className='rounded-[50%] object-cover aspect-square h-[150px] '
        />
      </div>
      <div id="left" className='w-[33%]'>
        <p className='nunito'>ASTROPHILE</p>
      </div>
    </div>
  )
}

export default Footer
