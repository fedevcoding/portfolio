"use client";

import { discord, email, github, logo, moon, pipe, sun } from "@/assets";
import { useThemeContext } from "@/context";
import { Row } from "./ui/Row";
import Link from "next/link";

function Header() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <header className="h-header">
      <Row align={"center"} justify={"center"} gap={"5xl"}>
        <Link href="/">
          <img src={logo.src} alt="logo" />
        </Link>
        <nav>
          <ul>
            <Row gap={"md"}>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href={"#tech-stack"}>Tech Stack</Link>
              </li>
              <li>
                <Link href={"#projects"}>Projects</Link>
              </li>
            </Row>
          </ul>
        </nav>
        <Row align={"center"} gap={"sm"}>
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
        </Row>
      </Row>
    </header>
  );
}

export default Header;
