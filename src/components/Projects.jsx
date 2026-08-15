import Reveal from "./Reveal";

const Projects = () => {
  const projects = [
    {
      title: "ERP Management System",
      description:
        "A full-stack ERP application designed to manage and streamline business operations through a centralized web platform. The system provides a structured interface for managing organizational data and day-to-day processes.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/chaitanyanirmale/truerp",
      image: "TRUERP.png",
    },
    {
      title: "Personal Blog Application",
      description:
        "A responsive blog platform where users can create, publish, and manage blog posts through an intuitive interface. The application focuses on clean content presentation, user interaction, and efficient post management.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js"],
      github: "https://github.com/chaitanyanirmale/blog-app",
      image: "Blog App.png",
    },
    {
      title: "Real Estate Application",
      description:
        "A modern real estate web application for exploring and managing property listings. Users can browse available properties, view important property details, and find suitable options through a user-friendly interface.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/chaitanyanirmale/real-estate-app",
      image: "Prime Nest.png",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0.1}>
          <div className="mb-12">
            <p className="text-amber-600 font-medium mb-2">
              My Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Some of the projects I've built while learning and
              working with different technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">{technology}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition">
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;