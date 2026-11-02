// Update portfolio content, links, and images here.
// Paste a direct image URL (or a path inside public/) into profileImage or a project's image.
export const PROFILE = {
  name: "Nilesh Singh",
  title: "Aspiring Backend Developer",
  headline: "I build scalable backend systems and meaningful digital experiences.",
  description:
    "Computer Science Engineering student passionate about Java, Data Structures & Algorithms, backend engineering and building real-world software.",
  aboutLead:
    "I'm a developer who enjoys turning complex problems into clean, efficient and scalable solutions.",
  about:
    "I'm currently pursuing Computer Science Engineering and continuously improving my programming, problem-solving and software engineering skills. I enjoy exploring backend architecture, building applications and learning how software systems work.",
  availability: "Available for opportunities",
  profileImage: "https://i.postimg.cc/3NcW3vSh/Neelesh.png",
  emailPlaceholder: "singhnileshdev@gmail.com",
  links: {
    resume: "/NileshResume.pdf",
    github: "https://github.com/Neelesh7897",
    linkedin:
      "https://www.linkedin.com/in/nilesh-singh-7897?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/nilesh_.___?rpxt=Mnp2Y2ZlZHQxam84",
    email: "singhnileshdev@gmail.com",
  },
  tags: ["Java Developer", "Backend Enthusiast", "Problem Solver"],
  facts: [
    ["Education", "Computer Science Engineering"],
    ["Primary Language", "Java"],
    ["Focus", "Backend Development"],
    ["Interests", "DSA, System Design and Engineering"],
  ],
  skills: [
    { title: "Programming", dark: true, items: ["Java", "Python", "SQL"] },
    {
      title: "Backend Development",
      dark: false,
      items: ["Spring Boot", "Hibernate", "JDBC", "REST APIs"],
    },
    {
      title: "Tools & Technologies",
      dark: false,
      items: ["Git", "GitHub", "Docker", "IntelliJ IDEA", "VS Code", "Postman"],
    },
    {
      title: "Computer Science",
      dark: true,
      items: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },
  ],
  journey: [
    "Started programming and learning computer science fundamentals.",
    "Started solving DSA problems using Java.",
    "Explored object-oriented programming and backend development.",
    "Started building Spring Boot applications.",
    "Explored Docker, databases and deployment.",
    "Continuously building and improving real-world projects.",
  ],
  projects: [
    {
      name: "What Beats What",
      category: "Full Stack / AI Integration",
      year: "01",
      glow: "rgba(207,128,71,.32)",
      description:
        "A browser-based game where users challenge the current champion with creative inputs. An AI-powered judge determines the winner.",
      tags: ["Java", "Spring Boot", "JavaScript", "HTML", "CSS", "Groq API"],
      github: "",
      live: "",
      image: "", // Paste a project image URL here, or leave empty for the built-in artwork.
    },
    {
      name: "AEGIS Engine",
      category: "Backend Engineering / Infrastructure",
      year: "02",
      glow: "rgba(90,140,200,.3)",
      description:
        "An engineering project exploring backend services, containerization, database integration and production-oriented deployment.",
      tags: ["Python", "Docker", "PostgreSQL", "Redis", "MinIO"],
      github: "",
      live: "",
      image: "",
    },
    {
      name: "Attendance Management System",
      category: "Backend Development",
      year: "03",
      glow: "rgba(120,190,150,.28)",
      description:
        "A student attendance management application focused on structured data handling, database operations and backend functionality.",
      tags: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
      github: "",
      live: "",
      image: "",
    },
    {
      name: "DSA Problem Solving",
      category: "Problem Solving",
      year: "04",
      glow: "rgba(207,128,71,.28)",
      description:
        "My continuous journey of solving algorithmic problems, understanding data structures and improving problem-solving skills.",
      tags: ["Java", "LeetCode", "Data Structures", "Algorithms"],
      github: "",
      live: "",
      image: "",
    },
  ],
  goals: [
    "Becoming a strong backend engineer.",
    "Improving DSA and problem-solving.",
    "Understanding system design and scalable architecture.",
    "Building meaningful real-world applications.",
  ],
  stats: [
    { value: 300, suffix: "+", label: "LeetCode Problems" },
    { value: 25, suffix: "", label: "GitHub Repositories" },
    { value: 15, suffix: "+", label: "Projects Built" },
    { value: 10, suffix: "+", label: "Technologies Explored" },
  ],
};

export const NAV_ITEMS = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "journey"],
  ["Contact", "contact"],
];
