import {
  LANGUAGE_ENUMS,
  LINK_ENUMS,
  TECH_ENUMS,
  TOOL_ENUMS,
} from "../constants";

export const data = {
  username: "sagargujarathi",

  basicDetails: {
    firstName: "Sagar",
    lastName: "Gujarathi",
    image: "https://sampath.is-a.dev/assets/profilepic-B3Z6-p2T.png",
  },

  aboutMe: {
    title: "Software Developer and Tech Enthusiast",
    description:
      "I am passionate about technology, coding, and building innovative projects. I love exploring new tech stacks and sharing knowledge with the community.",
    profession: ["Software Engineer"],
    fields: [
      "Frontend Development",
      "Backend Development",
      "FullStack Development",
    ],
    tools: [
      TOOL_ENUMS.NODE,
      TOOL_ENUMS.EXPRESS,
      TOOL_ENUMS.MONGODB,
      TOOL_ENUMS.MYSQL,
      TOOL_ENUMS.GIT,
      TOOL_ENUMS.GITHUB,
    ],
    technologies: [
      TECH_ENUMS.REACT,
      TECH_ENUMS.NEXT,
      TECH_ENUMS.HTML,
      TECH_ENUMS.CSS,
      TECH_ENUMS.TAILWIND,
      TECH_ENUMS.MUI,
      TECH_ENUMS.REST,
      TECH_ENUMS.REDUX,
    ],
    languages: [
      LANGUAGE_ENUMS.JAVASCRIPT,
      LANGUAGE_ENUMS.TYPESCRIPT,
      LANGUAGE_ENUMS.PYTHON,
      LANGUAGE_ENUMS.GO,
      LANGUAGE_ENUMS.JAVA,
      LANGUAGE_ENUMS.C,
      LANGUAGE_ENUMS.CPP,
    ],
  },

  contact: [
    {
      value: LINK_ENUMS.LINKEDIN,
      link: "https://www.linkedin.com/in/gujarathisagar/",
    },
    {
      value: LINK_ENUMS.GITHUB,
      link: "https://github.com/sagargujarathi",
    },
  ],

  projects: [
    {
      name: "Chess Engine",
      description: "Built a chess engine",
      image: "https://sampath.is-a.dev/assets/profilepic-B3Z6-p2T.png",
      links: [
        {
          value: LINK_ENUMS.LINK,
          link: "https://sampath.is-a.dev/assets/profilepic-B3Z6-p2T.png",
        },
      ],
      technologies: [TECH_ENUMS.REACT, TECH_ENUMS.MUI],
    },
  ],
};
