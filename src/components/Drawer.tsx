import { discord, email, github } from "@/assets";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Row } from "./ui/Row";
import { Img } from "./ui/Img";

function Drawer({ open }: { open: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          exit={{ x: "+100%" }}
          transition={{
            bounce: false,
          }}
          className="h-home w-[80vw] bg-primary-dark absolute top-full left-[20vw] z-10 shadow-xl"
        >
          <Row align={"center"} gap={"md"} justify={"center"}>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
