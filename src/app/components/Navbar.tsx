"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import feather from "feather-icons";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };
  useEffect(() => {
    // Replace <i data-feather="icon-name"></i> with actual SVGs
    feather.replace(); // This will convert all elements with data-feather attributes to SVGs
  }, []);

  return (
    <main>
      <div className="relative items-center h-[5rem] nunito flex justify-center bg-transparent w-[100%]">
        <div className="flex top-0 sticky z-10 w-[90%] h-[3.4rem] bg-[#002d64] rounded-3xl text-white">
          <div className="  w-[5rem] sm:w-[5rem] flex">
            <Image
              className="rounded-[1.4rem] object-cover aspect-square flex h-[3.4rem] w-[3.4rem]"
              src="/logo1.png"
              width={50}
              height={50}
              alt="logo"
            />
            <h4 className="font-bold h-[100%] hidden sm:flex items-center ml-5 text-sm md:text-md lg:text-lg">
              ASTRO<span className="span">PHILE</span>
            </h4>
          </div>
          <div className="w-[100%] items-center">
            <ul className="flex justify-around h-[100%] items-center">
              <li className="text-[.70rem] sm:text-[.8rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#3f80cf] p-1 pl-5 pr-5 rounded-3xl">
                <a href="#Hero">Home</a>
              </li>
              <li className="text-[.70rem] sm:text-[.8rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#3f80cf] p-1 pl-5 pr-5 rounded-3xl">
                <a href="#Product">Product</a>
              </li>
              <li className="text-[.70rem] sm:text-[.8rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#3f80cf] p-1 pl-5 pr-5 rounded-3xl">
                <a href="#AboutUs">About Us</a>
              </li>
              <li className="text-[.70rem] sm:text-[.8rem] md:text-[1rem] lg:text-[1rem] hover:text-white cursor-pointer transition-all duration-500 hover:bg-[#3f80cf] p-1 pl-5 pr-5 rounded-3xl" onClick={handleLoginClick}>
                  <i
                    data-feather="log-in"
                    className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                  ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
