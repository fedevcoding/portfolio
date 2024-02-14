import {
 // food,
 url,
 bot,
 keyboard,
 chat,
 garage,
 // foodStudio,
 urlShortener,
 chatCli,
 cvvBot,
 cliRacer,
} from "@/assets";

import { Projects } from "@/types";

export const PROJECTS: Projects = [
 // {
 //   icon: food,
 //   type: "image",
 //   label: "Food studio",
 //   name: "Florence Food Studio",
 //   description: "A website made for florence food studio restaurant",
 //   technologies: [
 //     "NextJS",
 //     "JavaScript",
 //     "Tailwind CSS",
 //     "Netlify",
 //     "Github actions",
 //   ],
 //   preview: foodStudio,
 //   repo: null,
 //   url: "https://florencefoodstudio.com",
 // },
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
  preview:
   "https://private-user-images.githubusercontent.com/108336526/285051664-b177c573-03f6-4368-90d5-18f7c34a3739.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDc5MzA5NjksIm5iZiI6MTcwNzkzMDY2OSwicGF0aCI6Ii8xMDgzMzY1MjYvMjg1MDUxNjY0LWIxNzdjNTczLTAzZjYtNDM2OC05MGQ1LTE4ZjdjMzRhMzczOS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIxNFQxNzExMDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYmY0OTAzZjM5NDk1NjdhNTE1MzUyNTY3MjBkMjEwZWUzYWUwYzBjN2I3ZmMwYTg4ZTRlZTNjZjZiZGQwOGMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.hKY43dhBt8EKJWtuGgDZaiw8ScGxxkLPhwba1henW3Q",
  repo: "https://github.com/fedevcoding/arduino-garage-opener",
  url: null,
 },
];
