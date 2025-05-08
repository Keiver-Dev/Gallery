import { Browser as BrowserData } from "../data/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function BrowserLib() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIcons = BrowserData.filter((icon) =>
    icon.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.section
      className="flex-[88%] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <section className="flex-[88%] flex flex-col">
        <section className="flex p-12 gap-4 flex-wrap items-center overflow-auto">
          <Link to="/">
            <section className="flex gap-2 items-center text-zinc-700 dark:text-zinc-500 transition-colors hover:text-[#D9A066] dark:hover:text-white">
              <svg className="w-6 h-6">
                <use href="/Icons.svg#Angle-Left"></use>
              </svg>
              <h1>View All</h1>
            </section>
          </Link>

          {/* Search */}
          <section className="flex w-full items-center border-b border-[#D9A066] dark:border-zinc-700 gap-2 p-2">
            <div className="flex">
              <svg
                className="text-[#D9A066] dark:text-zinc-400"
                width="20"
                height="20"
              >
                <use href="/Icons.svg#Search" />
              </svg>
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 bg-transparent text-sm text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-transparent"
              />
            </div>
          </section>

          {/* Cards */}
          {filteredIcons.map((icon, index) => (
            <div
              key={icon.id || index}
              className="flex flex-col border border-[#D9A066] dark:border-zinc-800 rounded-lg p-4 w-56 h-44 hover:bg-[#D9A066] dark:hover:bg-zinc-800 hover:text-white dark:hover:text-[#DAFDBA] hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-start gap-2">
                {icon.Image ? (
                  <img
                    src={icon.Image}
                    alt={icon.title}
                    className="w-12 h-12 ring-2 bg-white dark:bg-transparent ring-[#D9A066] dark:ring-zinc-800 p-2 rounded-full object-contain"
                  />
                ) : (
                  <svg
                    className="text-zinc-700 bg-white dark:bg-transparent dark:text-white w-12 h-12 ring-2 ring-[#D9A066] dark:ring-zinc-800 p-2 rounded-full"
                    width="40"
                    height="40"
                  >
                    <use href={`/Icons.svg#${icon.id}`} />
                  </svg>
                )}
                <h1 className="text-xl font-semibold">{icon.title}</h1>
                <span className="text-sm dark:text-zinc-400">
                  {icon.category}
                </span>
              </div>
              <div className="flex col gap-4 mt-auto">
                <svg
                  className=" hover:text-amber-800 dark:hover:text-[#F1FAEE] duration-200 hover:transform hover:scale-110"
                  width="22"
                  height="22"
                >
                  <use href="/Icons.svg#Copi" />
                </svg>
                <svg
                  className=" hover:text-amber-800 dark:hover:text-[#F1FAEE] duration-200 hover:transform hover:scale-110"
                  width="22"
                  height="22"
                >
                  <use href="/Icons.svg#Download" />
                </svg>
                <svg
                  className=" hover:text-amber-800 dark:hover:text-[#F1FAEE] duration-200 hover:transform hover:scale-110"
                  width="22"
                  height="22"
                >
                  <use href="/Icons.svg#WebLoad" />
                </svg>
              </div>
            </div>
          ))}
        </section>
      </section>
    </motion.section>
  );
}

export default BrowserLib;
