"use client";

import React from "react";

const Skills = () => {
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
    <div className="flex flex-col bg-gray-100 py-10 px-5 justify-center">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="grid gap-4">
              <li>
                <strong>JavaScript:</strong>{" "}
                <progress value="85" max="100" className="w-full"></progress>
              </li>
              <li>
                <strong>Golang:</strong>{" "}
                <progress value="75" max="100" className="w-full"></progress>
              </li>
              <li>
                <strong>Python:</strong>{" "}
                <progress value="80" max="100" className="w-full"></progress>
              </li>
              <li>
                <strong>C++:</strong>{" "}
                <progress value="75" max="100" className="w-full"></progress>
              </li>
              <li>
                <strong>Java:</strong>{" "}
                <progress value="70" max="100" className="w-full"></progress>
              </li>
              <li>
                <strong>HTML/CSS:</strong>{" "}
                <progress value="70" max="100" className="w-full"></progress>
              </li>
              <li>
                <strong>HSQL:</strong>{" "}
                <progress value="80" max="100" className="w-full"></progress>
              </li>
            </ul>
          </div>
  );
};

export default Skills;
