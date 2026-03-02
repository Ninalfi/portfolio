import { useState } from "react";
import { scrollToId } from "../utils/scrollToId";
import { useTheme } from "../context/ThemeProvider";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur
                       dark:bg-[#0B0B0B]/70 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => go("home")}
          className="font-bold text-lg text-gray-900 dark:text-white"
        >
          Portfolio
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm text-gray-700 hover:underline
                         dark:text-gray-200 dark:hover:text-white"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-xl border px-3 py-2 text-sm bg-white hover:bg-gray-50
                       dark:bg-[#111] dark:text-white dark:border-white/10 dark:hover:bg-[#171717]"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden border rounded-xl px-3 py-2 text-sm
                       bg-white hover:bg-gray-50 text-gray-900
                       dark:bg-[#111] dark:text-white dark:border-white/10 dark:hover:bg-[#171717]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white
                        dark:bg-[#0B0B0B] dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-left text-sm text-gray-800 hover:underline
                           dark:text-gray-200 dark:hover:text-white"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}