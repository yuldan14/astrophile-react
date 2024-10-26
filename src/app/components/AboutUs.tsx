"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import anime from "animejs";

const AboutUs = () => {
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null); // To store the observer instance
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if animation has run

  // Clear imageRefs array on each render
  imageRefs.current = [];

  const addToImageRefs = (image: HTMLDivElement | null) => {
    if (image && !imageRefs.current.includes(image)) {
      imageRefs.current.push(image);
    }
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationTriggered) {
          anime({
            targets: imageRefs.current,
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: "easeOutQuad",
            delay: anime.stagger(100),
          });
          setAnimationTriggered(true);
          observerRef.current?.disconnect(); // Stop observing once animation is triggered
        }
      });
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust threshold as needed
    });

    // Observe the first image ref as a trigger point
    if (imageRefs.current[0]) {
      observer.observe(imageRefs.current[0]);
    }

    observerRef.current = observer;

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [animationTriggered]);

  return (
    <div id="AboutUs" className="h-[100%] w-[100%] pt-[4.2rem]">
      <div className="nunito w-[100%] flex justify-center text-3xl">
        <p>
          ABOUT <span className="span">US</span>
        </p>
      </div>
      <div className="h-[100%] -mt-10 sm:mt-0">
        <div className="flex justify-around mt-[5rem] h-[80vh] ">
          <div className=" block md:flex justify-around w-[100%] flex-wrap sm:flex-nowrap">
            <div ref={addToImageRefs} className="flex md:block">
              <div className="flex justify-center mb-[3rem] md:mb-0 ml-[2rem] md:ml-0">
                <Image
                  src="/yuldan.jpg"
                  height={200}
                  width={200}
                  alt="yuldan"
                  className="rounded-[50%] object-cover aspect-square w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] shadow-lg shadow-gray-400 drop-shadow-xl mr-[3rem] md:mr-0"
                />
              </div>
              <div className="w-[70%] md:w-[100%]">
                <p className="nunito mt-10 text-center text-sm md:text-md lg:text-lg 2 w-[100%]">
                  <span className="span">YULDAN</span> NUR ADDINSYAH
                </p>
                <p className="font-sans w-[100%] text-center">Web Developer</p>
              </div>
            </div>
            <div ref={addToImageRefs} className="flex md:block">
              <div className="flex justify-center mb-[3rem] md:mb-0 ml-[2rem] md:ml-0 ">
                <Image
                  src="/Sandi.jpg"
                  height={200}
                  width={200}
                  alt="sandi"
                  className="rounded-[50%] object-cover aspect-square w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] shadow-lg shadow-gray-400 drop-shadow-xl mr-[3rem] md:mr-0"
                />
              </div>
              <div className="w-[70%] md:w-[100%]">
                <p className="nunito mt-10 text-center text-sm md:text-md lg:text-lg 2 w-[100%]">
                  <span className="span">SANDI</span> DIAN GUNAWAN
                </p>
                <p className="font-sans w-[100%] text-center">Designer</p>
              </div>
            </div>
            <div ref={addToImageRefs} className="flex md:block">
              <div className="flex justify-center mb-[3rem] md:mb-0 ml-[2rem] md:ml-0">
                <Image
                  src="/Ridwan.jpg"
                  height={200}
                  width={200}
                  alt="ridwan"
                  className="rounded-[50%] object-cover aspect-square w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] shadow-lg shadow-gray-400 drop-shadow-xl mr-[3rem] md:mr-0"
                />
              </div>
              <div className="w-[70%] md:w-[100%]">
                <p className="nunito mt-10 text-center text-sm md:text-md lg:text-lg 2 w-[100%]">
                  <span className="span">RIDWAN</span> MUHAMMAD RAIHAN
                </p>
                <p className="font-sans w-[100%] text-center">Database Engineer</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
