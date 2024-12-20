export default function EducationSkills() {
    return (
      <section className="p-8 bg-gray-50 rounded shadow-md mt-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="list-disc pl-6">
          <li>Satit School, GPAX: 4.00</li>
          <li>Mahidol Wittayanusorn, GPAX: 3.96</li>
          <li>Chulalongkorn University, GPAX: Pending</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-4">Skills</h2>
        <ul className="grid gap-4">
          <li><strong>HTML:</strong> <progress value="90" max="100" className="w-full"></progress></li>
          <li><strong>CSS:</strong> <progress value="75" max="100" className="w-full"></progress></li>
          <li><strong>JavaScript:</strong> <progress value="50" max="100" className="w-full"></progress></li>
          <li><strong>PHP:</strong> <progress value="50" max="100" className="w-full"></progress></li>
          <li><strong>React:</strong> <progress value="40" max="100" className="w-full"></progress></li>
        </ul>
      </section>
    );
  }