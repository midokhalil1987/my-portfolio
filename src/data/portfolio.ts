export const personalInfo = {
  name: "Mahmoud Khalil",
  title: "Full Stack Developer",
  tagline:
    "Building production web & mobile apps with React, Next.js, TypeScript, and Java/Spring Boot.",
  summary:
    "Full Stack Developer specializing in React, Next.js, and Spring Boot. Experienced in building high-performance websites and mobile applications. I love turning ideas into digital reality.",
  aboutHighlights: [
    {
      title: "4+ years experience",
      description: "Building production web and mobile applications",
    },
    {
      title: "Always learning",
      description: "Passionate about continuous growth and modern tech",
    },
    {
      title: "Open to work",
      description: "Available for new remote projects and collaborations",
    },
  ],
  email: "mahmoudkhalil6987@gmail.com",
  phone: "+20 109 292 0911",
  location: "Alexandria, Egypt",
  github: "https://github.com/midokhalil1987",
  linkedin: "https://www.linkedin.com/in/mahmoud-khalil-27846341b/",
  upwork: "https://www.upwork.com/freelancers/~01f5f84cd37a63af10",
  siteUrl: "https://my-portfolio-nine-blond.vercel.app",
};

export const experience = [
  {
    role: "Full Stack Web Developer",
    company: "B2B Mobile Auction",
    location: "Maryland, USA (Remote)",
    period: "April 2025 – Present",
    highlights: [
      "Maintain production AngularJS frontend for a US-based B2B auction platform",
      "Build RESTful APIs in Java 21 (Spring Boot, JPA, Hibernate 6)",
      "Execute PostgreSQL schema migrations with Flyway",
      "Deliver full-stack features across UI, API, and database layers",
    ],
  },
  {
    role: "Front-End Developer",
    company: "GE-Techs",
    location: "Alexandria, Egypt (Remote)",
    period: "January 2022 – March 2025",
    highlights: [
      "Delivered web and mobile solutions for multiple client projects over 3+ years",
      "Built responsive web apps with React, JavaScript, HTML5, and CSS3",
      "Integrated custom REST APIs and optimized frontends for performance",
      "Supported 8+ client platforms including e-commerce, dashboards, and government apps",
    ],
  },
];

export const education = {
  degree: "Bachelor's Degree in Accounting",
  institution: "Faculty of Commerce, Alexandria University",
  date: "September 2011",
  note: "Career transition to software development in 2022; 4+ years professional engineering experience.",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "B2 — Upper Intermediate" },
];

export type Skill = {
  name: string;
  icon: string;
};

