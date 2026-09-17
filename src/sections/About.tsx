const About = () => {
  return (
    <section
      id="about"
      className="border-t border-white/[0.05] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            01. About Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            A little about me.
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Left Content */}
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-slate-400">
              I am a Computer Engineering graduate with a strong interest in full-stack development, software development, and artificial intelligence. I enjoy building practical applications that solve real-world problems and provide a smooth user experience.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I have hands-on experience working with technologies like React, TypeScript, Node.js, Python, PostgreSQL, and REST APIs. I enjoy working across both frontend and backend development and understanding how different parts of an application work together.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I have worked on projects such as CampusLynk, a college networking platform, along with AI-powered applications and database-driven systems. These projects have helped me improve my development, debugging, and problem-solving skills.
              I am a curious and continuous learner who enjoys exploring new technologies, experimenting with ideas, and turning concepts into working solutions. My goal is to grow as a software developer while contributing to meaningful and impactful products.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid gap-4">
            
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="mb-4 text-2xl">💻</div>

              <h3 className="text-lg font-semibold">
                Full-Stack Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Building modern frontend and backend applications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="mb-4 text-2xl">🤖</div>

              <h3 className="text-lg font-semibold">
                AI & Automation
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Exploring practical AI-powered applications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="mb-4 text-2xl">🧩</div>

              <h3 className="text-lg font-semibold">
                Problem Solving
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Breaking complex problems into simple solutions.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;