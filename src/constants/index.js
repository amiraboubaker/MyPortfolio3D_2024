import {
  backend,
  css,
  docker,
  Ectrh,
  esprim,
  figma,
  firebase,
  Gemini,
  git,
  HealthTracker,
  html,
  javascript,
  mobile,
  mongodb,
  nexans,
  nodejs,
  reactjs,
  tailwind,
  threejs,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native Mobile Developer",
    icon: web,
  },
  {
    title: "ReactJs Web Developer",
    icon: mobile,
  },
  {
    title: "Flutter Mobile Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [

  {
      title: "React Native Mobile Developer",
      company_name: "ECT",
      icon: nexans,
      iconBg: "#E6DEDD",
      date: "1 Juillet 2024 - 30 Juillet 2024",
      points: [
        "Developing and maintaining mobile applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {title: "ReactJs Web Developer",
      company_name: "ESPRIM",
      icon: esprim,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - March 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ]
  },
  {
    title: "Flutter Mobile Developer",
    company_name: "ESPRIM",
    icon: esprim,
    iconBg: "#383E56",
    date: "April 2023 - May 2023",
    points: [
      "Developing and maintaining mobile applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HealthTracker",
    description:
      "HealthTracker is a React Native app using Firebase that helps users track sleep, water intake, and food quality. It features an interactive coaching bot for personalized assistance, promoting a healthy lifestyle.",
    tags: [
      {
        name:"reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: HealthTracker,
    source_code_link: "https://github.com/amiraboubaker/HealthTracker.git",
  },

  {
    name: "ECTRH",
    description:
      "Mobile application that allows HR managers to store, update, and delete information about employees, offices, and team assignments, providing a comprehensive and efficient solution for human resource management.",
    tags: [
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
      {
        name: "dart",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "white-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: Ectrh,
    source_code_link: "https://github.com/amiraboubaker/ECTRH.git",
  },

  {
    name: "Gemini v2.0",
    description:
      "GeminiApp v2.0 is a cutting-edge React web application that leverages the Gemini-Flash API 1.5 to provide instant responses to user questions. Designed for speed and accuracy, it delivers a seamless and efficient query resolution experience.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Gemini,
    source_code_link: "https://github.com/amiraboubaker/Google-Gemini-2.0.git",
  },
];

export { experiences, projects, services, technologies, testimonials };

