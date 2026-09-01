import { EducationItem, CertificationItem } from "@/types";

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    field: "Computer Science & Software Systems",
    institution: "University Name [Configurable Placeholder]",
    status: "4th-Year Student (Senior Standing)",
    expectedGraduation: "Expected 2026",
    details: [
      "Core coursework in Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering Principles.",
      "Hands-on coursework projects focusing on full-stack web applications, relational database design, and algorithmic problem solving.",
      "Active participant in collegiate coding groups, tech hackathons, and collaborative software projects.",
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Frontend & Backend Engineering Certificate",
    issuer: "Gebeya Inc.",
    description:
      "Intensive engineering program covering modern full-stack web development methodologies, responsive frontend frameworks, RESTful API construction, and database integration.",
    verificationUrl: "https://example.com/certificate-verification-placeholder",
    skillsCovered: [
      "React & Modern JavaScript",
      "Node.js & Express APIs",
      "Database Architecture & SQL",
      "Git & Collaborative Workflow",
      "Software Quality & Testing",
    ],
  },
];
