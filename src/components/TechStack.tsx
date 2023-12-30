"use client";

import { code, html, tools } from "@/assets";
import Card from "./Card";
import { techStack } from "@/data/techStack";
import { P } from "./ui/P";
import { Heading } from "./ui/Heading";
import { Row } from "./ui/Row";
import Line from "./ui/Line";

function TechStack() {
  return (
    <>
      <section
        className="h-screen dark:bg-primary-dark bg-primary-light pb-20"
        id="tech-stack"
      >
        <div className="py-24">
          <P theme={"secondary"} align={"center"}>
            Some of my
          </P>
          <Heading letterGap={"xl"} align={"center"}>
            TECH STACK
          </Heading>
        </div>

        <Row justify={"center"} align={"center"} gap={"3xl"}>
          <Card
            name="Front End"
            mainIcon={html.src}
            icons={techStack.frontEnd}
          />
          <Card name="Back End" mainIcon={code.src} icons={techStack.backEnd} />
          <Card name="Other" mainIcon={tools.src} icons={techStack.other} />
        </Row>
      </section>
      <Line />
    </>
  );
}

export default TechStack;
