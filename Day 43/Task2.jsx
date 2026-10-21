import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          Shopora
        </h1>

        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-16 z-10 w-full flex-col gap-5 bg-slate-900 p-6 md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-cyan-400"
            >
              {link}
            </a>
          ))}

          <button className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-900 hover:bg-cyan-400">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
