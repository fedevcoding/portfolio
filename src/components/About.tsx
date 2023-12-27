"use client";

import { meDark, meLight, waveLight, waveDark } from "@/assets";
import { useThemeContext } from "@/context";
import { motion } from "framer-motion";

function About() {
  const { isDark } = useThemeContext();

  return (
    <>
      <section
        className="h-screen dark:bg-primary-dark bg-primary-light"
        id="about"
      >
        <img
          src={isDark ? waveDark.src : waveLight.src}
          className="w-screen"
          alt="wave"
        />
        <div className="flex justify-center items-center gap-44">
          <motion.div
            initial={{ x: -50, opacity: 0.5, scale: 0.6 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
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
            <div className="flex flex-col max-w-[25vw]">
              <p className="dark:text-secondary-dark text-secondary-light">
                A little bit
              </p>
              <h1 className="text-[48px] font-[800] leading-normal tracking-[4.8px]">
                ABOUT ME
              </h1>
              <p className="dark:text-secondary-dark text-secondary-light">
                Front-end/back-end developer
              </p>
              <br />
              <p className="text-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                nihil possimus voluptatibus vel. At, id magni, et non asperiores
                laborum assumenda aliquid blanditiis iusto consectetur, soluta
                quo nobis totam magnam.
                <br />
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="w-screen h-[1px] dark:bg-line-dark bg-line-light" />
    </>
  );
}

export default About;
