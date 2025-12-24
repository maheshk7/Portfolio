// Mock data for Mahesh Katti's Portfolio - Enhanced Version

export const personalInfo = {
  name: "Mahesh Katti",
  title: "Senior Full Stack Developer",
  tagline: "Building secure, high-performance web applications",
  email: "maheshkathi20@gmail.com",
  phone: "+91 7702432219",
  location: "Hyderabad, India",
  profileImage: "https://customer-assets.emergentagent.com/job_3ac6ebc9-b05b-4890-b827-88b06aaa3872/artifacts/6yo9tetb_image.png",
  social: {
    github: "https://github.com/maheshk7",
    linkedin: "https://www.linkedin.com/in/katti-mahesh-255768201/",
    email: "mailto:maheshkathi20@gmail.com"
  }
};

export const summary = `Senior Full Stack Developer with 6+ years of experience specializing in Angular-based enterprise applications and modern full-stack development using Angular, React.js, Node.js, and Python. Currently working at Culinda, a product-based cybersecurity company, contributing to large-scale platforms such as Pulse, DarkEyeScan, and ThreatPrism. Proven experience in building secure, high-performance web applications, RESTful APIs, and data-driven systems using MySQL and MongoDB.`;

export const skills = {
  frontend: [
    { name: "Angular", level: 95 },
    { name: "React.js", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML5/CSS3", level: 95 },
    { name: "Bootstrap", level: 85 }
  ],
  backend: [
    { name: "Node.js (Express)", level: 90 },
    { name: "Python", level: 80 },
    { name: "RESTful APIs", level: 95 }
  ],
  database: [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 88 }
  ],
  tools: [
    "Git & GitHub",
    "Docker",
    "AI-assisted Development",
    "GitHub Copilot",
    "Linux",
    "Windows"
  ]
};

