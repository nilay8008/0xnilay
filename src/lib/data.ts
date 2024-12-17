import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Decentralized Cloud Storage",
    description:
      "I made a project named Decentralized Cloud Storage, offering secure, distributed storage using blockchain technology.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image1.png",
    link: "https://www.google.com",
  },
  {
    title: "Web3 Decentralized Exchange",
    description:
      "I built a Web3 decentralized exchange for secure, peer-to-peer cryptocurrency trading using blockchain and smart contracts.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image2.png",
    link: "https://www.google.com",
  },
  {
    title: "DeFi Platform",
    description:
      "I made a project named DeFi Platform, offering decentralized financial services using blockchain and smart contracts.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image3.png",
    link: "https://www.google.com",
  },
  {
    title: "Smart Contract Auditing Tools",
    description:
      "I made a project named Smart Contract Auditing Tools, ensuring secure and efficient contract audits.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/image4.png",
    link: "https://www.google.com",
  },
];

export const skillsData = [
  "HTML",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Prisma",
  "Framer Motion",
];
