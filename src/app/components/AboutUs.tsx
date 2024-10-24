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
          About <span className="span">Us</span>
        </p>
      </div>
      <div className="h-[100vh]">
        <div className="flex justify-around items-center h-[80vh] ">
          <div className="flex justify-around w-[100%]">
            <div ref={addToImageRefs}>
              <Image
                src="/yuldan.jpg"
                height={200}
                width={200}
                alt="yuldan"
                className="rounded-[50%] object-cover aspect-square w-[200px] h-[200px] shadow-lg shadow-gray-400 drop-shadow-xl"
              />
              <p className="nunito mt-10 text-center">
                <span className="span">YULDAN</span> NUR ADDINSYAH
              </p>
              <p className="font-sans w-[100%] text-center">Web Developer</p>
            </div>
            <div ref={addToImageRefs}>
              <Image
                src="/Sandi.jpg"
                height={200}
                width={200}
                alt="Sandi"
                className="rounded-[50%] object-cover aspect-square w-[200px] h-[200px] shadow-lg shadow-gray-400 drop-shadow-xl"
              />
              <p className="nunito mt-10 text-center">
                <span className="span">SANDI</span> DIAN GUNAWAN
              </p>
              <p className="font-sans w-[100%] text-center">Designer</p>
            </div>
            <div ref={addToImageRefs}>
              <Image
                src="/Ridwan.jpg"
                height={200}
                width={200}
                alt="yuldan"
                className="rounded-[50%] object-cover aspect-square w-[200px] h-[200px] shadow-lg shadow-gray-400 drop-shadow-xl"
              />
              <p className="nunito mt-10 text-center">
                <span className="span">RIDWAN</span> MUHAMMAD RAIHAN
              </p>
              <p className="font-sans w-[100%] text-center">Database Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
