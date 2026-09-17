import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-t border-white/[0.05] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            02. Skills
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 max-w-2xl text-slate-500">
            A collection of technologies and tools I use while
            building applications and learning new concepts.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="text-lg font-semibold text-white">
                {skillGroup.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-xs text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;