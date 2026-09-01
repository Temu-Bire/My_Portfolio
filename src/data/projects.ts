import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "campus-connect",
    title: "CampusConnect Platform",
    description:
      "A full-stack collaborative platform enabling university students to exchange peer tutoring notes, schedule study groups, and share departmental resources.",
    problemSolved:
      "Solves fragmented communication channels across university courses by centralizing verified academic resources and peer study sessions in a single responsive web portal.",
    image: "/projects/project-1.svg",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    category: "Full Stack",
    githubUrl: "https://github.com/YOUR_USERNAME/campus-connect",
    liveUrl: "https://campus-connect-demo.vercel.app",
    featured: true,
  },
  {
    id: "ai-study-assistant",
    title: "AI Study & Research Assistant",
    description:
      "An intelligent study companion that extracts key concepts from lecture notes, generates targeted practice quizzes, and explains complex CS topics step-by-step.",
    problemSolved:
      "Automates review material generation from raw course slides and markdown notes using structured AI embeddings and prompt-engineered synthesis.",
    image: "/projects/project-2.svg",
    technologies: ["Python", "FastAPI", "React", "Next.js", "AI APIs", "Tailwind CSS"],
    category: "AI",
    githubUrl: "https://github.com/YOUR_USERNAME/ai-study-assistant",
    liveUrl: "https://ai-study-assistant-demo.vercel.app",
    featured: true,
  },
  {
    id: "devpulse-mobile",
    title: "DevPulse Mobile Tracker",
    description:
      "A cross-platform mobile application for tracking daily coding habits, problem-solving streaks, and technical reading goals with offline-first synchronization.",
    problemSolved:
      "Helps early-career engineers build consistent daily practice through intuitive visual milestones and local SQLite persistence with cloud backup.",
    image: "/projects/project-3.svg",
    technologies: ["React Native", "Expo", "TypeScript", "Tailwind CSS (NativeWind)"],
    category: "Mobile",
    githubUrl: "https://github.com/YOUR_USERNAME/devpulse-mobile",
    liveUrl: "https://expo.dev/@YOUR_USERNAME/devpulse-mobile",
    featured: true,
  },
  {
    id: "cloudscale-api",
    title: "FastAPI Resource Hub Engine",
    description:
      "A modular, containerized REST API with JWT authentication, rate limiting, and role-based access control for content curation and user management.",
    problemSolved:
      "Provides a clean, scalable backend architecture for multi-tenant web applications with automated schema validation and database migrations.",
    image: "/projects/project-4.svg",
    technologies: ["FastAPI", "Python", "PostgreSQL", "Docker", "SQLAlchemy"],
    category: "Backend",
    githubUrl: "https://github.com/YOUR_USERNAME/fastapi-resource-engine",
    liveUrl: "https://fastapi-resource-engine.onrender.com/docs",
    featured: true,
  },
  {
    id: "algo-visualizer",
    title: "Algorithm & Data Structure Visualizer",
    description:
      "An interactive web tool demonstrating sorting, pathfinding (Dijkstra, A*), and graph traversal algorithms with step-by-step time complexity breakdowns.",
    problemSolved:
      "Makes abstract Computer Science algorithms intuitive through real-time state visualization and adjustable execution speeds for educational understanding.",
    image: "/projects/project-5.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Data Structures & Algorithms"],
    category: "Web",
    githubUrl: "https://github.com/YOUR_USERNAME/algo-visualizer",
    liveUrl: "https://algo-visualizer-demo.vercel.app",
    featured: true,
  },
  {
    id: "devops-cicd-pipeline",
    title: "Automated CI/CD & Health Monitor",
    description:
      "A containerized deployment pipeline with automated testing, Docker build verification, and a lightweight dashboard monitoring server health metrics.",
    problemSolved:
      "Streamlines code quality checks, prevents broken builds from reaching staging environments, and provides real-time HTTP endpoint uptime telemetry.",
    image: "/projects/project-6.svg",
    technologies: ["Docker", "GitHub Actions", "Node.js", "Express", "CI/CD"],
    category: "DevOps",
    githubUrl: "https://github.com/YOUR_USERNAME/devops-ci-pipeline",
    liveUrl: "https://YOUR-LIVE-DEMO.com",
    featured: true,
  },
];
