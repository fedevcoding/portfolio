"use client";

import { discord, email, github, logo, moon, pipe, sun } from "@/assets";
import { useThemeContext } from "@/context";
import { Row } from "./ui/Row";
import Link from "next/link";
import { Img } from "./ui/Img";
import { useBreakPoint } from "@/context/BreakPoints";
import Burger from "./Burger";
import { useCycle } from "framer-motion";

function Header() {
  const { max } = useBreakPoint();
  const [isOpen, toggle] = useCycle(false, true);
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <header className="h-header">
      <Row align={"center"} justify={"center"} gap={max.isLg ? "2xl" : "5xl"}>
        <Link href="/">
          <Img alt="logo" src={logo.src} size={"lg"} />
        </Link>
        {max.isMd ? (
          <Row gap={"md"} align={"center"}>
            <Img
              src={isDark ? moon.src : sun.src}
              alt="theme"
              onClick={toggleTheme}
              aspect={"square"}
              fit="contain"
              size={"sm-2"}
              className="cursor-pointer"
            />
            <Burger isOpen={isOpen} toggle={toggle} />
          </Row>
        ) : (
          <>
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
              <Img
                src={isDark ? moon.src : sun.src}
                alt="theme"
                onClick={toggleTheme}
                aspect={"square"}
                fit="contain"
                size={"sm-2"}
                className="cursor-pointer"
              />
              <Img
                src={pipe.src}
                alt="pipe"
                className="dark:invert"
                aspect={"square"}
                fit="contain"
                size={"sm-2"}
              />
              <Link href={"https://github.com/fedevcoding"} target="_blank">
                <Img
                  src={github.src}
                  alt="github"
                  className="dark:invert"
                  aspect={"square"}
                  fit="contain"
                  size={"sm-2"}
                />
              </Link>
              <Link
                href={"https://discordapp.com/users/646076973025722388"}
                target="_blank"
              >
                <Img
                  src={discord.src}
                  alt="discord"
                  className="dark:invert"
                  aspect={"square"}
                  fit="contain"
                  size={"sm-2"}
                />
              </Link>

              <Link href={"mailto:fedevcoding@gmail.com"} target="_blank">
                <Img
                  src={email.src}
                  alt="email"
                  className="dark:invert"
                  aspect={"square"}
                  fit="contain"
                  size={"sm-2"}
                />
              </Link>
            </Row>
          </>
        )}
      </Row>
    </header>
  );
}

export default Header;
