import Reveal from "./Reveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST API"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "CI/CD", "Docker"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0.1}>
          <div className="mb-12">
            <p className="text-amber-600 font-medium mb-2">My Skills</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Technologies I work with
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Here are some of the technologies and tools I use to
              build modern web applications.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div key={category.title} className="p-6 rounded-lg border border-gray-200 bg-white hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium" >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;