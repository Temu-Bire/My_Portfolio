import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and high-performance client interfaces.",
    iconName: "frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend Engineering",
    description: "Architecting RESTful APIs, business logic, and server-side services.",
    iconName: "backend",
    skills: ["Node.js", "Express", "FastAPI", "Python", "REST APIs"],
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps for iOS and Android.",
    iconName: "mobile",
    skills: ["React Native", "Expo", "Mobile UI Patterns"],
  },
  {
    title: "Databases & Storage",
    description: "Structuring schemas, relational modeling, and document data storage.",
    iconName: "database",
    skills: ["PostgreSQL", "MongoDB", "Database Design", "SQL"],
  },
  {
    title: "DevOps & Tooling",
    description: "Version control, containerized environments, and CI/CD pipelines.",
    iconName: "devops",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Linux Fundamentals"],
  },
  {
    title: "AI & Computer Science",
    description: "Foundational CS theory, algorithms, and practical AI application integration.",
    iconName: "ai",
    skills: [
      "Data Structures & Algorithms",
      "Software Engineering Fundamentals",
      "Python",
      "Machine Learning Fundamentals",
      "AI APIs & Integration",
      "AI-Powered Applications",
    ],
  },
];
