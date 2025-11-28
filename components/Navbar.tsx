"use client";
import React from "react";
import { navIcons, navLinks } from "@/constants/index";
import dayjs from "dayjs";
import useWindowStore from "@/store/window";
import useThemeStore from "@/store/theme";
import { MoonStar, Sun } from "lucide-react";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { theme, toggleTheme } = useThemeStore();
  const utilityIcons = navIcons.filter((icon) => icon.id !== 4);

  return (
    <nav className="relative w-full bg-white/50 backdrop-blur-3xl select-none p-2 px-5 flex justify-between items-center max-sm:rounded-none max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:z-[99999]">
      {/* Notch overlay for mobile */}

      <div className="flex items-center gap-5 max-sm:w-full max-sm:justify-center z-20 relative">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className={theme === "dark" ? "invert" : ""}
        />
        <p className="font-bold  w-50 sm:w-fit ">Rishi Yadav's Portfolio</p>
        <ul className="flex items-center gap-5 max-sm:hidden">
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => openWindow(link.type)}>
              <p className="text-sm cursor-pointer hover:underline transition-all">
                {link.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end items-center gap-5 z-20 relative ">
        <ul className="flex items-center gap-5">
          {utilityIcons.map((icon) => (
            <li key={icon.id} className="max-sm:hidden">
              <img
                src={icon.img}
                className={theme === "dark" ? "invert" : ""}
                alt={`icon-${icon.id}`}
              />
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="mode-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <MoonStar size={18} /> : <Sun size={18} />}
            </button>
          </li>
        </ul>
        <time className="text-sm font-medium max-sm:hidden text-black">
          {dayjs().format("ddd MMM D H:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
