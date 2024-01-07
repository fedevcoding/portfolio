import { meDark, meLight, waveLight, waveDark } from "@/assets";
import { useThemeContext } from "@/context";
import { motion } from "framer-motion";
import { Row } from "./ui/Row";
import { P } from "./ui/P";
import { Heading } from "./ui/Heading";
import Line from "./ui/Line";
import Section from "./ui/Section";
import { Img } from "./ui/Img";
import { useBreakPoint } from "react-use-breakpoint";

function About() {
  const { isDark } = useThemeContext();
  const { max } = useBreakPoint();

  return (
    <>
      <Section className="pb-32" id="about" theme="secondary">
        <Img
          src={isDark ? waveDark : waveLight}
          className="w-screen"
          alt="wave"
        />
        <Row
          justify={"center"}
          align={"center"}
          gap={"3xl"}
          wrap={max.isMd ? "wrap" : "none"}
          className={`${max.isSm ? " px-10" : "px-40"}`}
        >
          <motion.div
            initial={{ x: -50, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${max.isMd ? "order-2" : "order-none"}`}
          >
            <Img size={"3xl"} src={isDark ? meDark : meLight} alt="Me" />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Row
              direction="col"
              className={`${max.isMd ? "max-w-[60vw]" : "max-w-[25vw]"}`}
              align={max.isMd ? "center" : "start"}
            >
              <P theme={"secondary"}>A little bit</P>
              <Heading letterGap={"xl"}>ABOUT ME</Heading>
              <P theme={"secondary"}>Front-end/back-end developer</P>
              <br />
              <P size={"xl"} align={max.isMd ? "center" : "left"}>
                My name is Federico Cavallini, born in the uk and raised in
                Florence, Italy. I’m a very young developer that has been coding
                since early 2021 and very confident with both front-end and
                back-end.
                <br />
                My other hobbies are mountain biking and listening to music.
              </P>
            </Row>
          </motion.div>
        </Row>
      </Section>
      <Line />
    </>
  );
}

export default About;
