"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";
import { BackgroundLines } from "@/components/ui/background-lines";


export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLHeadingElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Use single ref for the button

  const addToTextRefs = (text: HTMLHeadingElement | null) => {
    if (text && !textRefs.current.includes(text)) {
      textRefs.current.push(text);
    }
  };

  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Welcome to Astrophile";
  const typingSpeed = 150;

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1)); // Update displayed text up to the current index
      index++;

      if (index >= fullText.length) {
        clearInterval(typingInterval); // Stop when the full text is displayed
      }
    }, typingSpeed);

    // Initial animations for image and text
    if (imageRef.current) {
      anime({
        targets: imageRef.current,
        opacity: [0, 1],
        duration: 500,
        easing: "easeInOutQuad",
        scale: [0, 1],
      });
    }

    if (textRefs.current) {
      anime({
        targets: textRefs.current,
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 500,
        easing: "easeOutQuad",
        delay: anime.stagger(1000),
      });
    }

    return () => clearInterval(typingInterval); // Clean up interval on unmount
  }, []);

  const handleButtonClick = () => {
    // Scale down and then back up when clicked
    anime({
      targets: buttonRef.current,
      scale: [0.8, 1],
      duration: 500,
    });

    // Scroll to the "Product" section after the animation
    const productSection = document.getElementById("Product");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseDown = () => {
    // Scale down the button when clicked or held
    anime({
      targets: buttonRef.current,
      scale: 0.8,
      duration: 200,
      easing: "easeInOutSine",
    });
  };

  const handleMouseUp = () => {
    // Scale back to original size when released
    anime({
      targets: buttonRef.current,
      scale: 1,
      duration: 200,
      easing: "easeInOutSine",
    });
  };
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black h-full pb-10 relative -top-[5rem] rounded-b-3xl">
      <div
        className="h-[100%] w-[100%] flex justify-center items-center pt-[4.2rem] relative -top-[4.2rem]"
        id="Hero"
      >
        <div className="h-[90vh] w-[90vw] rounded-3xl shadow-2xl flex text-white">
          <div className="w-[100%] h-[100%] justify-center text-center flex items-center p-10 text-2xl ">
            <div>
              <h1
                className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
                ref={addToTextRefs}
              >
                {displayedText.split("Astrophile")[0]}
                <span className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                  {displayedText.includes("Astrophile") && "Astrophile"}
                </span>
              </h1>
              <h5
                className="mt-8 font-sans font-semibold text-[.75rem] sm:text-[1rem] md:text-[1.2rem]"
                ref={addToTextRefs}
              >
                Starry Accessories for Starry Minds Shop Now at Astrophile!
              </h5>
              <button
                className="bg-[#002d64] p-2 rounded-[10px] text-sm nunito pl-5 pr-5 mt-[3rem] hover:bg-[#3f80cf] hover:text-white transition-all duration-500 text-white"
                ref={buttonRef} // Use single ref for button
                onClick={handleButtonClick} // Handle button click
                onMouseDown={handleMouseDown} // Handle mouse down event
                onMouseUp={handleMouseUp} // Handle mouse up event
                onMouseLeave={handleMouseUp} // Ensure scaling back if mouse leaves
              >
                Beli Sekarang
              </button>
            </div>
          </div>
          <div className="flex items-center relative" ref={imageRef}>
            <Image
              src="/logo1.png"
              width={300}
              height={300}
              alt="logo"
              className="hidden md:flex rounded-[50%] aspect-square object-cover relative right-10"
            />
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}
export default Hero;