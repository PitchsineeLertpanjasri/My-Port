import Skills from "./skills";
import Timeline from "./timeline";

export default function EducationSkills() {
    return (
      <section className="p-8 bg-gray-50 rounded shadow-md mt-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Timeline */}
          <div className="lg:w-1/2">
            <Timeline />
          </div>
          <div className="lg:w-1/2">
            <Skills />
          </div>
        </div>
      </section>
    );
  }