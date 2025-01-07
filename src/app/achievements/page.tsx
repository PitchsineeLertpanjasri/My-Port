"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function AchievementsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    setStartPosition({
      x: clientX - position.x,
      y: clientY - position.y,
    });
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    setPosition({
      x: clientX - startPosition.x,
      y: clientY - startPosition.y,
    });
  };

  const handleEnd = () => {
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
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd} // Ensure drag stops if the mouse leaves the image
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
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
