import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./index.css";

// Components
import Header from "./components/Header";
import SideBar from "./components/SideBar";

// Pages
import Home from "./pages/Home";
import SofwareLib from "./pages/Software";
import BrowserLib from "./pages/Browser";
import Framework from "./pages/Framework";
import Google from "./pages/Google";

function App() {
  const location = useLocation();

  return (
    <main className="flex flex-col bg-[#F1FAEE] text-black dark:bg-zinc-900 dark:text-white h-[100vh]">
      <Header />
      <div className="flex h-[94%]">
        <SideBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/Browser" element={<BrowserLib />} />
            <Route path="/Software" element={<SofwareLib />} />
            <Route path="/Framework" element={<Framework />} />
            <Route path="/Google" element={<Google />} />
          </Routes>
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;