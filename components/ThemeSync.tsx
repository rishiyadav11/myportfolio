"use client";

import { useEffect } from "react";
import useThemeStore, { ThemeMode } from "@/store/theme";

const THEME_STORAGE_KEY = "portfolio-theme";

const ThemeSync = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const stored = window.localStorage.getItem(
      THEME_STORAGE_KEY
    ) as ThemeMode | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDark.matches) {
      setTheme("dark");
    }

    const listener = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    prefersDark.addEventListener("change", listener);
    return () => prefersDark.removeEventListener("change", listener);
  }, [setTheme]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.setAttribute("data-theme", theme);
    body.dataset.theme = theme;
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(`theme-${theme}`);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return null;
};

export default ThemeSync;





