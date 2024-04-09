import {
 food,
 url,
 bot,
 keyboard,
 chat,
 garage,
 foodStudio,
 urlShortener,
 chatCli,
 cvvBot,
 cliRacer,
 garageVideo,
 boxshadowGenerator,
 techTools,
 shadow,
 techToolsIcon,
} from "@/assets";

import { Projects } from "@/types";

export const PROJECTS: Projects = [
 {
  icon: techToolsIcon,
  type: "image",
  label: "Tech Tools",
  name: "Tech Tools",
  description: "An ecommerce website for tech tools",
  technologies: [
   "NextJS",
   "TypeScript",
   "Payload CMS",
   "Stripe",
   "Zustand",
   "Tailwind CSS",
   "Shadcn UI",
   "Github actions (self-hosted runner with docker)",
  ],
  preview: techTools,
  repo: "https://github.com/fedevcoding/tech-tools",
  url: "https://tech-tools.fedev.me",
 },
 {
  icon: shadow,
  type: "image",
  label: "Shadow generator",
  name: "CSS Box Shadow Generator",
  description: "A simple CSS box shadow generator tool",
  technologies: ["Svelte", "TypeScript", "DaisyUI", "Tailwind CSS", "Vercel"],
  preview: boxshadowGenerator,
  repo: "https://github.com/fedevcoding/box-shadow-generator",
  url: "https://box-shadow-generator.fedev.me",
 },
 {
  icon: food,
  type: "image",
  label: "Food studio",
  name: "Florence Food Studio",
  description: "A website made for florence food studio restaurant",
  technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Redis", "Vercel"],
  preview: foodStudio,
  repo: null,
  url: "https://florencefoodstudio.com",
 },
 {
  icon: url,
  type: "image",
  label: "Url shortener",
  name: "URL Shortener",
  description: "A simple and free url shortener with visit analytics",
  technologies: [
   "ReactJS",
   "NodeJS",
   "Express",
   "Prisma",
   "Highcharts",
   "Sass",
   "Netlify",
   "Railway",
   "Github actions",
  ],
  preview: urlShortener,
  repo: "https://github.com/fedevcoding/url-shortener",
  url: "https://shortener.fedev.me",
 },
 {
  icon: chat,
  type: "image",
  label: "Chat CLI",
  name: "Chat app in the terminal",
  description:
   "Chat CLI (command line interface) is a chat app that runs in the terminal, you can chat with your friends in global, public and private chats.",
  technologies: [
   "Nodejs",
   "Socket.io",
   "Inquirer",
   "PKG",
   "Inno setup wizard",
   "Railway",
  ],
  preview: chatCli,
  repo: "https://github.com/fedevcoding/chat-cli",
  url: "https://download-chatcli.fedev.me",
 },
 {
  icon: bot,
  type: "image",
  label: "CVV Bot",
  name: "Classeviva Telegram Bot",
  description:
   "Classeviva Telegram Bot is a bot that sends you notifications when you receive a new grade (and more) from the Classeviva electronic register.",
  technologies: ["NodeJS", "Express", "Telegram API", "Websockets", "Linode"],
  preview: cvvBot,
  repo: "https://github.com/fedevcoding/classeviva-bot",
  url: "https://t.me/classeviva_voti_bot",
 },
 {
  icon: keyboard,
  type: "image",
  label: "CLI Racer",
  name: "Terminal typing game",
  description:
   "CLI Racer is a typing game that runs in the terminal to see and improve your typing speeds.",
  technologies: ["NodeJS", "INK", "React", "NPM registry"],
  preview: cliRacer,
  repo: "https://github.com/fedevcoding/type-racer",
  url: "https://www.npmjs.com/package/typeracer",
 },
 {
  icon: garage,
  type: "video",
  label: "Garage opener",
  name: "Arduino garage opener",
  description: "A personal garage opener website made with ESP32.",
  technologies: ["ESP32", "C++", "Arduino IDE", "HTML", "CSS"],
  preview: garageVideo,
  repo: "https://github.com/fedevcoding/arduino-garage-opener",
  url: null,
 },
];
