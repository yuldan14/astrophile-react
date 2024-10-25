"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  HashNavigation,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null); // Reference untuk elemen yang ingin dianimasikan dengan anime.js
  const textRefs = useRef<HTMLHeadingElement[]>([]); // Array referensi untuk elemen teks
  textRefs.current = []; // Reset array pada setiap render
  const buttonRefs = useRef<HTMLButtonElement[]>([]); // Store references to each button


  const addToTextRefs = (text: HTMLDivElement | null) => {
    if (text && !textRefs.current.includes(text)) {
      textRefs.current.push(text);
    }
  };
  const addToButtonRefs = (button: HTMLButtonElement | null) => {
    if (button && !buttonRefs.current.includes(button)) {
      buttonRefs.current.push(button);
    }
  };

  useEffect(() => {
    // Animation for image
    if (imageRef.current) {
      anime({
        targets: imageRef.current,
        opacity: [0, 1],
        duration: 500,
        easing: "easeInOutQuad",
        scale: [0, 1],
      });
    }

    // Animation for text elements
    textRefs.current.forEach((text) => {
      if (text) {
        anime({
          targets: text,
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 500,
          easing: "easeOutQuad",
          delay: anime.stagger(500), // Menambahkan jeda antar elemen
        });
      }
    });

    // Animation for button elements
    buttonRefs.current.forEach((button) => {
      if (button) {
        anime({
          targets: button,
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 500,
          easing: "easeOutQuad",
          delay: anime.stagger(500),
        });
      }
    });
  }, []);

  return (
    <div
      className="h-[100%] w-[100%] flex justify-center items-center pt-[4.2rem] relative -top-[4.2rem]"
      id="Hero"
    >
      <div className="h-[90vh] w-[90vw] rounded-3xl  shadow-2xl flex bg-[#7b7f83] text-black">
        <div className="w-[50%] h-[100%] flex items-center p-10 text-2xl">
          <div>
            <h1 className="nunito" ref={addToTextRefs}>
              Welcome to Astro<span className="span">phile</span>
            </h1>
            <h5
              className="mt-8 font-sans font-semibold text-[.75rem] sm:text-[1rem] md:text-[1.2rem]"
              ref={addToTextRefs}
            >
              Starry Accessories for Starry Minds Shop Now at Astrophile!
            </h5>
            <button
              className="bg-[#4295c5] p-2 rounded-[10px] text-sm nunito pl-5 pr-5 mt-[3rem]"
              ref={addToButtonRefs}
            >
              Beli Sekarang
            </button>
          </div>
        </div>

        {/* Animasi menggunakan anime.js */}
        <div
          ref={imageRef} // Menghubungkan ref untuk animasi anime.js
          className="w-[50%] h-[100%] flex items-center p-10 text-2xl"
        >
          <Swiper
            spaceBetween={30}
            hashNavigation={{
              watchState: true,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, HashNavigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide data-hash="slide1">
              <Image
                className="cursor-pointer left-0 lg:left-10 relative "
                src="/Group 5.png"
                alt="Astrophile Image"
                width={400}
                height={400}
              />
            </SwiperSlide>
            <SwiperSlide data-hash="slide2">
              <Image
                className="cursor-pointer left-0 lg:left-10 relative"
                src="/Group 6.png"
                alt="Astrophile Image"
                width={400}
                height={400}
              />
            </SwiperSlide>
            <SwiperSlide data-hash="slide4">
              <Image
                className="cursor-pointer lg-0 top-0 lg:left-10 lg:top-40 relative flex justify-center items-center"
                src="/sandal.png"
                alt="Astrophile Image"
                width={400}
                height={400}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
