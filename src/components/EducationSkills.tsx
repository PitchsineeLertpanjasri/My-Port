import Skills from "./skills";
import Timeline from "./timeline";

export default function EducationSkills() {
    return (
      <section className="p-8 bg-gray-50 rounded shadow-md mt-8">
        {/* <h2 className="text-2xl font-bold mb-4">Education</h2> */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* <ul className="list-disc pl-6">
          <li>Satit School, GPAX: 4.00</li>
          <li>Mahidol Wittayanusorn, GPAX: 3.96</li>
          <li>Chulalongkorn University, GPAX: Pending</li>
        </ul> */}
         
        {/* Timeline */}
          <div className="lg:w-1/2">
            <Timeline />
          </div>
          <div className="lg:w-1/2">
            <Skills />
          </div>

          {/* Skills */}
          {/* <div className="lg:w-1/2 justify-center">
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
          </div> */}
        </div>
      </section>
    );
  }