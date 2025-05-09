import { useEffect, useState } from 'react';

function Header() {
  const [isDark, setIsDark] = useState(false);

  // Cargar preferencia desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(prefersDark);
  }, []);

  // Aplicar la clase dark al <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className="flex h-[6%] p-2 border-b-2 border-[#D9A066] dark:border-zinc-700 border-opacity-35 items-center justify-between rounded-sm">
      <section className="flex items-center gap-1">
        <svg className="w-10 h-10 p-2" width="26" height="26">
          <use href="Icons.svg#Fire"></use>
        </svg>
        <h1 className="font-bold text-lg text-[#D9A066] dark:text-white">Gallery</h1>
      </section>
      <section className="flex gap-3">
        <a href="https://github.com/Keiver-Dev/SVG-Gallery">
          <svg className="text-[#D9A066] dark:text-zinc-400 hover:text-[#45C4B0] dark:hover:text-[#DAFDBA] transition-colors duration-200" width="24" height="24">
            <use href="Icons.svg#GitHub"></use>
          </svg>
        </a>
        <button
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle dark mode"
          className="transition-colors text-[#D9A066] dark:text-zinc-400 hover:text-[#9AEBA3] dark:hover:text-[#DAFDBA]"
        >
          <svg width="20" height="20">
            <use href="Icons.svg#DarkMode"></use>
          </svg>
        </button>
      </section>
    </header>
  );
}

export default Header;
