export type ThemeType = {
  theme: "light" | "dark";
  isDark: boolean;
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
};

export type Child = {
  children: React.ReactNode;
};

export type Projects = {
  label: string;
  icon: string;

  name: string;
  description: string;
  technologies: string[];
  preview: string;

  repo: string | null;
  url: string | null;
}[];
