"use client";

import { Child, ThemeType } from "@/types";
import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

const ThemeContext = createContext<ThemeType>({
  theme: "dark",
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
  const [isDarkTheme, setDarkTheme] = useLocalStorage("darkTheme", true);

  const theme: ThemeType["theme"] = isDarkTheme ? "dark" : "light";

  const toggleTheme = () => setDarkTheme(!isDarkTheme);
  const setTheme = (theme: ThemeType["theme"]) =>
    setDarkTheme(theme === "dark");

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [isDarkTheme, theme]);

  return (
    <ThemeContext.Provider value={{ setTheme, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
