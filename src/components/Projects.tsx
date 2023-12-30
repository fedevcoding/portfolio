"use client";
import "@/styles/Projects.scss";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { github, url } from "@/assets";

function Projects() {
  const [selectedTab, setSelectedTab] = useState(PROJECTS[0]);

  return (
    <>
      <section
        className="min-h-screen dark:bg-primary-dark bg-primary-light pb-20"
        id="projects"
      >
        <div className="text-center py-24">
          <p className="dark:text-secondary-dark text-secondary-light">
            Some of my
          </p>
          <h1 className="text-[48px] font-[800] leading-normal tracking-[4.8px]">
            PROJECTS
          </h1>
        </div>

        <div className="h-[70vh] w-[70vw] bg-landing-dark rounded-lg mx-auto projects-box flex flex-col">
          <nav>
            <ul>
              {PROJECTS.map((item) => (
                <li
                  key={item.label}
                  className={item === selectedTab ? "selected" : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  <img src={item.icon} alt={item.label} className="w-[27px]" />
                  <p className="text-[15px] font-semibold">{item.label}</p>
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
                className="flex flex-col items-center h-full"
              >
                <h2 className="text-[32px] font-semibold text-center py-14">
                  {selectedTab.label}
                </h2>
                <div className="flex items-center justify-evenly">
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
                  <div className="mt-10 text-lg w-[40%]">
                    <p>
                      <span className="text-secondary-dark">Name:</span>&nbsp;
                      {selectedTab.name}
                    </p>
                    <p>
                      <span className="text-secondary-dark">Description:</span>
                      &nbsp;
                      {selectedTab.description}
                    </p>
                    <p>
                      <span className="text-secondary-dark">Technologies:</span>
                      &nbsp;
                      {selectedTab.technologies.join(", ")}
                    </p>
                    <div className="mt-6 flex items-center gap-8">
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
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </section>
      <div className="w-screen h-[1px] dark:bg-line-dark bg-line-light" />
    </>
  );
}

export default Projects;