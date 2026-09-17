const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

        <div>
          <p className="font-semibold">
            Himani
            <span className="text-cyan-400">.</span>
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Computer Engineering Graduate & Full-Stack Developer
          </p>
        </div>

        <div className="flex gap-5 text-xs text-slate-500">
          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>

          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Himani Joshi
        </p>

      </div>
    </footer>
  );
};

export default Footer;