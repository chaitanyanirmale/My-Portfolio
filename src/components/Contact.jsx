import Reveal from "./Reveal";


const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0.1}>
          <div className="text-center mb-12">
            <p className="text-amber-600 font-medium mb-2">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Let's work together
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Have a project, opportunity, or just want to connect?
              Feel free to send me a message.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in touch
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                I'm currently looking for opportunities where I can
                use my development skills, work on real-world projects,
                and continue learning.
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>
                  <a href="#" className="text-gray-800 font-medium">
                    chaitanyanirmale04@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>
                  <p className="text-gray-800 font-medium">
                    Pune
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/chaitanyanirmale"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-600 hover:text-amber-600 transition"
                  >
                    https://github.com/chaitanyanirmale
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Linkedin
                  </p>
                  <a
                    href="https://www.linkedin.com/in/chaitanyanirmale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-600 hover:text-amber-600 transition">
                      https://www.linkedin.com/in/chaitanyanirmale/
                  </a>
                </div>
              </div>
            </div>
            <form className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition resize-none"
                />
              </div>
              <button type="submit" className="w-full py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-amber-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;