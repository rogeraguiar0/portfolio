import { iStack } from "@/@types";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiStyledcomponents,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiJira,
  SiTrello,
} from "react-icons/si";

export const frontend: iStack[] = [
  {
    name: "React.js",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React Native",
    icon: SiReact,
  },
  {
    name: "Tailwindcss",
    icon: SiTailwindcss,
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
  },

  {
    name: "Typescript",
    icon: SiTypescript,
  },
];

export const backend: iStack[] = [
  {
    name: "Nest.js",
    icon: SiNestjs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "Django",
    icon: SiDjango,
  },
];

export const dev: iStack[] = [
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "Jira",
    icon: SiJira,
  },
];
