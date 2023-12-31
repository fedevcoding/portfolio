"use client";

import { code, html, tools } from "@/assets";
import Card from "./Card";
import { techStack } from "@/data/techStack";
import { P } from "./ui/P";
import { Heading } from "./ui/Heading";
import { Row } from "./ui/Row";
import Line from "./ui/Line";
import Section from "./ui/Section";
import { useBreakPoint } from "@/context/BreakPoints";

function TechStack() {
  const { max } = useBreakPoint();

  return (
    <>
      <Section className="pb-32" id="tech-stack" theme="secondary">
        <div className="py-24">
          <P theme={"secondary"} align={"center"}>
            Some of my
          </P>
          <Heading letterGap={"xl"} align={"center"}>
            TECH STACK
          </Heading>
        </div>

        <Row
          justify={"center"}
          align={"center"}
          gap={max.isXl ? "xl" : "3xl"}
          wrap={max.isMd ? "wrap" : "none"}
          className="px-20"
        >
          <Card
            name="Front End"
            mainIcon={html.src}
            icons={techStack.frontEnd}
          />
          <Card name="Back End" mainIcon={code.src} icons={techStack.backEnd} />
          <Card name="Other" mainIcon={tools.src} icons={techStack.other} />
        </Row>
      </Section>
      <Line />
    </>
  );
}

export default TechStack;
