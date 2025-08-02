import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.svg";
import react from "../assets/react.svg";
import CustomSelect from "./CustomSelect";
import { useTranslation } from "react-i18next";
import SwitchComponent from "./Swicher";

function Header( {toggleTheme} ) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header className="fixed mb-[80px] top-0 left-0 w-full z-50 bg-transparent bg-opacity-80 backdrop-blur-sm shadow-sm py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="JobFinder Logo" className="h-[60px] w-[200px]" />
        </div>

        <nav className="hidden md:flex gap-6 dark:text-white text-gray-700 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            {t("home")}
          </Link>
          <Link to="/jobs" className="hover:text-blue-600 transition">
            {t("jobs")}
          </Link>
          <Link to="#" className="hover:text-blue-600 transition">
            {t("about")}
          </Link>
          <Link to="#" className="hover:text-blue-600 transition">
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <CustomSelect />
            <div className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="login"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition"
            >
              {t("signup")}
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <SwitchComponent toggleTheme={toggleTheme} /> 
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md py-4 px-6 z-40 flex flex-col gap-4 text-gray-800 text-sm font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>
            {t("home")}
          </Link>
          <Link to="/jobs" onClick={() => setIsOpen(false)}>
            {t("jobs")}
          </Link>
          <Link to="#" onClick={() => setIsOpen(false)}>
            {t("about")}
          </Link>
          <Link to="#" onClick={() => setIsOpen(false)}>
            {t("contact")}
          </Link>
          <Link
            to="login"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            {t("signup")}
          </Link>
          <SwitchComponent toggleTheme={toggleTheme} /> 
        </div>
      )}
    </>
  );
}

export default Header;