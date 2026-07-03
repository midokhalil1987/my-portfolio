export const personalInfo = {
  name: "Mahmoud Khalil",
  title: "Full Stack Developer",
  tagline:
    "Building production web & mobile apps with React, Next.js, TypeScript, and Java/Spring Boot.",
  summary:
    "Full Stack Developer with 4+ years of professional experience building production web and mobile applications. Skilled in React, TypeScript, Next.js, AngularJS, Java 21, Spring Boot, PostgreSQL, and React Native. Delivered 10+ shipped projects across agency and product teams, with strong remote collaboration in US and MENA markets.",
  email: "mahmoudkhalil6987@gmail.com",
  phone: "+20 109 292 0911",
  location: "Alexandria, Egypt",
  github: "https://github.com/midokhalil1987",
  linkedin: "https://www.linkedin.com/in/mahmoud-khalil-27846341b/",
  upwork: "https://www.upwork.com/freelancers/~01f5f84cd37a63af10",
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
  degree: "Ph.D. in Accounting",
  institution: "Faculty of Commerce, Alexandria University",
  date: "September 2011",
  note: "Career transition to software development in 2022; 4+ years professional engineering experience.",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "B2 — Upper Intermediate" },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "AngularJS",
      "React Native",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate 6",
      "PostgreSQL",
      "Flyway",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git",
      "Maven",
      "Webpack",
      "Agile/Scrum",
      "Responsive Design",
      "SEO",
      "Cursor",
      "GitHub Copilot",
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
    description:
      "Next.js furniture store with Snipcart integration, responsive product catalog, and checkout flow.",
    link: "https://furns-snip-cart-next-js.vercel.app/",
    image: "/projects/furns.png",
    tags: ["Next.js", "Snipcart", "Tailwind"],
    featured: true,
  },
  {
    title: "Time Tracker",
    description:
      "Productivity app for tracking work hours with a clean, intuitive interface.",
    link: "https://tracker-pied-five.vercel.app/",
    image: "/projects/time-tracker.png",
    tags: ["React", "Next.js", "TypeScript"],
    featured: true,
  },
  {
    title: "Resume Web App",
    description:
      "Interactive resume website with print-ready layouts and modern typography.",
    link: "https://resume-new-three.vercel.app/",
    image: "/projects/resume.png",
    tags: ["Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "GE-Techs Website",
    description:
      "Company website for a software agency showcasing services and portfolio.",
    link: "https://ge-techs.com/",
    github: "https://github.com/GE-Techs/ge-techs-website",
    image: "/projects/ge-techs.png",
    tags: ["React", "Next.js"],
    featured: true,
  },
  {
    title: "Gold.sa",
    description:
      "E-commerce platform for gold products with rich product listings and checkout.",
    link: "https://gold.sa/",
    github: "https://github.com/GE-Techs/gold-sa-website",
    image: "/projects/gold-sa.png",
    tags: ["React", "E-commerce"],
    featured: true,
  },
  {
    title: "Zoric",
    description:
      "Modern web application with responsive design and interactive UI components.",
    link: "https://zoric-test.vercel.app/",
    image: "/projects/zoric.png",
    tags: ["React", "Next.js"],
    featured: true,
  },
  {
    title: "Gasgo Admin Dashboard",
    description: "Admin dashboard for managing Gasgo fuel station operations.",
    link: "http://dash.gasgo.matrixzone.net",
    image: "/projects/gasgo-admin.png",
    tags: ["React", "Dashboard"],
    featured: false,
  },
  {
    title: "Gasgo Station Dashboard",
    description: "Station-level dashboard for real-time fuel station monitoring.",
    link: "http://stationdash.gasgo.matrixzone.net",
    image: "/projects/gasgo-station.png",
    tags: ["React", "Dashboard"],
    featured: false,
  },
  {
    title: "Gov-SA Frontend",
    description:
      "Saudi government services platform frontend with accessibility-focused design.",
    link: "https://my.gov.sa/",
    github: "https://gitlab.sharedt.com/gov.sa/gov-sa-frontend/",
    image: "/projects/gov-sa.png",
    tags: ["React", "Government"],
    featured: false,
  },
  {
    title: "B2B Mobile Auction",
    description:
      "US-based B2B auction platform — AngularJS frontend with Java/Spring Boot backend.",
    github: "https://github.com/B2B-Mobile-Auction/b2b-mobile-ui/",
    image: "/projects/b2b-auction.png",
    tags: ["AngularJS", "Java", "Spring Boot"],
    featured: false,
  },
  {
    title: "Haseb Platform",
    description:
      "Production financial and accounting frontend for business operations.",
    github: "https://github.com/haseb-io/haseb-frontend",
    image: "/projects/haseb.png",
    tags: ["React", "Finance"],
    featured: false,
  },
  {
    title: "Eventy Web",
    description: "Event management web application for planning and coordination.",
    github: "https://github.com/GE-Techs/eventy-web",
    image: "/projects/eventy.png",
    tags: ["React"],
    featured: false,
  },
  {
    title: "Brush Web",
    description: "Creative web platform with modern UI patterns.",
    github: "https://github.com/GE-Techs/brush",
    image: "/projects/brush.png",
    tags: ["React"],
    featured: false,
  },
  {
    title: "Mostaneer (Enarah)",
    description: "Client web application built for the Enarah platform.",
    github: "https://github.com/GE-Techs/enarah",
    image: "/projects/mostaneer.png",
    tags: ["React"],
    featured: false,
  },
  {
    title: "MERN Social App",
    description: "Full-stack social media application with MongoDB and Express.",
    github: "https://github.com/midokhalil1987/mern-social-app",
    image: "/projects/social-app.png",
    tags: ["MERN", "MongoDB"],
    featured: false,
  },
  {
    title: "Uber Eats Clone",
    description: "Food delivery app clone with React Native mobile interface.",
    github: "https://github.com/midokhalil1987/uber-eats-APP",
    image: "/projects/uber-eats.png",
    tags: ["React Native"],
    featured: false,
  },
  {
    title: "Next-Auth",
    description: "Authentication implementation with NextAuth.js patterns.",
    github: "https://github.com/midokhalil1987/nextauth",
    image: "/projects/next-auth.png",
    tags: ["Next.js", "Auth"],
    featured: false,
  },
  {
    title: "Login App Auth",
    description: "Secure login and registration flow with JWT authentication.",
    github: "https://github.com/midokhalil1987/loginAppAuth",
    image: "/projects/login-auth.png",
    tags: ["React", "JWT"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
