export const profile = {
  name: "Gagandeep Lamba",
  initials: "GL",
  avatar: "/profile.jpg",
  title: "Senior Full-Stack Developer",
  location: "Dubai, UAE",
  email: "gaganlmb@gmail.com",
  phones: ["+971 52 211 0425", "+91 98733 34283"],
  linkedin: "https://www.linkedin.com/in/gagan-lamba-77432814/",
  github: "https://github.com/gagandeepLamba",
  summary:
    "Senior Full-Stack Developer with 15+ years of experience designing, developing, deploying, and maintaining scalable web applications, enterprise platforms, CRM systems, CMS platforms, dashboards, APIs, and real-time applications.",
  highlights: [
    "Strong expertise in React.js, Next.js, Node.js, NestJS, Express.js, TypeScript, JavaScript, REST APIs, GraphQL, MongoDB, MySQL, PostgreSQL, AWS, Docker, Git, and CI/CD.",
    "AI-Assisted Development & Context Engineering: Claude Code, Cursor, Codex, DeepSeek, LLM-Driven Architecture.",
    "Enterprise Application Development: Custom CRM Systems, Scalable Web Applications, Full-Stack Integration.",
    "Experienced building high-performance frontends, scalable backend services, API-driven architectures, authentication systems, real-time applications, and enterprise CRM platforms handling millions of records.",
    "Proven track record leading development teams, designing system architecture, optimizing performance, integrating third-party services, managing cloud deployments, and delivering complete solutions through the full SDLC.",
  ],
};

export const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Angular",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "SASS",
      "LESS",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Socket.IO",
      "Python",
      "FastAPI",
      "PHP",
      "Laravel",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "MariaDB", "PostgreSQL"],
  },
  {
    title: "API & Architecture",
    skills: [
      "RESTful APIs",
      "GraphQL APIs",
      "Microservice-oriented Architecture",
      "API Integration",
      "Third-Party Integrations",
      "Authentication & Authorization",
      "JWT",
      "OAuth",
      "Passport.js",
      "Single Sign-On",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "EC2",
      "AWS Lambda",
      "S3",
      "Docker",
      "Nginx",
      "Apache",
      "CI/CD",
      "Jenkins",
      "Git",
    ],
  },
  {
    title: "AI-Assisted Development",
    skills: ["Claude Code", "Cursor", "Codex", "DeepSeek", "LLM-Driven Architecture"],
  },
  {
    title: "Additional Technologies",
    skills: [
      "React Native",
      "Meteor.js",
      "Firebase",
      "ECharts",
      "Django",
      "Golang",
    ],
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "Bitbucket", "Jira", "Postman"],
  },
];

export const projects = [
  {
    title: "Banke International Properties",
    description:
      "Enterprise real-estate CRM, CMS and investor-facing portal for a global property investment firm, handling 1M+ lead and listing records.",
    image: "/projects/banke.png",
    url: "https://banke.ae",
    tags: ["Next.js", "NestJS", "CRM", "ECharts"],
  },
  {
    title: "Commonwealth Migration Group",
    description:
      "Immigration-consultancy platform with live Express Entry draw tracking, CRS scoring tools, and consultation booking for Canadian immigration.",
    image: "/projects/commonwealthmigration.png",
    url: "https://commonwealthmigration.ca/",
    tags: ["Next.js", "Node.js", "CRM"],
  },
  {
    title: "DM Consultant Middle East",
    description:
      "Dubai-based visa and immigration consultancy site covering skilled migration, study, work and visit visas, backed by a 3M+ record CRM.",
    image: "/projects/dmconsultant.png",
    url: "http://dm-consultant.ae/",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "ScoreCarts Retail Analytics",
    description:
      "Retail analytics dashboard delivering real-time insights and data-driven decision tools, deployed on AWS with automated CI/CD.",
    image: "/projects/scorecarts.png",
    url: "https://pg.scorecarts.com",
    tags: ["Node.js", "React.js", "AWS"],
  },
  {
    title: "TPConnects",
    description:
      "Enterprise travel-booking platform for flights, hotels, cars and cruises, with GraphQL APIs and airline-system integrations.",
    image: "/projects/tpconnects.png",
    url: "https://tpconnects.com",
    tags: ["React.js", "GraphQL", "Angular"],
  },
  {
    title: "Sayed Metal",
    description:
      "CMS and e-commerce platform with real-time live-chat and group-chat functionality for a UAE metal-trading business.",
    image: null,
    url: "https://myscrap.com",
    tags: ["Node.js", "WebSockets", "CMS", "E-Commerce"],
  },
  {
    title: "CMG CRM Portal",
    description:
      "Internal staff CRM for Commonwealth Migration Group covering leads, clients, operations, payments and reporting across every branch.",
    image: "/projects/cmgsales.png",
    url: "https://cmgsales.ca",
    tags: ["React.js", "Node.js", "CRM", "Auth"],
  },
  {
    title: "Global Navigator CRM",
    description:
      "Multi-country staff CRM spanning Dubai HQ, Canada, Europe, Australia and New Zealand, covering leads through final approval.",
    image: "/projects/navigatorcrm.png",
    url: "https://navigatorcrm.online",
    tags: ["React.js", "Node.js", "CRM", "Multi-region"],
  },
  {
    title: "DMC One CRM Portal",
    description:
      "Internal CRM workspace for DM Consultant covering leads, clients, operations, payments and reporting across every branch.",
    image: "/projects/dmcone.png",
    url: "https://dmcone.org",
    tags: ["React.js", "Node.js", "CRM", "Auth"],
  },
  {
    title: "Banke Connect",
    description:
      "Staff portal for Banke International Properties, the gateway CRM into Dubai's real-estate market for the internal sales team.",
    image: "/projects/crmbanke.png",
    url: "https://crm.banke.one",
    tags: ["Next.js", "NestJS", "CRM"],
  },
];