// Advanced Skills Categories
export const advancedSkills = [
  {
    id: 1,
    title: "Advanced Backend & Architecture",
    icon: "Server",
    color: "from-blue-500 to-cyan-500",
    description: "Deep system design and scalability expertise",
    items: [
      { category: "Authentication & Authorization", skills: ["JWT", "OAuth2", "Refresh Tokens", "RBAC"] },
      { category: "Application Architecture", skills: ["MVC vs Clean Architecture", "Monolith vs Microservices"] },
      { category: "Performance Optimization", skills: ["Redis Caching", "Rate Limiting", "Async Processing", "Queues & Workers"] },
      { category: "Real-time Systems", skills: ["WebSockets", "Socket.io", "Server-Sent Events"] }
    ]
  },
  {
    id: 2,
    title: "DevOps & Deployment",
    icon: "Cloud",
    color: "from-purple-500 to-pink-500",
    description: "Full ownership of production environments",
    items: [
      { category: "Version Control", skills: ["Advanced Git", "Rebase", "Cherry-pick", "Release Flows"] },
      { category: "CI/CD", skills: ["GitHub Actions", "GitLab CI"] },
      { category: "Containerization", skills: ["Docker", "Docker Compose"] },
      { category: "Cloud Platforms", skills: ["AWS", "Azure", "GCP", "EC2", "S3", "IAM"] },
      { category: "Hosting & Servers", skills: ["Nginx", "PM2", "Reverse Proxies"] }
    ]
  },
  {
    id: 3,
    title: "Database & Data Engineering",
    icon: "Database",
    color: "from-emerald-500 to-teal-500",
    description: "From usage to design mastery",
    items: [
      { category: "Database Design", skills: ["Normalization", "Denormalization", "Indexing Strategies"] },
      { category: "Advanced Concepts", skills: ["Transactions", "Concurrency", "Query Optimization"] },
      { category: "ORMs", skills: ["Sequelize", "TypeORM", "Prisma"] },
      { category: "Data Strategy", skills: ["SQL vs NoSQL vs Redis", "Migrations", "Backups"] }
    ]
  },
  {
    id: 4,
    title: "Testing & Quality Engineering",
    icon: "CheckCircle",
    color: "from-orange-500 to-amber-500",
    description: "What senior full-stack devs never skip",
    items: [
      { category: "Frontend Testing", skills: ["Jest", "Testing Library", "Cypress"] },
      { category: "Backend Testing", skills: ["Unit Tests", "Integration Tests", "API Contract Testing"] },
      { category: "Methodologies", skills: ["TDD", "Mocking & Stubbing"] }
    ]
  },
  {
    id: 5,
    title: "Frontend Engineering",
    icon: "Layout",
    color: "from-indigo-500 to-violet-500",
    description: "Beyond UI to frontend systems",
    items: [
      { category: "State Management", skills: ["Redux", "NgRx", "Zustand"] },
      { category: "Performance", skills: ["Lazy Loading", "Memoization", "Bundle Optimization"] },
      { category: "Accessibility", skills: ["WCAG Standards", "SEO for SPAs"] },
      { category: "SSR & SSG", skills: ["Next.js", "Angular Universal"] },
      { category: "Design Systems", skills: ["Reusable Components", "Storybook"] }
    ]
  },
  {
    id: 6,
    title: "Security Fundamentals",
    icon: "Shield",
    color: "from-red-500 to-rose-500",
    description: "Full-stack devs are gatekeepers",
    items: [
      { category: "Attack Prevention", skills: ["XSS", "CSRF", "SQL Injection"] },
      { category: "Secure Communication", skills: ["HTTPS", "CORS"] },
      { category: "Best Practices", skills: ["Secure Password Storage", "Environment Variables", "OWASP Top 10"] }
    ]
  },
  {
    id: 7,
    title: "System Design",
    icon: "Layers",
    color: "from-cyan-500 to-blue-500",
    description: "What separates mid-level from senior",
    items: [
      { category: "Scalable APIs", skills: ["Load Balancing", "Stateless Services", "Horizontal Scaling"] },
      { category: "Event-driven Systems", skills: ["Message Queues", "Event Sourcing"] },
      { category: "System Designs", skills: ["Chat Apps", "E-commerce Platforms", "Notification Systems"] }
    ]
  },
  {
    id: 8,
    title: "Product & Collaboration",
    icon: "Users",
    color: "from-pink-500 to-fuchsia-500",
    description: "Often invisible, always decisive",
    items: [
      { category: "Technical Skills", skills: ["Requirement Analysis", "API Documentation", "Swagger/OpenAPI"] },
      { category: "Soft Skills", skills: ["Technical Writing", "Code Reviews", "Mentoring", "Cross-team Collaboration"] }
    ]
  },
  {
    id: 9,
    title: "Bonus Skills",
    icon: "Sparkles",
    color: "from-yellow-500 to-orange-500",
    description: "Powerful differentiators",
    items: [
      { category: "Modern Tech", skills: ["GraphQL", "Micro-frontends", "Web Vitals (LCP, CLS)"] },
      { category: "Mobile & AI", skills: ["React Native", "Flutter Basics", "OpenAI APIs", "ML Inference"] },
      { category: "Observability", skills: ["Logging", "Monitoring", "Sentry Error Tracking"] }
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "Culinda",
    role: "Senior Developer",
    duration: "Present",
    type: "Product-based Cybersecurity Company",
    description: "Working as a Senior Developer on multiple cybersecurity and digital risk management platforms. Responsible for full-stack development, feature enhancements, API integrations, performance optimization, and production support.",
    projects: [
      {
        name: "Pulse",
        url: "https://pulse.culinda.com/",
        description: "Implemented frontend features using Angular and backend APIs using Node.js. Integrated reporting modules and enhanced overall user experience."
      },
      {
        name: "DarkEyeScan",
        url: "https://darkeyescan.com/",
        description: "Cybersecurity scanning platform focused on threat detection and analysis. Developed UI components, handled API integrations, and resolved critical production issues."
      },
      {
        name: "ThreatPrism",
        url: "https://threatprism.culinda.com/",
        description: "Built dynamic dashboards and advanced data visualization components. Implemented role-based access control and complex filtering features."
      }
    ],
    achievements: [
      "End-to-end feature development from UI to backend services",
      "REST API design, development, and third-party integrations",
      "Database schema design, optimization, and query performance tuning",
      "Bug fixing, code reviews, and production issue resolution"
    ]
  },
  {
    id: 2,
    company: "Dev2Prod",
    role: "Software Developer",
    duration: "2.5 Years",
    type: "Healthcare Solutions",
    description: "Worked as a Software Developer contributing to healthcare-based web applications with a primary focus on the RM Hospital Management System.",
    projects: [
      {
        name: "RM Hospital Management System",
        url: null,
        description: "Developed and maintained hospital management modules including patient records, appointments, billing, and reports."
      }
    ],
    achievements: [
      "Built responsive user interfaces using Angular and JavaScript",
      "Implemented backend APIs using Node.js and Python",
      "Designed and optimized database schemas using MySQL",
      "Worked closely with stakeholders to understand requirements"
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "St. Ann's College of Engineering and Technology",
    board: "JNTU Kakinada",
    aggregate: "60%"
  },
  {
    degree: "Intermediate",
    institution: "Mallela Catherine College",
    board: "Board of Intermediate Education, AP",
    aggregate: "48%"
  },
  {
    degree: "SSC",
    institution: "S M Govt High School",
    board: "Board of Secondary Education, AP",
    aggregate: "64%"
  }
];

export const strengths = [
  {
    title: "Problem Solving",
    description: "Strong problem-solving and analytical skills"
  },
  {
    title: "Quick Learner",
    description: "Self-motivated and quick learner"
  },
  {
    title: "Team Collaboration",
    description: "Excellent teamwork and communication skills"
  },
  {
    title: "Adaptability",
    description: "Ability to adapt to new technologies and challenges"
  }
];

export const personalDetails = {
  dob: "20-05-1995",
  nationality: "Indian",
  languages: ["English", "Telugu"]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" }
];

// Carousel slides for hero section
export const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    caption: "Full Stack Development",
    description: "Building scalable web applications with modern technologies"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
    caption: "Clean Code Architecture",
    description: "Writing maintainable and efficient code solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=1920&q=80",
    caption: "Cybersecurity Solutions",
    description: "Developing secure platforms for digital risk management"
  }
];

// Chatbot conversation flow
export const chatbotFlow = {
  greeting: "Hi there! 👋 I'm Mahesh's assistant. How can I help you today?",
  options: [
    { id: "hire", text: "I want to hire Mahesh" },
    { id: "project", text: "Discuss a project" },
    { id: "contact", text: "Get in touch" }
  ]
};
