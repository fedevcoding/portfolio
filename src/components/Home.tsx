"use client";

import { homePfpDark, homePfpLight, wakeLight, waveDark } from "@/assets";
import Header from "./Header";
import "@/styles/Home.scss";
import { useThemeContext } from "@/context";
import { useEffect } from "react";

function Home() {
  const { isDark } = useThemeContext();

  useEffect(() => {
    document.addEventListener("mousemove", animateEyes);

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
        <div className="flex w-screen justify-center items-center h-home gap-44">
          <div className="flex flex-col items-start h-full justify-center gap-16">
            <h1 className="text-[48px] font-[800] leading-normal tracking-[4.8px]">
              FEDERICO
              <br />
              CAVALLINI
            </h1>
            <p>
              Hi, I&apos;m Fedev
              <br />A young full-stack developer from Italy
            </p>

            <button className="dark:bg-secondary-dark bg-secondary-light text-[28px] text-black py-4 px-12 rounded-lg">
              About Me
            </button>
          </div>

          <div className="relative">
            <img
              src={isDark ? homePfpDark.src : homePfpLight.src}
              alt="Pfp"
              className="w-[400px] h-[440px]"
            />
            <div className="leftEye eyes"></div>
            <div className="rightEye eyes"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
