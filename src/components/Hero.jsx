import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-slate-900" >
      <div className="max-w-5xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-amber-600 font-bold mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Chaitanya Nirmale
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Full Stack Developer
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            I build modern, responsive and user-friendly web applications
            using technologies like React, Node.js, Express and databases.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition"
            >View Projects</a>
            <a href="#contact"className="px-6 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-100 transition"
            >Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;