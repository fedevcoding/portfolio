export type ThemeType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
};

export type Child = {
  children: React.ReactNode;
};
