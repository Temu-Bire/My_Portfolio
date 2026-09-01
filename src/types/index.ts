export type ProjectCategory =
  | "All"
  | "Full Stack"
  | "Web"
  | "Mobile"
  | "AI"
  | "Backend"
  | "DevOps";

export interface Project {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  image?: string;
  technologies: string[];
  category: "Full Stack" | "Web" | "Mobile" | "AI" | "Backend" | "DevOps";
  githubUrl: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description?: string;
  iconName: "frontend" | "backend" | "mobile" | "database" | "devops" | "ai";
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  context: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  status: string;
  expectedGraduation: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate?: string;
  verificationUrl?: string;
  description: string;
  skillsCovered: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
  label: string;
}
