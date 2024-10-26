"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import Image from "next/image";

const Product = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]); // Store references to each card
  const observerRef = useRef<IntersectionObserver | null>(null); // To store the observer instance
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if animation has run

  useEffect(() => {
    const handleScrollAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationTriggered) {
          // Apply fade-in animation to each card when it comes into view
          anime({
            targets: cardRefs.current,
            opacity: [0, 1],
            translateY: [50, 0], // Slide in from below
            duration: 1000,
            easing: "easeOutQuad",
            delay: anime.stagger(200), // Add stagger effect to each card
          });
          setAnimationTriggered(true); // Set animationTriggered to true
          observerRef.current?.unobserve(entry.target); // Stop observing after animation
        }
      });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.1, // Trigger when 10% of the element is in view
    });

    // Observe each card
    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    observerRef.current = observer; // Store the observer instance

    return () => {
      // Cleanup the observer on component unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [animationTriggered]); // Run effect again if animationTriggered changes

  // Helper function to add card refs
  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div className="h-[100%] w-full box-border mt-20 pt-[4.2rem]" id="Product">
      <div className="w-[100%] flex justify-center">
        <div className="w-[90%]">
          <h1 className="nunito text-3xl">PRODUCT</h1>
        </div>
      </div>
      <div className="flex w-[100%] h-[100%] justify-center flex-wrap mt-[3rem]">
        <div className="w-[90%] flex flex-wrap gap-10 sm:gap-20">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              ref={addCardRef} // Attach ref for animation
              className="shadow-gray-500 shadow-md h-[15rem] sm:h-[25rem] w-40 sm:w-[15rem] rounded-3xl opacity-0" // Start with opacity 0
            >
              <div className="flex w-[100%] justify-center">
                <Image
                  src="/Group 5.png" // Path gambar, pastikan sudah benar
                  alt="Kaos Astrophile"
                  width={100} // Tentukan lebar gambar
                  height={100} // Tentukan tinggi gambar
                  className="sm:h-[300px] sm:w-[300px] h-[150px] w-[150px] aspect-auto object-contain"
                />
              </div>
              <div className="w-[100%] ">
                <b className="nunito pl-5 block">Kaos Astrophile</b>
                <div className="flex w-100%  justify-center ">
                  <button className=" mt-4 p-1 pl-5  pr-5 bg-[#4295c5] rounded-xl font-sans hover:bg-sky-950 transition-all duration-300">
                    <Image
                      src="/shopping-cart.svg"
                      width={20}
                      height={20}
                      alt="Beli"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