type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tech: string[];
  websites?: { label: string; url: string }[];
};

export const experience: Job[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Banke International Properties LLC",
    location: "Dubai, UAE",
    period: "December 2025 – Present",
    websites: [{ label: "banke.ae", url: "https://banke.ae" }],
    points: [
      "Develop and maintain enterprise-level internal CRM, CMS, real-estate portals, dashboards, and business applications.",
      "Design and develop modern frontend applications using React.js and Next.js.",
      "Build backend applications and APIs using Node.js and NestJS.",
      "Developed an internal CMS using React.js and NestJS.",
      "Build scalable REST APIs for internal systems and third-party service integrations.",
      "Developed Node.js APIs for live-chat service integration.",
      "Build interactive reporting and analytics dashboards using ECharts, Next.js, and Node.js.",
      "Work with CRM systems containing more than one million lead and property-listing records.",
      "Optimize backend queries and application performance for large datasets.",
      "Maintain source code using Git and manage application deployments on AWS.",
      "Troubleshoot production applications, backend services, API integrations, and deployment issues.",
      "Collaborate with business stakeholders to translate operational requirements into scalable technical solutions.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "NestJS", "TypeScript", "REST APIs", "ECharts", "AWS", "Git", "CRM", "CMS"],
  },
  {
    role: "Senior / Lead Full-Stack Developer",
    company: "Conversions / DM Consultant",
    location: "UAE",
    period: "August 2021 – November 2025",
    websites: [
      { label: "commonwealthmigration.ca", url: "https://commonwealthmigration.ca/" },
      { label: "dm-consultant.ae", url: "http://dm-consultant.ae/" },
    ],
    points: [
      "Developed and maintained enterprise CRM systems, customer portals, dashboards, and web applications.",
      "Built frontend applications using React.js, Next.js, Vue.js, React Native, and TypeScript.",
      "Designed and developed backend services and APIs using Node.js, NestJS, and Golang.",
      "Developed REST APIs supporting frontend applications, mobile applications, CRM systems, and external integrations.",
      "Developed internal CMS solutions and business-management platforms.",
      "Built and maintained real-time applications using Meteor.js and MongoDB.",
      "Worked on CRM infrastructure handling more than 3 million user records.",
      "Designed integrations for live-chat platforms using Node.js and Golang.",
      "Built e-commerce platforms and supporting CRM functionality using Next.js and Vue.js.",
      "Introduced Python (FastAPI) for high-throughput CRM and internal-tooling APIs, speeding up processing of million-record datasets.",
      "Led a team of developers and marketing professionals and improved project-delivery efficiency by approximately 25%.",
      "Managed Git-based development workflows and deployed applications on AWS infrastructure.",
      "Participated in architecture, development, debugging, optimization, deployment, and production support.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "NestJS", "TypeScript", "MongoDB", "Meteor.js", "Vue.js", "React Native", "REST APIs", "Python", "FastAPI", "Golang", "AWS", "Git"],
  },
  {
    role: "Senior / Lead Full-Stack Developer",
    company: "Scorecarts",
    location: "UAE",
    period: "October 2020 – August 2021",
    websites: [{ label: "pg.scorecarts.com", url: "https://pg.scorecarts.com" }],
    points: [
      "Developed backend APIs using Node.js and TypeScript.",
      "Built and maintained web portals, dashboards, CRM applications, and live data-visualization interfaces.",
      "Developed frontend applications using Angular and React.js.",
      "Implemented secure authentication using REST APIs, JWT, Passport.js, and token-based authentication.",
      "Developed backend and administrative functionality for data-driven applications.",
      "Built projects using automated CI/CD pipelines.",
      "Deployed and maintained applications on AWS EC2, AWS S3, and AWS Lambda.",
      "Managed application upgrades across Angular, Node.js, and React.js projects.",
      "Supervised a three-member development and marketing team.",
      "Contributed to improvements that increased user engagement by approximately 30%.",
      "Developed and maintained Django-based CMS functionality.",
    ],
    tech: ["Node.js", "TypeScript", "React.js", "Angular", "REST APIs", "JWT", "Passport.js", "Django", "AWS EC2", "S3", "Lambda", "CI/CD", "Git"],
  },
  {
    role: "Senior / Lead Full-Stack Developer",
    company: "TPConnects LLC",
    location: "UAE",
    period: "December 2019 – September 2020",
    websites: [{ label: "tpconnects.com", url: "https://tpconnects.com" }],
    points: [
      "Worked on an enterprise travel booking platform supporting flights, hotels, cars, activities, cruises, and insurance.",
      "Designed and developed backend APIs using Node.js and GraphQL.",
      "Developed frontend interfaces using React.js, Angular, and TypeScript.",
      "Implemented application-performance improvements using lazy loading, AOT compilation, and optimized application architecture.",
      "Implemented authentication and authorization using JWT, OAuth, REST APIs, and token-based authentication.",
      "Worked on security requirements related to airline-system integrations.",
      "Developed banking and accounts-related modules for the travel platform.",
      "Built and deployed projects through CI/CD pipelines.",
      "Managed application deployments using AWS EC2 and AWS Lambda.",
      "Maintained and upgraded applications built using Node.js, React.js, Angular, and PHP technologies.",
    ],
    tech: ["Node.js", "React.js", "Angular", "TypeScript", "GraphQL", "REST APIs", "JWT", "OAuth", "AWS", "CI/CD"],
  },
  {
    role: "Web Developer",
    company: "Mauritz Jarl Software House",
    location: "UAE",
    period: "December 2018 – December 2019",
    points: [
      "Developed and supported web applications for an international fitness platform.",
      "Built frontend functionality using Vue.js and JavaScript.",
      "Developed backend functionality and APIs using Laravel and Symfony.",
      "Integrated Firebase, Firebase Cloud Messaging, and APIs for mobile applications.",
      "Troubleshot application bugs and supported production environments.",
      "Worked with Jenkins and AWS as part of DevOps and deployment activities.",
      "Developed reusable object-oriented application components.",
      "Maintained source code using Git.",
    ],
    tech: ["Vue.js", "JavaScript", "Laravel", "Symfony", "Firebase", "REST APIs", "Jenkins", "AWS", "Git"],
  },
  {
    role: "Senior Web Developer",
    company: "Sayed Metal",
    location: "UAE",
    period: "January 2016 – November 2018",
    websites: [{ label: "myscrap.com", url: "https://myscrap.com" }],
    points: [
      "Designed and developed complex web applications, CMS platforms, and e-commerce systems.",
      "Built real-time live-chat and group-chat functionality using Node.js and WebSockets.",
      "Performed requirement analysis, application development, debugging, testing, and deployment.",
      "Managed delivery of multiple software projects from concept through production.",
      "Led a small team of backend and frontend developers.",
      "Coordinated with development teams to ensure accurate and timely software delivery.",
    ],
    tech: ["Node.js", "WebSockets", "JavaScript", "PHP", "CMS", "E-Commerce"],
  },
  {
    role: "Senior Web Developer",
    company: "Upwork",
    location: "India",
    period: "December 2014 – November 2015",
    points: [
      "Developed and maintained web applications for international clients.",
      "Worked with JavaScript libraries, data tables, charting solutions, OpenCart, PHPBB, APIs, and cloud-hosted applications.",
      "Performed application troubleshooting, performance optimization, and production support.",
      "Developed vendor-management systems and other customized web applications.",
      "Managed GitHub and Bitbucket repositories and cloud-hosting environments.",
    ],
    tech: ["JavaScript", "OpenCart", "PHPBB", "APIs"],
  },
  {
    role: "Senior Application Developer",
    company: "Global IT Technology",
    location: "India",
    period: "April 2013 – November 2014",
    points: [
      "Led and supervised a team of four developers across multiple software projects.",
      "Developed applications for banking, accounting, education, and management domains.",
      "Worked with external APIs, SOAP services, payment systems, and third-party integrations.",
      "Coordinated directly with international clients to gather requirements and deliver application solutions.",
      "Managed projects across requirement analysis, development, testing, troubleshooting, and deployment.",
    ],
    tech: ["APIs", "SOAP", "Payment Systems"],
  },
  {
    role: "PHP Developer",
    company: "Go Heritage India Journeys Pvt. Ltd.",
    location: "India",
    period: "May 2011 – February 2013",
    points: [
      "Developed and maintained more than 70 websites and web applications.",
      "Supervised two developers while coordinating multiple development projects.",
      "Integrated flight APIs and SOAP-based external services.",
      "Developed applications from initial requirements through production deployment.",
      "Worked on website architecture, performance optimization, and search-engine-friendly development.",
    ],
    tech: ["PHP", "SOAP", "Flight APIs"],
  },
];

export const education = [
  {
    degree: "Bachelor of Commerce (BCom)",
    school: "",
    period: "2007 – 2010",
  },
  {
    degree: "Software Engineering Diploma",
    school: "NIIT",
    period: "2005 – 2007",
  },
];

export const strengths = [
  "Technical Leadership",
  "Team Management",
  "Solution Architecture",
  "Problem Solving",
  "Requirement Analysis",
  "Project Delivery",
  "Client Communication",
  "Performance Optimization",
  "Production Troubleshooting",
  "Agile Development",
  "Cross-Functional Collaboration",
];

export const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "CRM Records Managed", value: "3M+" },
  { label: "Companies", value: "9" },
  { label: "Websites Delivered", value: "70+" },
];
