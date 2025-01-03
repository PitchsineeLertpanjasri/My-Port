"use client";

import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "2554-2559",
      title: "La-orutis Demonstration School",
      description: "GPAX : 4.00",
    },
    {
      date: "2560-2562",
      title: "Satriwithaya School(Gifted Program)",
      description: "GPAX : 3.92",
    },
    {
      date: "2563-2565",
      title: "Mahidol Wittayanusorn School",
      description: "GPAX : 3.96",
    },
    {
      date: "2566",
      title: "Computer Engineering and Digital Technology Chulalongkorn University",
      description: "GPAX : Pending",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 px-5">
      <h1 className="text-2xl font-bold text-center mb-10 text-purple-600">
        Education
      </h1>
      <div className="relative border-l-4 border-purple-600">
        {events.map((event, index) => (
          <div
            key={index}
            className="mb-8 ml-4 flex items-start gap-4"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold">
              {index + 1}
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-gray-800">
                {event.date}
              </h2>
              <h3 className="text-lg font-semibold text-purple-600">
                {event.title}
              </h3>
              <p className="text-gray-600">
                {event.description}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute w-2 bg-purple-600 top-0 bottom-0 left-4"></div>
      </div>
    </div>
  );
};

export default Timeline;
