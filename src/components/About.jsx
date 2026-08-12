import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0.1}>
          <div className="mb-12">
            <p className="text-amber-600 font-medium mb-2">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              A little bit about me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I'm a passionate developer who enjoys building web
                applications and learning new technologies. I have
                experience working with frontend and backend technologies
                and I'm continuously improving my development skills.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                My goal is to build applications that are not only
                functional but also simple, responsive and enjoyable
                to use. I'm currently looking for opportunities where
                I can contribute, learn and grow as a developer.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-amber-600">
                  MERN
                </p>
                <p className="mt-2 text-gray-600">
                  Stack
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-amber-600">
                  React
                </p>
                <p className="mt-2 text-gray-600">
                  Frontend
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-amber-600">
                  Node.js
                </p>
                <p className="mt-2 text-gray-600">
                  Backend
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <p className="text-3xl font-bold text-amber-600">
                  SQL
                </p>
                <p className="mt-2 text-gray-600">
                  Database
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
