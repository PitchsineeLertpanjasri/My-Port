"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {

  // (const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const images = [
  //   {src: "/images/bannerImg/freshyGameBanner.jpeg", name: "Freshy Game 2024", link:"https://www.youtube.com/watch?v=D00RjBXpHow&t=206s"},
  //   {src: "/images/bannerImg/vishnuBanner.jpg", name: "Vishnu 22th", link: "https://www.youtube.com/watch?v=JMXmwaOzHkI"},
  // ];)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, [images.length]);

  return (
    <div className="bg-gradient-to-r from-[#F56EE3] to-[#4082B8] text-white text-center py-20 w-full h-[100vh] overflow-hidden relative">

        <div 
            className="absolute top-[5%] left-1/2 transform -translate-x-1/2 text-white text-[150px] z-30 font-serif font-bold tracking-wide"
            style={{
                textShadow: "0px 5px 0px rgba(0, 0, 0, 0.7)", // Drop shadow
                WebkitTextStroke: "1px #88383", // Stroke (outline)
            }}
        >
        <span className="text-[80px] sm:text-[90px] md:text-[100px] lg:text-[128px] xl:text-[150px] 2xl:text-[180px]">
            My Port
            <p className="text-[24px] sm:text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px] 2xl:text-[54px]">Pitchsinee Lertpanjasri</p>
        </span>
        
      </div>

      
    </div>
  );
}


// export default function Banner() {
//   return (
//     <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-20">
//       <h1 className="text-5xl font-bold">My Portfolio</h1>
//       <p className="text-xl mt-4">Pitchsinee Lertpanjasri</p>
//     </header>
//   );
// }