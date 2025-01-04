const Projects = () => { 

  const projects = [
    {
      name: "StepOutSite",
      about: ["Web Dev", "GoLang", "React & Next.js"],
    },
    {
      name: "Smart Fish Tank",
      about: ["Embedded System", "Arduino", "Cloud, Firebase, Blynk"],
    },
    {
      name: "Data Science",
      about: ["Data Cleansing", "AI/ML", "Data Engineering", "Data Visualization"],
    },
  ];


    return (
      <section className="p-8 bg-gray-50 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* <div className="p-4 bg-gray-100 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">StepOutSite</h3>
            <ul className="list-none space-y-2 pt-2">about
              <li className="before:content-['•'] before:mr-2  pl-6 pt-2">Web Dev</li>
              <li className="before:content-['•'] before:mr-2  pl-6">GoLang</li>
              <li className="before:content-['•'] before:mr-2  pl-6">React & Next.js</li>
            </ul>
          </div> */}
          {projects.map((project, index) => (
              <div className="p-4 bg-white rounded shadow hover:shadow-lg">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                  <ul className="list-none space-y-2 pt-2">about
                    <li></li>
                    {project.about.map((item, index) => (
                      <li className="before:content-['•'] before:mr-2  pl-6 ">{item}</li>
                    ))}
                  </ul>
              </div>
          ))}
        </div>
      </section>
    );
  }

  export default Projects;


  // export default function Projects() {
  //   return (
  //     <div className="bg-white p-6 rounded shadow-md">
  //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
  //       <p className="text-gray-600 mb-4">Explore some of my recent work and projects.</p>
  //       <ul className="space-y-4">
  //         <li className="bg-gray-50 p-4 rounded shadow-md">StepOutSite - Web Dev, golang, React & Nextjs</li>
  //         <li className="bg-gray-50 p-4 rounded shadow-md">Smart Fish Tank - embedded system, arduino, cloud, firebase, blynk</li>
  //         <li className="bg-gray-50 p-4 rounded shadow-md">Data Science - Data cleansing, AI/ML, Data engineering, Data visualization</li>
  //       </ul>
  //     </div>
  //   );
  // }
  