"use client";

import { homePfpDark, homePfpLight, wakeLight, waveDark } from "@/assets";
import Header from "./Header";
import "@/styles/home.scss";
import { useThemeContext } from "@/context";

function Home() {
  const { isDark } = useThemeContext();

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
          <img src={isDark ? homePfpDark.src : homePfpLight.src} alt="Pfp" />
        </div>
      </section>
      <img src={isDark ? waveDark.src : wakeLight.src} className="w-screen" />
    </>
  );
}

export default Home;
