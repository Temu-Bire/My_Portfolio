

export interface Project {
  id: string;
  title: string;
  image?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
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
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  status: string;
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
