const Education = () => {
  return (
    <section
      id="education"
      className="border-t border-white/[0.05] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            04. Education
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My academic journey.
          </h2>
        </div>

        <div className="relative max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10" />

          {/* B.Tech */}
          <div className="relative pl-10">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400" />

            <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.02] p-7">
              <span className="text-xs uppercase tracking-widest text-cyan-400">
                B.Tech
              </span>

              <h3 className="mt-3 text-xl font-bold">
                Computer Engineering
              </h3>

              <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-slate-400 sm:text-lg">
                GB Pant University of Agriculture and Technology
              </p>

              <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-slate-400 sm:text-lg">
                Studied computer engineering with focus on software
                development, programming, databases, operating
                systems, computer networks, and modern computing
                technologies.
              </p>
            </div>
          </div>

          {/* Diploma */}
          <div className="relative mt-10 pl-10">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-slate-500" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <span className="text-xs uppercase tracking-widest text-slate-500">
                Diploma
              </span>

              <h3 className="mt-3 text-xl font-bold">
                Computer Science & Engineering
              </h3>

              <p className="mt-2 text-slate-400">
                Government Girls Polytechnic, Almora
              </p>

              <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-slate-400 sm:text-lg">
                Built a foundation in programming, databases,
                computer systems, software development, and
                information technology.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;