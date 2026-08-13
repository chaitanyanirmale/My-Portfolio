import Reveal from "./Reveal";

const Education = () => {
  const education = [
    {
      degree: "Post Graduation",
      field: "Master of Computer Application",
      institution: "Savitribai Phule Pune University",
      cgpa: "CGPA - 7.98",
      year: "2024 – 2026",
    },
    {
      degree: "Bachelor's Degree",
      field: "Bachelor of Science (Computer Science)",
      institution: "Dr. Babasaheb Ambedkar Marathwada University",
      cgpa: "Percentage - 75.50%",
      year: "2021 – 2024",
    },
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0.1}>
          <div className="mb-12">
            <p className="text-amber-600 font-medium mb-2">
              Education
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              My Academic Journey
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.degree}
                className="p-6 md:p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-amber-600 font-medium">
                      {item.field}
                    </p>
                    <p className="mt-2 text-gray-600">
                      {item.institution}
                    </p>
                    <p className="mt-2 text-gray-600">
                      {item.cgpa}
                    </p>
                  </div>
                  <span className="w-fit px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;