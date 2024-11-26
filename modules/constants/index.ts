// LINK ENUMS

import DiscordIcon from "@/modules/icons/discord-icon";
import GithubIcon from "@/modules/icons/github-icon";
import LinkIcon from "@/modules/icons/link-icon";
import LinkedinIcon from "@/modules/icons/linkedin-icon";
import XIcon from "@/modules/icons/x-icon";

export enum LINK_ENUMS {
  LINKEDIN = "LINKEDIN",
  DISCORD = "DISCORD",
  X = "X",
  GITHUB = "GITHUB",
  LINK = "LINK",
}

export const LINK_OPTIONS = [
  { label: "Linkedin", value: LINK_ENUMS.LINKEDIN, iconLink: LinkedinIcon },
  { label: "Discord", value: LINK_ENUMS.DISCORD, iconLink: DiscordIcon },
  { label: "X", value: LINK_ENUMS.X, iconLink: XIcon },
  { label: "Github", value: LINK_ENUMS.GITHUB, iconLink: GithubIcon },
  { label: "Link", value: LINK_ENUMS.LINK, iconLink: LinkIcon },
];

// --------------------------------------------------------------------------------------------------------------------

export enum LANGUAGE_ENUMS {
  JAVASCRIPT = "JAVASCRIPT",
  TYPESCRIPT = "TYPESCRIPT",
  PYTHON = "PYTHON",
  GO = "GO",
  JAVA = "JAVA",
  C = "C",
  CPP = "CPP",
  RUBY = "RUBY",
  PHP = "PHP",
  SWIFT = "SWIFT",
  KOTLIN = "KOTLIN",
}

export enum TOOL_ENUMS {
  NODE = "NODE",
  EXPRESS = "EXPRESS",
  MONGODB = "MONGODB",
  POSTGRESQL = "POSTGRESQL",
  MYSQL = "MYSQL",
  FIREBASE = "FIREBASE",
  AWS = "AWS",
  DOCKER = "DOCKER",
  KUBERNETES = "KUBERNETES",
  GIT = "GIT",
  GITHUB = "GITHUB",
  GITLAB = "GITLAB",
  BITBUCKET = "BITBUCKET",
  JENKINS = "JENKINS",
}

export enum TECH_ENUMS {
  REACT = "REACT",
  NEXT = "NEXT",
  HTML = "HTML",
  CSS = "CSS",
  TAILWIND = "TAILWIND",
  MUI = "MUI",
  BOOTSTRAP = "BOOTSTRAP",
  GRAPHQL = "GRAPHQL",
  REST = "REST",
  REDUX = "REDUX",
  VUE = "VUE",
  ANGULAR = "ANGULAR",
  SVELTE = "SVELTE",
  DJANGO = "DJANGO",
  FLASK = "FLASK",
}

export const LANGUAGE_OPTIONS = [
  {
    label: "JavaScript",
    value: LANGUAGE_ENUMS.JAVASCRIPT,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "TypeScript",
    value: LANGUAGE_ENUMS.TYPESCRIPT,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    label: "Python",
    value: LANGUAGE_ENUMS.PYTHON,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    label: "Go",
    value: LANGUAGE_ENUMS.GO,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    label: "Java",
    value: LANGUAGE_ENUMS.JAVA,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    label: "C",
    value: LANGUAGE_ENUMS.C,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    label: "C++",
    value: LANGUAGE_ENUMS.CPP,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    label: "Ruby",
    value: LANGUAGE_ENUMS.RUBY,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  },
  {
    label: "PHP",
    value: LANGUAGE_ENUMS.PHP,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    label: "Swift",
    value: LANGUAGE_ENUMS.SWIFT,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },
  {
    label: "Kotlin",
    value: LANGUAGE_ENUMS.KOTLIN,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
];

export const TOOL_OPTIONS = [
  {
    label: "Node.js",
    value: TOOL_ENUMS.NODE,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    label: "Express.js",
    value: TOOL_ENUMS.EXPRESS,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    label: "MongoDB",
    value: TOOL_ENUMS.MONGODB,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    label: "PostgreSQL",
    value: TOOL_ENUMS.POSTGRESQL,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    label: "MySQL",
    value: TOOL_ENUMS.MYSQL,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    label: "Firebase",
    value: TOOL_ENUMS.FIREBASE,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    label: "AWS",
    value: TOOL_ENUMS.AWS,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    label: "Docker",
    value: TOOL_ENUMS.DOCKER,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    label: "Kubernetes",
    value: TOOL_ENUMS.KUBERNETES,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    label: "Git",
    value: TOOL_ENUMS.GIT,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    label: "GitHub",
    value: TOOL_ENUMS.GITHUB,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    label: "GitLab",
    value: TOOL_ENUMS.GITLAB,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
];

export const TECH_OPTIONS = [
  {
    label: "React.js",
    value: TECH_ENUMS.REACT,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "Next.js",
    value: TECH_ENUMS.NEXT,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    label: "HTML",
    value: TECH_ENUMS.HTML,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    label: "CSS",
    value: TECH_ENUMS.CSS,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    label: "Tailwind CSS",
    value: TECH_ENUMS.TAILWIND,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    label: "Material-UI",
    value: TECH_ENUMS.MUI,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    label: "Bootstrap",
    value: TECH_ENUMS.BOOTSTRAP,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    label: "GraphQL",
    value: TECH_ENUMS.GRAPHQL,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    label: "REST API",
    value: TECH_ENUMS.REST,
    link: "https://img.icons8.com/ios-filled/50/api.png",
  },
  {
    label: "Redux",
    value: TECH_ENUMS.REDUX,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
];
