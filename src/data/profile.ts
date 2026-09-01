import { SocialLink } from "@/types";

export const profileData = {
  name: "Temesgen Birhenu",
  role: "Full-Stack Developer",
  heroSummary:
    "I’m Temu Bire, a fourth-year Computer Science student and developer with 3 years of coding experience. I build full-stack web and mobile applications and explore AI-powered solutions to real-world problems.",
  aboutParagraphs: [
    "I am a fourth-year Computer Science student with approximately three years of coding experience. My development journey has focused on building practical applications while strengthening my understanding of software engineering and Computer Science fundamentals.",
    "I enjoy working across the stack—from designing responsive interfaces and building backend APIs to working with databases, mobile applications, cloud-ready development, and AI-powered systems.",
    "I learn primarily by building projects, solving problems, and continuously improving my engineering practices.",
  ],
  stats: [
    {
      value: "4th Year",
      label: "Computer Science Student",
    },
    {
      value: "3+",
      label: "Years Coding Experience",
    },
  
    {
      value: "Full Stack",
      label: "Web & Mobile Development",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Temu-Bire",
      icon: "github",
      label: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/temesgen-birhenu-720323340/",
      icon: "linkedin",
      label: "LinkedIn Profile",
    },
    {
      name: "Email",
      url: "mailto:temubre1996@gmail.com",
      icon: "mail",
      label: "Email Address",
    },
  ] satisfies SocialLink[],
  email: "temubre1996@gmail.com",
  photoPath: "/profile.jpg",
};
