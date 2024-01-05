import { about, discord, email, github, home, projects, tech } from "@/assets";
import { AnimatePresence, Cycle } from "framer-motion";
import { motion } from "framer-motion";
import { Row } from "./ui/Row";
import { Img } from "./ui/Img";
import { useBlockScroll } from "@/hooks/useBlockScroll";
import { P } from "./ui/P";
import Line from "./ui/Line";

function Drawer({ open, toggle }: { open: boolean; toggle: Cycle }) {
  // prevent user from scrolling when burger is open
  useBlockScroll(open);
  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{
              bounce: false,
            }}
            className="h-home w-[80vw] dark:bg-primary-dark bg-primary-light absolute top-full right-[20vw] z-10 shadow-xl"
          >
            <Row
              direction={"col"}
              justify={"center"}
              fullHeight
              gap={"md"}
              className="p-20"
            >
              <Row justify={"center"} align={"center"} gap={"md"}>
                <a href={"https://github.com/fedevcoding"} target="_blank">
                  <Img
                    src={github}
                    alt="github"
                    className="dark:invert"
                    aspect={"square"}
                    fit="contain"
                    size={"md-2"}
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
                    size={"md-2"}
                  />
                </a>

                <a href={"mailto:fedevcoding@gmail.com"} target="_blank">
                  <Img
                    src={email}
                    alt="email"
                    className="dark:invert"
                    aspect={"square"}
                    fit="contain"
                    size={"md-2"}
                  />
                </a>
              </Row>

              <Line className="w-full" />

              <Row direction={"col"} className="flex-1" justify={"evenly"}>
                <a href="#home">
                  <Row align={"center"} gap={"sm"}>
                    <Img src={home} alt="home" size={"sm-2"} invertLight />
                    <P size={"3xl"}>Home</P>
                  </Row>
                </a>
                <a href="#about" onClick={() => toggle()}>
                  <Row align={"center"} gap={"sm"}>
                    <Img src={about} alt="home" size={"sm-2"} invertLight />
                    <P size={"3xl"}>About</P>
                  </Row>
                </a>
                <a href={"#tech-stack"} onClick={() => toggle()}>
                  <Row align={"center"} gap={"sm"}>
                    <Img src={tech} alt="home" size={"sm-2"} invertLight />
                    <P size={"3xl"}>Tech Stack</P>
                  </Row>
                </a>
                <a href={"#projects"} onClick={() => toggle()}>
                  <Row align={"center"} gap={"sm"}>
                    <Img src={projects} alt="home" size={"sm-2"} invertLight />
                    <P size={"3xl"}>Projects</P>
                  </Row>
                </a>
              </Row>
            </Row>
          </motion.div>
          <div
            className="h-home w-[20vw] absolute top-full right-0 z-10"
            onClick={() => toggle()}
          ></div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
