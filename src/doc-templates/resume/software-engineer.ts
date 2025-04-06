import { Template } from "@/types/templates";

export const softwareEngineerTemplate: Template = {
  id: "software-engineer-001",
  title: "Software Engineer Resume",
  description:
    "A comprehensive resume template for software engineers highlighting technical skills, project experience, and software development expertise",
  category: "resume",
  tags: ["software", "engineering", "development", "programming", "technical"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Results-driven Software Engineer with extensive experience in full-stack development and cloud technologies. Proven track record of delivering high-quality, scalable software solutions. Strong expertise in modern development practices, architecture patterns, and agile methodologies.`,
      },
      {
        title: "Core Competencies",
        content: `• Full Stack Development
• Software Architecture
• Cloud Computing
• Agile/Scrum Methodologies
• Test-Driven Development
• CI/CD Implementation
• System Design
• Performance Optimization`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior Software Engineer
[Start Date] - [End Date]
• Led development of microservices-based platform serving 1M+ users
• Implemented CI/CD pipeline reducing deployment time by 70%
• Architected cloud-native solutions using AWS services
• Mentored junior developers and conducted code reviews
• Optimized application performance improving response time by 50%

[Previous Company] - Software Engineer
[Start Date] - [End Date]
• Developed RESTful APIs consumed by multiple client applications
• Implemented automated testing increasing code coverage to 90%
• Created reusable component library reducing development time by 40%
• Collaborated with cross-functional teams on product features
• Maintained and improved legacy code base`,
      },
      {
        title: "Technical Skills",
        content: `• Languages: JavaScript/TypeScript, Python, Java, Go
• Frontend: React, Vue.js, Angular
• Backend: Node.js, Django, Spring Boot
• Databases: PostgreSQL, MongoDB, Redis
• Cloud: AWS, GCP, Azure
• DevOps: Docker, Kubernetes, Jenkins
• Testing: Jest, Pytest, JUnit
• Additional: GraphQL, REST APIs, WebSockets`,
      },
      {
        title: "Key Projects",
        content: `• E-commerce Platform: Built scalable microservices architecture
• Real-time Analytics System: Processed 1TB+ data daily
• Mobile App Backend: Supported 500K+ active users
• Payment Integration: Handled $1M+ daily transactions
• Authentication Service: Implemented OAuth2 and JWT`,
      },
      {
        title: "Education",
        content: `Master of Science in Computer Science
[University Name]
[Graduation Year]

Bachelor of Science in Software Engineering
[University Name]
[Graduation Year]`,
      },
      {
        title: "Certifications",
        content: `• AWS Certified Solutions Architect
• Google Cloud Professional Developer
• Microsoft Certified: Azure Developer
• Oracle Certified Professional, Java SE
• Kubernetes Application Developer (CKAD)`,
      },
      {
        title: "Open Source & Community",
        content: `• Contributor to major open source projects
• Technical blog author with 15K+ followers
• Speaker at technology conferences
• Hackathon mentor and organizer
• Active in developer communities`,
      },
    ],
  },
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: "1.0.0",
    author: "AI Resume Builder",
  },
};
