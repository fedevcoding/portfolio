"use client";

import { homePfpDark, homePfpLight } from "@/assets";
import Header from "./Header";
import "@/styles/Home.scss";
import { useThemeContext } from "@/context";
import { useEffect } from "react";
import { P } from "./ui/P";
import { Heading } from "./ui/Heading";
import { Row } from "./ui/Row";
import Link from "next/link";

function Home() {
  const { isDark } = useThemeContext();

  useEffect(() => {
    document.addEventListener("mousemove", animateEyes);

    return () => {
      document.removeEventListener("mousemove", animateEyes);
    };
  }, []);

  return (
    <>
      <section
        className="h-screen dark:bg-landing-dark bg-landing-light"
        id="home"
      >
        <Header />
        <Row justify={"center"} align={"center"} className="h-home" gap={"2xl"}>
          <Row
            direction={"col"}
            fullHeight
            justify={"center"}
            gap={"md"}
            align={"start"}
          >
            <Heading letterGap={"2xl"} variant={"h1"}>
              FEDERICO
              <br />
              CAVALLINI
            </Heading>
            <P size={"lg"}>
              Hi, I&apos;m Fedev
              <br />A young full-stack developer from Italy
            </P>

            <Link href={"#about"}>
              <button className="dark:bg-secondary-dark bg-secondary-light text-2xl text-black py-4 px-12 rounded-lg">
                About Me
              </button>
            </Link>
          </Row>

          <div className="relative">
            <img
              src={isDark ? homePfpDark.src : homePfpLight.src}
              alt="Pfp"
              className="w-[400px] h-[440px]"
            />
            <div className="leftEye eyes"></div>
            <div className="rightEye eyes"></div>
          </div>
        </Row>
      </section>
    </>
  );
}

export default Home;

function animateEyes(e: MouseEvent) {
  const eyes = document.querySelectorAll(".eyes");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    let radian = Math.atan2(e.pageX - x, e.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    if (eye instanceof HTMLElement) {
      eye.style.transform = `rotate(${rotate}deg)`;
    }
  });
}