export const skillCategories: {
  title: "Frontend" | "Backend" | "Mobile" | "Tools";
  skills: Skill[];
}[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "AngularJS", icon: "angularjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "HTML/CSS", icon: "html5" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java 21", icon: "openjdk" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Hibernate", icon: "hibernate" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "REST APIs", icon: "openapiinitiative" },
      { name: "Flyway", icon: "flyway" },
      { name: "Maven", icon: "apachemaven" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Webpack", icon: "webpack" },
      { name: "Cursor", icon: "cursor" },
      { name: "Agile/Scrum", icon: "jira" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

export const hobbies = [
  "Swimming",
  "Gaming",
  "Reading",
  "Continuous Learning",
];

export type Project = {
  title: string;
  /** Short line: "E-commerce platform | React, Next.js" */
  description: string;
  link?: string;
  github?: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Furns E-Commerce",
    description: "E-commerce platform | Next.js, Snipcart, Tailwind",
    link: "https://furns-snip-cart-next-js.vercel.app/",
    image: "/projects/furns.png",
    tags: ["Next.js", "Snipcart", "Tailwind"],
    featured: true,
  },
  {
    title: "Time Tracker",
    description: "Productivity app | React, Next.js, TypeScript",
    link: "https://tracker-pied-five.vercel.app/",
    image: "/projects/time-tracker.png",
    tags: ["React", "Next.js", "TypeScript"],
    featured: true,
  },
  {
    title: "Resume Web App",
    description: "Interactive resume site | Next.js, Tailwind CSS",
    link: "https://resume-new-three.vercel.app/",
    image: "/projects/resume.png",
    tags: ["Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "GE-Techs Website",
    description: "Agency company website | React, Next.js",
    link: "https://ge-techs.com/",
    github: "https://github.com/GE-Techs/ge-techs-website",
    image: "/projects/ge-techs.png",
    tags: ["React", "Next.js"],
    featured: true,
  },
  {
    title: "Gold.sa",
    description: "E-commerce platform | React, Next.js",
    link: "https://gold.sa/",
    github: "https://github.com/GE-Techs/gold-sa-website",
    image: "/projects/gold-sa.png",
    tags: ["React", "E-commerce"],
    featured: true,
  },
  {
    title: "Zoric",
    description: "Modern web app | React, Next.js",
    link: "https://zoric-test.vercel.app/",
    image: "/projects/zoric.png",
    tags: ["React", "Next.js"],
    featured: true,
  },
  {
    title: "Gasgo Admin Dashboard",
    description: "Admin dashboard | React, REST APIs",
    link: "http://dash.gasgo.matrixzone.net",
    image: "/projects/gasgo-admin.png",
    tags: ["React", "Dashboard"],
    featured: false,
  },
  {
    title: "Gasgo Station Dashboard",
    description: "Station monitoring dashboard | React",
    link: "http://stationdash.gasgo.matrixzone.net",
    image: "/projects/gasgo-station.png",
    tags: ["React", "Dashboard"],
    featured: false,
  },
  {
    title: "Gov-SA Frontend",
    description: "Government services platform | React",
    link: "https://my.gov.sa/",
    github: "https://gitlab.sharedt.com/gov.sa/gov-sa-frontend/",
    image: "/projects/gov-sa.png",
    tags: ["React", "Government"],
    featured: false,
  },
  {
    title: "B2B Mobile Auction",
    description: "B2B auction platform | AngularJS, Java, Spring Boot",
    github: "https://github.com/B2B-Mobile-Auction/b2b-mobile-ui/",
    image: "/projects/b2b-auction.png",
    tags: ["AngularJS", "Java", "Spring Boot"],
    featured: false,
  },
  {
    title: "Haseb Platform",
    description: "Financial & accounting frontend | React",
    github: "https://github.com/haseb-io/haseb-frontend",
    image: "/projects/haseb.png",
    tags: ["React", "Finance"],
    featured: false,
  },
  {
    title: "Eventy Web",
    description: "Event management app | React",
    github: "https://github.com/GE-Techs/eventy-web",
    image: "/projects/eventy.png",
    tags: ["React"],
    featured: false,
  },
  {
    title: "Brush Web",
    description: "Creative web platform | React",
    github: "https://github.com/GE-Techs/brush",
    image: "/projects/brush.png",
    tags: ["React"],
    featured: false,
  },
  {
    title: "Mostaneer (Enarah)",
    description: "Client web application | React",
    github: "https://github.com/GE-Techs/enarah",
    image: "/projects/mostaneer.png",
    tags: ["React"],
    featured: false,
  },
  {
    title: "MERN Social App",
    description: "Social media app | React, Node.js, MongoDB",
    github: "https://github.com/midokhalil1987/mern-social-app",
    image: "/projects/social-app.png",
    tags: ["MERN", "MongoDB"],
    featured: false,
  },
  {
    title: "Uber Eats Clone",
    description: "Food delivery app | React Native",
    github: "https://github.com/midokhalil1987/uber-eats-APP",
    image: "/projects/uber-eats.png",
    tags: ["React Native"],
    featured: false,
  },
  {
    title: "Next-Auth",
    description: "Auth implementation | Next.js, NextAuth",
    github: "https://github.com/midokhalil1987/nextauth",
    image: "/projects/next-auth.png",
    tags: ["Next.js", "Auth"],
    featured: false,
  },
  {
    title: "Login App Auth",
    description: "Login & registration flow | React, JWT",
    github: "https://github.com/midokhalil1987/loginAppAuth",
    image: "/projects/login-auth.png",
    tags: ["React", "JWT"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
