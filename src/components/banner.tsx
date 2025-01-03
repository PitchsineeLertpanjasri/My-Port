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
    <div className="bg-gradient-to-r from-[#F56EE3] to-[#4082B8] text-white text-center py-20 w-full h-[500px] overflow-hidden relative">

        <div className="text-center">
        <h1 className="text-[80px] sm:text-[90px] md:text-[100px] lg:text-[128px] xl:text-[150px] 2xl:text-[180px] font-serif font-bold drop-shadow-lg">
          My Port
        </h1>
        <p className="text-[24px] sm:text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px] 2xl:text-[54px] drop-shadow-md">
          Pitchsinee Lertpanjasri
        </p>
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