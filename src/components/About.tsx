"use client";

import { meDark, meLight, waveLight, waveDark } from "@/assets";
import { useThemeContext } from "@/context";
import { motion } from "framer-motion";
import { Row } from "./ui/Row";
import { P } from "./ui/P";
import { Heading } from "./ui/Heading";
import Line from "./ui/Line";
import Section from "./ui/Section";
import { Img } from "./ui/Img";

function About() {
  const { isDark } = useThemeContext();

  return (
    <>
      <Section className="h-screen" id="about" theme="secondary">
        <Img
          src={isDark ? waveDark.src : waveLight.src}
          className="w-screen"
          alt="wave"
        />
        <Row justify={"center"} align={"center"} gap={"3xl"}>
          <motion.div
            initial={{ x: -50, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={isDark ? meDark.src : meLight.src} alt="Me" />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Row direction="col" className="max-w-[25vw]">
              <P theme={"secondary"}>A little bit</P>
              <Heading letterGap={"xl"}>ABOUT ME</Heading>
              <P theme={"secondary"}>Front-end/back-end developer</P>
              <br />
              <P size={"xl"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                nihil possimus voluptatibus vel. At, id magni, et non asperiores
                laborum assumenda aliquid blanditiis iusto consectetur, soluta
                quo nobis totam magnam.
                <br />
                Lorem ipsum dolor sit amet consectetur
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
