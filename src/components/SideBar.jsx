import { Icons } from "../data/Data";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function SideBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Browser", count: Icons.filter(i => i.category === "Browser").length },
    { name: "Software", count: Icons.filter(i => i.category === "Software").length },
    { name: "Framework", count: Icons.filter(i => i.category === "Framework").length },
    { name: "Google", count: Icons.filter(i => i.category === "Google").length },
  ];

  const baseBtn =
    "flex justify-between transition-all duration-200 p-2 w-full rounded-md text-left hover:bg-[#D9A066] dark:hover:bg-zinc-800 text-zinc-700 hover:text-[#F1FAEE] dark:text-white dark:hover:text-[#9AEBA3] hover:scale-105";
  const activeBtn = "bg-[#D9A066] dark:bg-zinc-800 text-white scale-105";

  return (
    <>
      {/* Botón hamburguesa solo visible en móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 fixed top-3 left-2 z-50 bg-zinc-900 text-white rounded"
      >
        ☰
      </button>

      {/* Sidebar responsivo */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 z-40 bg-[#F1FAEE] dark:bg-zinc-900 p-4 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex md:flex-col md:w-64 border-r border-[#D9A066] dark:border-zinc-700`}
      >
        {/* Cerrar en móvil */}
        <div className="flex justify-end mb-2 md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="text-zinc-600 dark:text-zinc-400 text-xl"
          >
            ✕
          </button>
        </div>

        <Link to="/" onClick={() => setIsOpen(false)}>
          <button className={`${baseBtn} ${location.pathname === "/" ? activeBtn : ""}`}>
            <h1 className="font-semibold text-sm tracking-wide">All</h1>
          </button>
        </Link>

        <p className="my-2 border-b border-[#D9A066] dark:border-zinc-700 border-opacity-30" />

        <section className="flex flex-col gap-2">
          {categories.map(({ name, count }) => (
            <Link key={name} to={`/${name}`} onClick={() => setIsOpen(false)}>
              <button
                className={`${baseBtn} ${
                  location.pathname === `/${name}` ? activeBtn : ""
                }`}
              >
                <h1 className="font-semibold text-sm tracking-wide">{name}</h1>
                <p>{count}</p>
              </button>
            </Link>
          ))}
        </section>
      </aside>
    </>
  );
}

export default SideBar;
