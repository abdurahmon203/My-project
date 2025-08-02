import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", flag: "https://flagcdn.com/us.svg" },
  { code: "ru", label: "Русский", flag: "https://flagcdn.com/ru.svg" },
  { code: "tj", label: "Тоҷикӣ", flag: "https://flagcdn.com/tj.svg" },
];

export default function CustomSelect() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const { i18n } = useTranslation();

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];
  const [selected, setSelected] = useState(currentLang);

  useEffect(() => {
    setSelected(currentLang);
  }, [i18n.language]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-40" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center gap-2">
          <img
            src={selected.flag}
            alt={selected.label}
            className="w-5 h-4 object-cover"
          />
          <span className="dark:text-white text-gray-700">{selected.label}</span>
        </div>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-blue-100"
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setSelected(lang);
                setOpen(false);
              }}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-5 h-4 object-cover"
              />
              <span className="text-gray-700">{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}