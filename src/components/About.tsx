"use client";

import { wakeLight, waveDark } from "@/assets";
import { useThemeContext } from "@/context";

function About() {
  const { isDark } = useThemeContext();

  return (
    <section
      className="h-screen dark:bg-primary-dark bg-primary-light"
      id="about"
    >
      <img src={isDark ? waveDark.src : wakeLight.src} className="w-screen" />
    </section>
  );
}

export default About;
