import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.svg";
import PersonIcon from "@mui/icons-material/Person";
import CustomSelect from "./CustomSelect";
import { useTranslation } from "react-i18next";
import SwitchComponent from "./Swicher";
import { Button, Drawer } from "antd";

function Header({ toggleTheme }) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Check for logged-in user on component mount
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }

    // Listen for storage events to sync across tabs
    const handleStorageChange = () => {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      setCurrentUser(user || null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setIsOpen(false);
    // Trigger storage event to sync across tabs
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <header className="fixed mb-[80px] top-0 left-0 w-full z-50 bg-transparent bg-opacity-80 backdrop-blur-sm shadow-sm py-3 px-6 flex flex-wrap items-center justify-between">
        <Drawer
          title={<h1 className="text-gray-800 ">User</h1>}
          className="bg-white dark:bg-gray-800"
          placement="right"
          closable={{ "aria-label": "Close Button" }}
          onClose={onClose}
          open={open}
        >
          <div className="flex flex-col gap-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 inline-block mr-2 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              {t("edituser")}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 inline-block mr-2 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>

              {t("logout")}
            </button>
          </div>
        </Drawer>
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

        <div className="flex text-center flex-wrap items-center gap-4">
          <div className="relative">
            <CustomSelect />
          </div>

          {currentUser ? (
            <div
              onClick={showDrawer}
              className="duser py-2 px-4 hidden cursor-pointer md:flex items-center gap-[10px] border-[2px] dark:border-white border-black rounded-3xl"
            >
              <PersonIcon className="text-gray-700 dark:text-white" />
              <p className="uname text-gray-700 dark:text-white">
                {currentUser.name}
              </p>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/login"
                className="btnLogin bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition"
              >
                {t("signup")}
              </Link>
            </div>
          )}

          <div className="hidden md:flex items-center gap-3">
            <SwitchComponent toggleTheme={toggleTheme} />
          </div>
          <button
            className="md:hidden block text-gray-700 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="md:hidden fixed top-[120px] left-0 w-full bg-transparent bg-opacity-95 backdrop-blur-sm shadow-md py-4 px-6 z-40 flex flex-col gap-4">
          <Link
            to="/"
            className="text-gray-700 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            {t("home")}
          </Link>
          <Link
            to="/jobs"
            className="text-gray-700 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            {t("jobs")}
          </Link>
          <Link
            to="#"
            className="text-gray-700 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            {t("about")}
          </Link>
          <Link
            to="#"
            className="text-gray-700 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            {t("contact")}
          </Link>

          {currentUser ? (
            <>
              <div className="duser py-2 px-4 flex items-center gap-[10px] border-[2px] dark:border-white border-black rounded-3xl">
                <PersonIcon className="text-gray-700 dark:text-white" />
                <p className="uname text-gray-700 dark:text-white">
                  {currentUser.name}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                {t("logout")}
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="btnLogin2 bg-blue-600 text-white py-2 px-4 rounded-lg text-center"
            >
              {t("signup")}
            </Link>
          )}

          <div className="flex justify-center">
            <SwitchComponent toggleTheme={toggleTheme} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
