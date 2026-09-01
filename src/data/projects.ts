import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "secure-auth-system",
    title: "Secure Authentication System",
    description:
      "A full-stack authentication system with modern security and account protection features.",
    problemSolved:
      "Provides secure user authentication with protection against common account and login threats.",
    image: "/projects/project-1.svg",
    technologies: ["React", "FastAPI", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/YOUR_USERNAME/secure-auth-system",
    liveUrl: "https://secure-auth-demo.vercel.app",
    featured: true,
  },

  {
    id: "sync-write",
    title: "SyncWrite",
    description:
      "A real-time collaborative document editor where multiple users can edit and collaborate on documents simultaneously.",
    problemSolved:
      "Enables teams to write and edit shared documents in real time without manual syncing.",
    image: "/projects/project-2.svg",
    technologies: [
      "React",
      "Node.js",
      "Socket.IO",
      "Tiptap",
      "Yjs",
      "MongoDB",
    ],
    githubUrl: "https://github.com/YOUR_USERNAME/sync-write",
    liveUrl: "https://sync-write-demo.vercel.app",
    featured: true,
  },

  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A mobile app for recording, organizing, and tracking personal expenses with a simple and intuitive interface.",
    problemSolved:
      "Helps users monitor their spending and understand where their money goes.",
    image: "/projects/project-3.svg",
    technologies: ["React Native", "Expo", "TypeScript", "Zustand"],
    githubUrl: "https://github.com/YOUR_USERNAME/expense-tracker",
    liveUrl: "https://expo.dev/@YOUR_USERNAME/expense-tracker",
    featured: true,
  },

  {
    id: "job-match",
    title: "Job Application Portal",
    description:
      "A job-matching platform connecting job seekers with relevant opportunities based on their skills and interests.",
    problemSolved:
      "Helps job seekers discover suitable opportunities while helping employers find relevant candidates.",
    image: "/projects/project-4.svg",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/YOUR_USERNAME/job-match",
    liveUrl: "#",
    featured: true,
  },

  {
    id: "weather-intelligence",
    title: "Weather Intelligence System",
    description:
      "A weather intelligence system that collects, validates, stores, and analyzes weather data to provide structured insights from historical and current weather information.",
    problemSolved:
      "Transforms raw weather data into reliable, structured information that can help users understand weather conditions, trends, and historical patterns.",
    image: "/projects/project-5.svg",
    technologies: [
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
    ],
    githubUrl: "https://github.com/YOUR_USERNAME/weather-intelligence",
    liveUrl: "#",
    featured: true,
  },

  {
    id: "ai-integrated-ecommerce",
    title: "AI-Integrated E-Commerce Platform",
    description:
      "A full-stack e-commerce platform enhanced with AI-powered features using Retrieval-Augmented Generation (RAG) to provide intelligent product assistance and context-aware user interactions.",
    problemSolved:
      "Improves the online shopping experience by combining traditional e-commerce functionality with AI-powered product discovery and intelligent assistance.",
    image: "/projects/project-6.svg",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "RAG",
      "AI",
      "REST API",
    ],
    githubUrl:
      "https://github.com/Temu-Bire/Ai_integrated_ecommerse_website",
    liveUrl: "#",
    featured: true,
  },
];