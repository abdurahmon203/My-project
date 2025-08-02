import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import useDarkSide from "../pages/useDarkMode";

const Layout = () => {
  const [theme, toggleTheme] = useDarkSide();
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      <header>
        <Header toggleTheme={toggleTheme} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-white dark:bg-gray-900 text-center text-gray-800 dark:text-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
