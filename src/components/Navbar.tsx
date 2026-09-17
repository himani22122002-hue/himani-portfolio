import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          Himani<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm transition duration-300 ${
                index === 0
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download="Himani-Joshi-Resume.pdf"
            className="ml-2 rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-medium text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-slate-950 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              download="Himani-Joshi-Resume.pdf"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-fit rounded-full border border-cyan-400/40 px-5 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;