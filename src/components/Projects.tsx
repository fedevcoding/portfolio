import "@/styles/Projects.scss";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";

import { github, url } from "@/assets";
import Line from "./ui/Line";
import { P } from "./ui/P";
import { Heading } from "./ui/Heading";
import { Row } from "./ui/Row";
import { Span } from "./ui/Span";
import Section from "./ui/Section";
import { Img } from "./ui/Img";
import { useBreakPoint } from "react-use-breakpoint";

function Projects() {
  const { max } = useBreakPoint();
  const [selectedTab, setSelectedTab] = useState(PROJECTS[0]);

  return (
    <>
      <Section className="pb-20" id="projects" theme="secondary">
        <div className="py-24">
          <P theme={"secondary"} align={"center"}>
            Some of my
          </P>
          <Heading letterGap={"xl"} align={"center"}>
            PROJECTS
          </Heading>
        </div>

        <Section
          theme="primary"
          className="w-[70vw] rounded-lg mx-auto projects-box pb-10"
        >
          <Row direction={"col"} fullHeight>
            <nav>
              <ul className="flex flex-wrap">
                {PROJECTS.map((item) => (
                  <li
                    key={item.label}
                    className={
                      item === selectedTab
                        ? "dark:bg-gray-800 bg-neutral-400"
                        : ""
                    }
                    onClick={() => setSelectedTab(item)}
                  >
                    <Img
                      invertLight
                      src={item.icon}
                      alt={item.label}
                      size={"sm"}
                      aspect={"square"}
                      fit={"contain"}
                    />
                    <P boldness={"semi-bold"} size={"sm"}>
                      {item.label}
                    </P>
                    {item === selectedTab ? (
                      <motion.div
                        className="underline dark:bg-secondary-dark bg-secondary-light"
                        layoutId="underline"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <Heading
                    className="py-14"
                    boldness={"semi-bold"}
                    variant={"h2"}
                    align={"center"}
                  >
                    {selectedTab.label}
                  </Heading>
                  <Row
                    align={"center"}
                    justify={"evenly"}
                    direction={max.isSm ? "col" : "row"}
                    gap={max.isSm ? "md" : "none"}
                  >
                    {selectedTab.type === "image" ? (
                      <a
                        href={selectedTab.url || ""}
                        target="_blank"
                        className={`${
                          max.isSm ? "order-2 w-[80%]" : "w-[40%]"
                        } `}
                      >
                        <Img
                          src={selectedTab.preview}
                          alt={selectedTab.label}
                          className={`w-full rounded-lg`}
                          aspect={"video"}
                          fit={"contain"}
                        />
                      </a>
                    ) : (
                      <video
                        src={selectedTab.preview}
                        className={`${
                          max.isSm ? "order-2 w-[80%]" : "w-[40%]"
                        } rounded-lg`}
                        controls
                        muted
                      />
                    )}
                    <Row
                      direction={"col"}
                      className={`${max.isSm ? "w-[80%]" : "w-[40%]"}`}
                    >
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
                          <a href={selectedTab.repo} target="_blank">
                            <Img
                              src={github}
                              alt="github"
                              size={"md"}
                              aspect={"square"}
                              fit={"contain"}
                              invertDark
                            />
                          </a>
                        ) : null}

                        {selectedTab.url ? (
                          <a href={selectedTab.url} target="_blank">
                            <Img
                              src={url}
                              alt="link"
                              size={"sm-2"}
                              aspect={"square"}
                              fit={"contain"}
                              invertLight
                            />
                          </a>
                        ) : null}
                      </Row>
                    </Row>
                  </Row>
                </div>
              </motion.div>
            </AnimatePresence>
          </Row>
        </Section>
      </Section>
      <Line />
    </>
  );
}

export default Projects;
