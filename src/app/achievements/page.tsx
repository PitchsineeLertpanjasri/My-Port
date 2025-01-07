"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function AchievementsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  // const handleZoomIn = () => {
  //   setScale((prevScale) => Math.min(prevScale + 0.2, 3)); // Maximum scale of 3x
  // };

  // const handleZoomOut = () => {
  //   setScale((prevScale) => Math.max(prevScale - 0.2, 1)); // Minimum scale of 1x
  // };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <section id="achievements" className="my-8 bg-gray-50 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Achievements / Certificates</h2>
        <div className="relative mt-6">
          <Image
            src="/images/zertificate b1.jpg"
            alt="Achievements"
            width={250}
            height={150}
            onClick={() => setIsOpen(true)} // Open modal on click
            className="cursor-pointer"
          />
        </div>
      </section>

      {/* Modal with zoom and drag */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-hidden"
          onClick={() => setIsOpen(false)} // Close modal on background click
        >
          <div
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <div
              className="absolute"
              style={{
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: "center",
                cursor: isDragging ? "grabbing" : "grab",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp} // Ensure drag stops if the mouse leaves the image
            >
              <img
                src="/images/zertificate b1.jpg"
                alt="Achievements"
                className="block max-h-none max-w-none"
                draggable={false} // Disable default image dragging
              />
            </div>
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            {/* <button
              onClick={handleZoomIn}
              className="bg-white text-black px-4 py-2 rounded shadow"
            >
              Zoom In
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-white text-black px-4 py-2 rounded shadow"
            >
              Zoom Out
            </button> */}
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded shadow"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
