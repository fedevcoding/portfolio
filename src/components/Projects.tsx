"use client";
import "@/styles/Projects.scss";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { github, url } from "@/assets";
import Line from "./ui/Line";
import { P } from "./ui/P";
import { Heading } from "./ui/Heading";
import { Row } from "./ui/Row";
import { Span } from "./ui/Span";

function Projects() {
  const [selectedTab, setSelectedTab] = useState(PROJECTS[0]);

  return (
    <>
      <section
        className="min-h-screen dark:bg-primary-dark bg-primary-light pb-20"
        id="projects"
      >
        <div className="py-24">
          <P theme={"secondary"} align={"center"}>
            Some of my
          </P>
          <Heading letterGap={"xl"} align={"center"}>
            PROJECTS
          </Heading>
        </div>

        <Row
          className="h-[70vh] w-[70vw] dark:bg-landing-dark bg-landing-light rounded-lg mx-auto projects-box"
          direction={"col"}
        >
          <nav>
            <ul>
              {PROJECTS.map((item) => (
                <li
                  key={item.label}
                  className={item === selectedTab ? "selected" : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  <img src={item.icon} alt={item.label} className="w-[27px]" />
                  <P boldness={"semi-bold"} size={"sm"}>
                    {item.label}
                  </P>
                  {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Row direction={"col"} align={"center"} fullHeight>
                  <Heading
                    className="py-14"
                    boldness={"semi-bold"}
                    variant={"h2"}
                  >
                    {selectedTab.label}
                  </Heading>
                  <Row align={"center"} justify={"evenly"}>
                    {selectedTab.type === "image" ? (
                      <Link
                        href={selectedTab.url || ""}
                        target="_blank"
                        className="w-[40%]"
                      >
                        <img
                          src={selectedTab.preview}
                          alt={selectedTab.label}
                          className="w-full rounded-lg"
                        />
                      </Link>
                    ) : (
                      <video
                        src={selectedTab.preview}
                        className="w-[40%] rounded-lg"
                        controls
                        muted
                      />
                    )}
                    <Row direction={"col"} className="w-[40%]">
                      <P size={"lg"}>
                        <Span theme={"secondary"} boldness={"semi-bold"}>
                          Name:
                        </Span>
                        &nbsp;
                        {selectedTab.name}
                        <br />
                        <Span theme={"secondary"} boldness={"semi-bold"}>
                          Description:
                        </Span>
                        &nbsp;
                        {selectedTab.description}
                        <br />
                        <Span theme={"secondary"} boldness={"semi-bold"}>
                          Technologies:
                        </Span>
                        &nbsp;
                        {selectedTab.technologies.join(", ")}
                        <br />
                      </P>
                      <Row align={"center"} gap={"sm"} className="mt-6 flex">
                        {selectedTab.repo ? (
                          <Link href={selectedTab.repo} target="_blank">
                            <img
                              src={github.src}
                              alt="github"
                              className="invert"
                            />
                          </Link>
                        ) : null}

                        {selectedTab.url ? (
                          <Link href={selectedTab.url} target="_blank">
                            <img src={url.src} alt="link" />
                          </Link>
                        ) : null}
                      </Row>
                    </Row>
                  </Row>
                </Row>
              </motion.div>
            </AnimatePresence>
          </main>
        </Row>
      </section>
      <Line />
    </>
  );
}

export default Projects;
