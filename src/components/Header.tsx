import { discord, email, github, logo, moon, pipe, sun } from "@/assets";
import { useThemeContext } from "@/context";
import { Row } from "./ui/Row";

import { Img } from "./ui/Img";
import { useBreakPoint } from "react-use-breakpoint";
import Burger from "./Burger";
import { useCycle } from "framer-motion";

function Header() {
  const { max } = useBreakPoint();
  const [isOpen, toggle] = useCycle(false, true);
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <header className="h-header">
      <Row align={"center"} justify={"center"} gap={max.isLg ? "2xl" : "5xl"}>
        <a href="/">
          <Img alt="logo" src={logo} size={"lg"} />
        </a>
        {max.isMd ? (
          <Row gap={"md"} align={"center"}>
            <Img
              src={isDark ? moon : sun}
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
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href={"#tech-stack"}>Tech Stack</a>
                  </li>
                  <li>
                    <a href={"#projects"}>Projects</a>
                  </li>
                </Row>
              </ul>
            </nav>
            <Row align={"center"} gap={"sm"}>
              <Img
                src={isDark ? moon : sun}
                alt="theme"
                onClick={toggleTheme}
                aspect={"square"}
                fit="contain"
                size={"sm-2"}
                className="cursor-pointer"
              />
              <Img
                src={pipe}
                alt="pipe"
                className="dark:invert"
                aspect={"square"}
                fit="contain"
                size={"sm-2"}
              />
              <a href={"https://github.com/fedevcoding"} target="_blank">
                <Img
                  src={github}
                  alt="github"
                  className="dark:invert"
                  aspect={"square"}
                  fit="contain"
                  size={"sm-2"}
                />
              </a>
              <a
                href={"https://discordapp.com/users/646076973025722388"}
                target="_blank"
              >
                <Img
                  src={discord}
                  alt="discord"
                  className="dark:invert"
                  aspect={"square"}
                  fit="contain"
                  size={"sm-2"}
                />
              </a>

              <a href={"mailto:fedevcoding@gmail.com"} target="_blank">
                <Img
                  src={email}
                  alt="email"
                  className="dark:invert"
                  aspect={"square"}
                  fit="contain"
                  size={"sm-2"}
                />
              </a>
            </Row>
          </>
        )}
      </Row>
    </header>
  );
}

export default Header;
