import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-white/[0.05] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            03. Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Things I've built.
          </h2>

          <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-slate-400 sm:text-lg">
            A selection of projects that showcase my development
            skills and interest in building practical solutions.
          </p>
        </div>


        {/* Projects */}
        <div className="grid items-start gap-6 lg:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-2 ${
                project.featured
                  ? "border-cyan-400/30 lg:col-span-2"
                  : "border-white/10"
              }`}
            >

              {/* Hover Line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />


              {/* Content */}
              <div className="flex flex-col justify-between gap-8 lg:flex-row">


                {/* LEFT CONTENT */}
                <div className="flex-1">

                  {/* Featured */}
                  {project.featured && (
                    <span className="mb-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-400">
                      FEATURED PROJECT
                    </span>
                  )}


                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>


                  {/* Description */}
                  <p className="mt-4 text-justify text-sm leading-7 text-slate-400">
  {project.description}
</p>


                  {/* Features */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-500 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>


                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-xs font-medium text-cyan-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>


                  {/* GitHub Link */}
                  {project.github && (
                    <div className="mt-7">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
                      >
                        Project Link ↗
                      </a>
                    </div>
                  )}

                </div>


                {/* PROJECT IMAGE */}
                <div
                  className={`flex items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900/70 p-2 ${
                    project.featured
                      ? "min-h-[260px] lg:w-[320px]"
                      : "min-h-[280px] lg:w-[320px]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="max-h-[300px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;