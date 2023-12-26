"use client";

import { discord, email, github, logo, moon, pipe, sun } from "@/assets";
import { useThemeContext } from "@/context";
import { motion } from "framer-motion";

function Header() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <motion.div initial={{ translateY: -100 }} animate={{ translateY: 0 }}>
      <header className="flex justify-around items-center h-header" id="header">
        <img src={logo.src} alt="logo" />
        <nav>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Tech Stack</li>
            <li>Projects</li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          {isDark ? (
            <img
              src={moon.src}
              alt="moon"
              className="w-8 h-8"
              onClick={toggleTheme}
            />
          ) : (
            <img
              src={sun.src}
              alt="sun"
              className="w-8 h-8"
              onClick={toggleTheme}
            />
          )}
          <img src={pipe.src} alt="pipe" className="w-8 h-8 dark:invert" />
          <img src={github.src} alt="github" className="w-8 h-8 dark:invert" />
          <img
            src={discord.src}
            alt="discord"
            className="w-8 h-8 dark:invert"
          />
          <img src={email.src} alt="email" className="w-8 h-8 dark:invert" />
        </div>
      </header>
    </motion.div>
  );
}

export default Header;
