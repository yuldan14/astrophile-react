"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLHeadingElement[]>([]);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  
  textRefs.current = [];
  buttonRefs.current = [];
  
  const addToTextRefs = (text: HTMLHeadingElement | null) => {
    if (text && !textRefs.current.includes(text)) {
      textRefs.current.push(text);
    }
  };

  const addToButtonRefs = (button: HTMLButtonElement | null) => {
    if (button && !buttonRefs.current.includes(button)) {
      buttonRefs.current.push(button);
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

    if (buttonRefs.current) {
      anime({
        targets: buttonRefs.current,
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 500,
        easing: "easeOutQuad",
        delay: 1500,
      });
    }

    return () => clearInterval(typingInterval); // Clean up interval on unmount
  }, []);

  return (
    <div
      className="h-[100%] w-[100%] flex justify-center items-center pt-[4.2rem] relative -top-[4.2rem]"
      id="Hero"
    >
      <div className="h-[90vh] w-[90vw] rounded-3xl shadow-2xl flex text-black">
        <div className="w-[100%] h-[100%] justify-center text-center flex items-center p-10 text-2xl">
          <div>
            <h1 className="nunito text-5xl lg:text-[4rem]" ref={addToTextRefs}>
              {displayedText.split("Astrophile")[0]}
              <span className="span">
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
              className="bg-[#4295c5] p-2 rounded-[10px] text-sm nunito pl-5 pr-5 mt-[3rem] hover:bg-cyan-950 hover:text-white transition-all duration-500"
              ref={addToButtonRefs}
            >
              <a href="#Product">Beli Sekarang</a>
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
  );
};

export default Hero;
