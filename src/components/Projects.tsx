// export default function Projects() {
//     return (
//       <section className="p-8 bg-white rounded shadow-md mt-8">
//         <h2 className="text-2xl font-bold mb-4">Projects</h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="p-4 bg-gray-100 rounded shadow hover:shadow-lg">
//             <h3 className="text-xl font-semibold">StepOutSite</h3>
//             <p>About: Web Dev, GoLang, React & Next.js</p>
//           </div>
//           <div className="p-4 bg-gray-100 rounded shadow hover:shadow-lg">
//             <h3 className="text-xl font-semibold">Smart Fish Tank</h3>
//             <p>About: Embedded System, Arduino, Cloud, Firebase, Blynk</p>
//           </div>
//           <div className="p-4 bg-gray-100 rounded shadow hover:shadow-lg">
//             <h3 className="text-xl font-semibold">Data Science</h3>
//             <p>About: Data Cleaning, AI/ML, Data Engineering, Data Visualization</p>
//           </div>
//         </div>
//       </section>
//     );
//   }


  export default function Projects() {
    return (
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
        <p className="text-gray-600 mb-4">Explore some of my recent work and projects.</p>
        <ul className="space-y-4">
          <li className="bg-gray-50 p-4 rounded shadow-md">StepOutSite - Web Dev, golang, React & Nextjs</li>
          <li className="bg-gray-50 p-4 rounded shadow-md">Smart Fish Tank - embedded system, arduino, cloud, firebase, blynk</li>
          <li className="bg-gray-50 p-4 rounded shadow-md">Data Science - Data cleansing, AI/ML, Data engineering, Data visualization</li>
        </ul>
      </div>
    );
  }
  