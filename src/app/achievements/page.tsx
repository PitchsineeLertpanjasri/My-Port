"use client"

import Image from "next/image";
import React, { use, useState } from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import "react-image-lightbox/style.css"; // Import lightbox styles
import Lightbox from "react-image-lightbox";

export default function AchievementsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // List of image paths
  const images = [
    "/images/zertificate b1.jpg",
    // "/images/zertificate b1.jpg",
    // "/images/zertificate b1.jpg",
    // "/images/zertificate b1.jpg",
  ];

  const openLightbox = (index: number) => {
    if (!isOpen) {
      setPhotoIndex(index);
      setIsOpen(true);
    }
  };
  

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <section id="achievements" className="my-8 bg-gray-50 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Achievements / Certificates</h2>
        <div className="relative mt-6">
          {/* <Image
            src="/images/zertificate b1.jpg"
            alt="Achievements"
            width={250} // Set appropriate width
            height={150} // Set appropriate height
            // className="rounded"
            onClick={() => setIsOpen(true)} // Open modal on click
          /> */}
          {images.map((src, index) => (
            <div key={index} className="cursor-pointer">
              <img
                src={src}
                alt={`Achievement ${index + 1}`}
                width={250} // Set appropriate width
                height={150} // Set appropriate height
                className="rounded shadow-md hover:opacity-80"
                // onClick={() => {
                //   setPhotoIndex(index);
                //   setIsOpen(true);
                // }}
                onClick={() => openLightbox(index)} // Open Lightbox on click
              />
            </div>
          ))}
        </div>
        <ul className="list-disc pl-6">
          {/* <li>Best Innovative Project 2022</li>
          <li>Full-stack Developer Certification</li>
          <li>Data Science Competition Winner</li> */}
        </ul>
        {/* <PhotoProvider>
          <PhotoView src="/images/achievements.jpg">
            <img
              src="/images/achievements.jpg"
              alt="Achievements"
              className="rounded w-full max-w-sm mx-auto cursor-pointer"
            />
          </PhotoView>
        </PhotoProvider> */}
      </section>

      {/* Modal */}
      {/* {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src="/images/achievements.jpg"
              alt="Achievements"
              className="max-w-full max-h-screen rounded"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
            >
              ✕
            </button>
          </div>
        </div>
      )} */}
      {/* {isOpen && (
            <dialog
              open
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="/images/zertificate b1.jpg"
                alt="Achievements"
                className="max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
              />
            </dialog>
          )} */}

    {isOpen ? (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={closeLightbox}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
      />
    ) : null} 
    </div>
  );
}