// Mock data for Mahesh Katti's Portfolio

export const personalInfo = {
  name: "Mahesh Katti",
  title: "Senior Full Stack Developer",
  tagline: "Building secure, high-performance web applications",
  email: "maheshk9668@gmail.com",
  phone: "+91 7702432219",
  location: "Hyderabad, India",
  profileImage: "https://customer-assets.emergentagent.com/job_3ac6ebc9-b05b-4890-b827-88b06aaa3872/artifacts/2upgxfvi_WhatsApp%20Image%202025-12-22%20at%2012.38.17%20PM.jpeg",
  social: {
    github: "https://github.com/maheshkatti",
    linkedin: "https://linkedin.com/in/maheshkatti",
    email: "mailto:maheshk9668@gmail.com"
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
  languages: ["English", "Hindi", "Telugu"]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
