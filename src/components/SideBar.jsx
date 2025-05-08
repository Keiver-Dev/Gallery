import { Icons } from "../data/Data";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation(); // <- Detector de ruta actual.

  const categoryBrowser = "Browser";
  const categorySoftware = "Software";
  const categoryFramework = "Framework";
  const categoryGoogle = "Google";

  const iconCountBrowser = Icons.filter(
    (icon) => icon.category === categoryBrowser
  ).length;
  const iconCountSoftware = Icons.filter(
    (icon) => icon.category === categorySoftware
  ).length;
  const iconCountFramework = Icons.filter(
    (icon) => icon.category === categoryFramework
  ).length;
  const iconCountGoogle = Icons.filter(
    (icon) => icon.category === categoryGoogle
  ).length;

  const baseBtn =
    "flex justify-between transition-all duration-200 p-2 w-full rounded-md text-left hover:bg-[#D9A066] dark:hover:bg-zinc-800 text-zinc-700 hover:text-[#F1FAEE] dark:text-white dark:hover:text-[#9AEBA3] hover:scale-105";
  const activeBtn = "bg-[#D9A066] dark:bg-zinc-800 text-white scale-105";

  return (
    <aside className="flex flex-col flex-[12%] border-e-2 border-[#D9A066] dark:border-zinc-700 border-opacity-35 rounded-sm gap-2 p-2">
      {/* Navegación principal */}
      <section className="flex w-full">
        <Link to="/" className="w-full block">
          <button
            className={`${baseBtn} ${
              location.pathname === "/" ? activeBtn : ""
            }`}
          >
            <h1 className="font-semibold text-sm tracking-wide">All</h1>
          </button>
        </Link>
      </section>

      <p className="text-zinc-400 w-full border-b border-[#D9A066] dark:border-zinc-700 border-opacity-30"></p>

      <section className="flex flex-col gap-2">
        <Link to="/Browser">
          <button
            className={`${baseBtn} ${
              location.pathname === "/Browser" ? activeBtn : ""
            }`}
          >
            <h1 className="font-semibold text-sm tracking-wide">Browser</h1>
            <p>{iconCountBrowser}</p>
          </button>
        </Link>
        <Link to="/Software">
          <button
            className={`${baseBtn} ${
              location.pathname === "/Software" ? activeBtn : ""
            }`}
          >
            <h1 className="font-semibold text-sm tracking-wide">Software</h1>
            <p>{iconCountSoftware}</p>
          </button>
        </Link>
        <Link to="/Framework">
          <button
            className={`${baseBtn} ${
              location.pathname === "/Framework" ? activeBtn : ""
            }`}
          >
            <h1 className="font-semibold text-sm tracking-wide">Framework</h1>
            <p>{iconCountFramework}</p>
          </button>
        </Link>
        <Link to="/Google" className="w-full block">
          <button
            className={`${baseBtn} ${
              location.pathname === "/Google" ? activeBtn : ""
            }`}
          >
            <h1 className="font-semibold text-sm tracking-wide">Google</h1>
            <p>{iconCountGoogle}</p>
          </button>
        </Link>
      </section>
    </aside>
  );
}

export default SideBar;
