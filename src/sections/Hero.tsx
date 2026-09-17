import profileImage from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[5%] top-[15%] h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[100px]" />

        <div className="absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-blue-600/[0.06] blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.025] blur-[100px]" />
      </div>

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ================= LEFT CONTENT ================= */}

        <div className="max-w-3xl">
          {/* Hello */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Himani

            <span className="block bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600 bg-clip-text text-transparent">
              Joshi.
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-8 max-w-2xl text-2xl font-semibold leading-relaxed text-slate-200 sm:text-3xl">
            Computer Engineering Graduate
            <span className="text-cyan-400"> & </span>
            Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-justify text-base leading-8 text-slate-400 sm:text-lg">
            I build modern web applications and explore AI-powered
            solutions with a focus on clean, scalable, and
            user-friendly experiences.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            {/* View My Work */}
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              View My Work
              <span className="ml-2">→</span>
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Himani-Joshi-Resume.pdf"
              className="rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/himani22122002-hue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.83 0c2.22-1.48 3.2-1.17 3.2-1.17.63 1.58.23 2.74.11 3.04.75.8 1.2 1.82 1.2 3.07 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/himani-joshi-335838238"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 .77.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0Z" />
              </svg>
            </a>

            <span className="ml-2 hidden h-px w-16 bg-white/10 sm:block" />

            <span className="hidden text-xs tracking-widest text-slate-600 sm:block">
              OPEN TO OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* ================= RIGHT PROFILE ================= */}

        {/* ================= RIGHT PROFILE ================= */}

<div className="relative mx-auto flex h-[430px] w-full max-w-[390px] items-center justify-center lg:h-[500px] lg:max-w-[500px] xl:h-[540px] xl:max-w-[540px]">

  {/* Main Glow */}
  <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-400/[0.04] blur-3xl lg:h-[370px] lg:w-[370px] xl:h-[400px] xl:w-[400px]" />

  {/* Outer Orbit */}
  <div className="absolute h-[330px] w-[330px] rounded-full border border-cyan-400/[0.10] lg:h-[400px] lg:w-[400px] xl:h-[440px] xl:w-[440px]" />

  {/* Middle Orbit */}
  <div className="absolute h-[285px] w-[285px] rounded-full border border-white/[0.07] lg:h-[345px] lg:w-[345px] xl:h-[380px] xl:w-[380px]" />

  {/* Inner Orbit */}
  <div className="absolute h-[250px] w-[250px] rounded-full border border-cyan-400/[0.08] lg:h-[300px] lg:w-[300px] xl:h-[330px] xl:w-[330px]" />

  {/* ================= PROFILE IMAGE ================= */}

  <div className="relative z-10 h-[215px] w-[215px] overflow-hidden rounded-full border-2 border-cyan-400/40 bg-slate-900 shadow-2xl shadow-cyan-400/10 lg:h-[255px] lg:w-[255px] xl:h-[290px] xl:w-[290px]">
    <img
      src={profileImage}
      alt="Himani Joshi"
      className="h-full w-full object-cover"
    />

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-cyan-400/[0.05]" />
  </div>

  {/* ================= SKILL BADGES ================= */}

  {/* Git - Top Center */}
  <div className="absolute left-1/2 top-[8px] -translate-x-1/2 rounded-xl border border-orange-400/20 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-orange-400/40 lg:top-[18px] xl:top-[28px] xl:px-4 xl:py-2.5">
    <p className="text-[10px] font-semibold text-orange-400 xl:text-xs">
      Git
    </p>
  </div>

  {/* Node.js - Upper Left */}
  <div className="absolute left-[32px] top-[48px] rounded-xl border border-green-400/20 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-green-400/40 lg:left-[55px] lg:top-[65px] xl:left-[70px] xl:top-[80px] xl:px-4 xl:py-2.5">
    <p className="text-[10px] font-semibold text-green-400 xl:text-xs">
      Node.js
    </p>
  </div>

  {/* React - Upper Right */}
  <div className="absolute right-[8px] top-[82px] rounded-xl border border-cyan-400/20 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-400/50 lg:right-[25px] lg:top-[100px] xl:right-[28px] xl:top-[115px] xl:px-4 xl:py-2.5">
    <p className="text-[10px] font-semibold text-cyan-400 xl:text-xs">
      React
    </p>
  </div>

  {/* Python - Left Center */}
  <div className="absolute left-[0px] top-[190px] rounded-xl border border-yellow-400/20 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-yellow-400/40 lg:left-[8px] lg:top-[225px] xl:left-[5px] xl:top-[255px] xl:px-4 xl:py-2.5">
    <p className="text-[10px] font-semibold text-yellow-300 xl:text-xs">
      Python
    </p>
  </div>

  {/* Tailwind - Right Center */}
  <div className="absolute right-[0px] top-[190px] rounded-xl border border-sky-400/20 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-sky-400/40 lg:right-[8px] lg:top-[235px] xl:right-[0px] xl:top-[270px] xl:px-4 xl:py-2.5">
    <p className="text-[10px] font-semibold text-sky-400 xl:text-xs">
      Tailwind
    </p>
  </div>

  {/* PostgreSQL - Bottom Left */}
  <div className="absolute bottom-[45px] left-[28px] rounded-xl border border-indigo-400/20 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-indigo-400/40 lg:bottom-[58px] lg:left-[48px] xl:bottom-[85px] xl:left-[65px] xl:px-4 xl:py-2.5">
    <p className="text-[10px] font-semibold text-indigo-400 xl:text-xs">
      PostgreSQL
    </p>
  </div>

  {/* TypeScript - Bottom Right */}
  <div className="absolute bottom-[45px] right-[28px] rounded-xl border border-blue-400/20 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-blue-400/40 lg:bottom-[58px] lg:right-[48px] xl:bottom-[75px] xl:right-[55px] xl:px-4 xl:py-2.5">
    <p className="text-[10px] font-semibold text-blue-400 xl:text-xs">
      TypeScript
    </p>
  </div>

  {/* AI - Bottom Center */}
  <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 rounded-xl border border-purple-400/20 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-purple-400/40 lg:bottom-[15px] xl:bottom-[28px] xl:px-4 xl:py-2.5">
    <p className="text-[10px] font-semibold text-purple-400 xl:text-xs">
      AI
    </p>
  </div>

  {/* Open To Work */}
  <div className="absolute left-[18px] top-[155px] z-20 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/95 px-3 py-1.5 shadow-xl backdrop-blur-xl lg:left-[35px] lg:top-[170px] xl:left-[45px] xl:top-[175px] xl:px-4 xl:py-2">
    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

    <span className="text-[10px] text-slate-400 xl:text-xs">
      Open to work
    </span>
  </div>
</div>
</div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-cyan-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">
          Scroll to explore
        </span>

        <span className="animate-bounce text-lg">
          ↓
        </span>
      </a>
    </section>
  );
};

export default Hero;