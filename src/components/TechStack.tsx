"use client";

import {
  bunJs,
  code,
  css,
  docker,
  express,
  git,
  github2,
  golang,
  graphql,
  html,
  js,
  mongodb,
  nextjs,
  nodejs,
  postgres,
  prisma,
  react,
  sass,
  solidity,
  tools,
} from "@/assets";
import Card from "./Card";

function TechStack() {
  return (
    <>
      <section
        className="h-screen dark:bg-primary-dark bg-primary-light flex flex-col justify-center items-center gap-24"
        id="tech-stack"
      >
        <div className="text-center">
          <p className="dark:text-secondary-dark text-secondary-light">
            Some of my
          </p>
          <h1 className="text-[48px] font-[800] leading-normal tracking-[4.8px]">
            TECH STACK
          </h1>
        </div>

        <div className="flex justify-around items-center gap-24">
          <Card
            name="Front End"
            mainIcon={html.src}
            icons={[
              { icon: html.src, name: "HTML" },
              { icon: css.src, name: "CSS" },
              { icon: sass.src, name: "Sass" },
              { icon: js.src, name: "JS (TS)" },
              { icon: react.src, name: "React" },
              { icon: nextjs.src, name: "Nextjs" },
            ]}
          />
          <Card
            name="Back End"
            mainIcon={code.src}
            icons={[
              { icon: nodejs.src, name: "Node" },
              { icon: express.src, name: "Express" },
              { icon: prisma.src, name: "Prisma" },
              { icon: graphql.src, name: "Graphql" },
              { icon: postgres.src, name: "Postgres" },
              { icon: mongodb.src, name: "MongoDB" },
            ]}
          />
          <Card
            name="Other"
            mainIcon={tools.src}
            icons={[
              { icon: git.src, name: "Git" },
              { icon: github2.src, name: "Github" },
              { icon: docker.src, name: "Docker" },
              { icon: bunJs.src, name: "Bunjs" },
              { icon: solidity.src, name: "Solidity" },
              { icon: golang.src, name: "Golang" },
            ]}
          />
        </div>
      </section>
      <div className="w-screen h-[1px] dark:bg-line-dark bg-line-light" />
    </>
  );
}

export default TechStack;
