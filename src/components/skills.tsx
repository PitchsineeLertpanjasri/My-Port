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

  const skills = [
    { name: "JavaScript", value: 85, color: "bg-yellow-500" },
    { name: "Golang", value: 75, color: "bg-blue-500" },
    { name: "Python", value: 80, color: "bg-green-500" },
    { name: "C++", value: 75, color: "bg-purple-800" },
    { name: "Java", value: 70, color: "bg-red-500" },
    { name: "HTML/CSS", value: 70, color: "bg-pink-500" },
    { name: "SQL", value: 80, color: "bg-indigo-500" },
  ];

  return (
    <div className="flex flex-col bg-gray-100 py-10 px-5 justify-center">
        <div className="text-center"><h2 className="text-2xl font-bold mb-4">Skills</h2></div>
          <ul className="grid gap-6">
            {skills.map((skill, index) => (
              <li key={index}>
                <div className="flex justify-between mb-1">
                  <strong>{skill.name} : {skill.value} %</strong>{" "}
                  {/* <progress value="85" max="100" className="w-full"></progress> */}
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${skill.color}`}
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </li>
              // <li>
              //   <strong>Golang : 75%</strong>{" "}
              //   <progress value="75" max="100" className="w-full"></progress>
              // </li>
              // <li>
              //   <strong>Python :  80%</strong>{" "}
              //   <progress value="80" max="100" className="w-full"></progress>
              // </li>
              // <li>
              //   <strong>C++ : 75%</strong>{" "}
              //   <progress value="75" max="100" className="w-full"></progress>
              // </li>
              // <li>
              //   <strong>Java : 70%</strong>{" "}
              //   <progress value="70" max="100" className="w-full"></progress>
              // </li>
              // <li>
              //   <strong>HTML/CSS : 70%</strong>{" "}
              //   <progress value="70" max="100" className="w-full"></progress>
              // </li>
              // <li>
              //   <strong>SQL  : 80%</strong>{" "}
              //   <progress value="80" max="100" className="w-full"></progress>
              // </li>
            ))}
          </ul>
        </div>
  );
};

export default Skills;
