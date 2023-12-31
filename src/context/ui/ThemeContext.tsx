"use client";

import { Child, ThemeType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeType>({
  theme: "dark",
  isDark: true,
  setTheme: () => {},
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export function ThemeProvider({ children }: Child) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      toggleClasses(true);
      setIsDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!
      );
      toggleClasses(isDarkTheme);
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleClasses(isDarkTheme: boolean): void {
    document.body.classList.remove("dark", "light");
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }

  function toggleTheme(): void {
    const isDarkTheme: boolean = JSON.parse(
      localStorage.getItem("isDarkTheme")!
    );
    setIsDarkTheme(!isDarkTheme);
    toggleClasses(!isDarkTheme);
    setValueToLocalStorage();
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  const theme = isDarkTheme ? "dark" : "light";
  const setTheme = (theme: string) => {
    theme === "dark" ? setIsDarkTheme(true) : setIsDarkTheme(false);
  };

  return (
    <ThemeContext.Provider
      value={{ setTheme, toggleTheme, theme, isDark: isDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
