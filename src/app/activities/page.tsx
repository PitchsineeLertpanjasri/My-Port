export default function ActivitiesPage() {
  return (
    <div>
      {/* <section id="activities" className="my-8 bg-gray-50 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Activities</h2>
        <ul className="list-disc pl-6">
          <li>Organized Coding Bootcamps</li>
          <li>Volunteer Teaching</li>
          <li>Hackathon Participant</li>
        </ul>
      </section> */}
      <section className="my-12 bg-gray-50 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">StepOut Club</h2>
        <ul>
          <li className="before:content-['•'] before:mr-2  pl-6 ">Core Team of StepOut Club</li>
          <li className="before:content-['•'] before:mr-2  pl-6 ">Member of StepOut Club</li>
          <li className="before:content-['•'] before:mr-2  pl-6 ">Participate in various events</li>
        </ul>
      </section>
    </div>
  );
}