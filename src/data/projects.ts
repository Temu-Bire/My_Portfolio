import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "secure-auth-system",
    title: "Secure Authentication System",
   image: "/projects/project-1.svg",
    technologies: ["React", "FastAPI", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Temu-Bire/Authentication-System.git",
    liveUrl: "https://secure-auth-demo.vercel.app",
    featured: true,
  },

  {
    id: "sync-write",
    title: "SyncWrite",
    image: "/projects/project-2.svg",
    technologies: [
      "React",
      "Node.js",
      "Socket.IO",
      "Tiptap",
      "Yjs",
      "MongoDB",
    ],
    githubUrl: "https://github.com/Temu-Bire/Real_Time_Collaborative_Document_Editor.git",
    liveUrl: "https://real-time-collaborative-document-editor-2-zo09.onrender.com",
    featured: true,
  },

  {
    id: "expense-tracker",
    title: "Expense Tracker",
    image: "/projects/project-3.svg",
    technologies: ["React Native", "Expo", "TypeScript", "Zustand"],
    githubUrl: "https://github.com/Temu-Bire/expense-tracker.git",
    liveUrl: "https://expo.dev/@YOUR_USERNAME/expense-tracker",
    featured: true,
  },

  {
    id: "job-match",
    title: "Job Application Portal",
    image: "/projects/project-4.svg",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Temu-Bire/Job-board.git",
    liveUrl: "#",
    featured: true,
  },

  {
    id: "weather-intelligence",
    title: "Weather Intelligence System",
    image: "/projects/project-5.svg",
    technologies: [
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
    ],
    githubUrl: "https://github.com/Temu-Bire/Weather-Intelligent-System.git",
    liveUrl: "#",
    featured: true,
  },

  {
    id: "ai-integrated-ecommerce",
    title: "AI-Integrated E-Commerce Platform",
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
      "https://github.com/Temu-Bire/Ai_integrated_ecommerse_website.git",
    liveUrl: "#",
    featured: true,
  },
];