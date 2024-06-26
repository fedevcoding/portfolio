import {
 aws,
 bash,
 //  bunJs,
 css,
 docker,
 express,
 git,
 github2,
 golang,
 graphql,
 hardhat,
 html,
 js,
 linux,
 mongodb,
 nextjs,
 nodejs,
 postgres,
 prisma,
 react,
 sass,
 solidity,
 svelte,
 tailwind,
 trpc,
} from "@/assets";

export const techStack = {
 frontEnd: [
  { icon: html, name: "HTML" },
  { icon: css, name: "CSS" },
  { icon: sass, name: "Sass" },
  { icon: js, name: "JS (TS)" },
  { icon: react, name: "React" },
  { icon: nextjs, name: "Nextjs" },
  { icon: tailwind, name: "Tailwind" },
  { icon: svelte, name: "Svelte" },
 ],
 backEnd: [
  { icon: nodejs, name: "Node" },
  { icon: express, name: "Express" },
  { icon: prisma, name: "Prisma" },
  { icon: graphql, name: "Graphql" },
  { icon: postgres, name: "Postgres" },
  { icon: mongodb, name: "MongoDB" },
  { icon: solidity, name: "Solidity" },
  { icon: trpc, name: "tRPC" },
 ],
 other: [
  { icon: git, name: "Git" },
  { icon: github2, name: "Github" },
  { icon: docker, name: "Docker" },
  { icon: bash, name: "Bash" },
  { icon: hardhat, name: "Hardhat" },
  { icon: golang, name: "Golang" },
  { icon: linux, name: "Linux" },
  { icon: aws, name: "AWS" },
 ],
};
