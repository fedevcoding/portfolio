import { homePfpDark, homePfpLight } from "@/assets";
import Header from "./Header";
import "@/styles/Home.scss";
import { useThemeContext } from "@/context";
import { useEffect } from "react";
import { P } from "./ui/P";
import { Heading } from "./ui/Heading";
import { Row } from "./ui/Row";
import Section from "./ui/Section";
import { Img } from "./ui/Img";
import { useBreakPoint } from "react-use-breakpoint";

function Home() {
 const { isDark } = useThemeContext();
 const { max } = useBreakPoint();

 useEffect(() => {
  if (!max.isMd) {
   document.addEventListener("mousemove", animateEyes);
  }

  return () => {
   if (!max.isMd) {
    document.removeEventListener("mousemove", animateEyes);
   }
  };
 }, [max]);

 return (
  <>
   <Section
    className={`${max.isSm ? "" : "h-screen"}`}
    id="home"
    theme="primary"
   >
    <Header />
    <Row
     justify={"center"}
     align={"center"}
     className={`${max.isSm ? "pb-20" : "h-home"} px-20`}
     gap={max.isMd ? "xl" : "2xl"}
     wrap={max.isSm ? "wrap" : "none"}
    >
     <Row
      direction={"col"}
      fullHeight
      justify={"center"}
      gap={"md"}
      align={max.isSm ? "center" : "start"}
     >
      <Heading
       letterGap={"2xl"}
       variant={"h1"}
       align={max.isSm ? "center" : "left"}
      >
       FEDERICO
       <br />
       CAVALLINI
      </Heading>
      <P size={"lg"} align={max.isSm ? "center" : "left"}>
       Hi, I&apos;m Fedev
       <br />A young full-stack developer from Italy
      </P>

      <a href={"#about"}>
       <button className="dark:bg-secondary-dark bg-secondary-light text-2xl text-black py-4 px-12 rounded-lg about-me">
        About Me
       </button>
      </a>
     </Row>

     <div className="relative">
      <Img src={isDark ? homePfpDark : homePfpLight} alt="Pfp" size={"3xl"} />
      <div className="leftEye eyes"></div>
      <div className="rightEye eyes"></div>
     </div>
    </Row>
   </Section>
  </>
 );
}

export default Home;

function animateEyes(e: MouseEvent) {
 const eyes = document.querySelectorAll(".eyes");
 eyes.forEach((eye) => {
  const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
  const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
  const radian = Math.atan2(e.pageX - x, e.pageY - y);
  const rotate = radian * (180 / Math.PI) * -1 + 270;
  if (eye instanceof HTMLElement) {
   eye.style.transform = `rotate(${rotate}deg)`;
  }
 });
}
