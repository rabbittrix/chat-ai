import { Template } from "@/types/templates";

export const productManagerTemplate: Template = {
  id: "product-manager-001",
  title: "Product Manager Resume",
  description:
    "A professional resume template for product managers highlighting product strategy, leadership, and technical skills",
  category: "resume",
  tags: ["product", "management", "agile", "leadership", "technical"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Strategic Product Manager with extensive experience in product development and lifecycle management. Proven track record of delivering successful products through data-driven decision making and cross-functional team leadership. Expert in agile methodologies and user-centered design principles.`,
      },
      {
        title: "Core Competencies",
        content: `• Product Strategy & Roadmap Planning
• Agile/Scrum Methodologies
• User Research & Customer Journey Mapping
• Data Analytics & A/B Testing
• Cross-functional Team Leadership
• Stakeholder Management
• Product Metrics & KPIs
• Market Analysis & Competitive Research`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior Product Manager
[Start Date] - [End Date]
• Led development of flagship product generating $10M+ in annual revenue
• Managed product roadmap and backlog for team of 15 engineers
• Increased user engagement by 45% through feature optimization
• Conducted user research and implemented feedback leading to 30% increase in user satisfaction
• Collaborated with marketing team on product launches and go-to-market strategies

[Previous Company] - Product Manager
[Start Date] - [End Date]
• Developed and launched 3 new product features driving 25% revenue growth
• Led agile ceremonies and sprint planning for cross-functional team
• Reduced customer churn by 20% through product improvements
• Created and maintained product documentation and specifications
• Partnered with UX team to improve user experience and interface design`,
      },
      {
        title: "Education",
        content: `Master of Business Administration (MBA)
[University Name]
[Graduation Year]

Bachelor of Science in Computer Science
[University Name]
[Graduation Year]`,
      },
      {
        title: "Technical Skills",
        content: `• Product Tools: Jira, Confluence, Trello, Asana
• Analytics: Google Analytics, Mixpanel, Amplitude
• Prototyping: Figma, Sketch, InVision
• Technical: SQL, API Design, Basic Programming
• Additional: Excel/Sheets, PowerPoint/Slides, Project Management Tools`,
      },
      {
        title: "Certifications",
        content: `• Certified Scrum Product Owner (CSPO)
• Professional Scrum Master (PSM I)
• Google Analytics Certification
• Product Management Certification (PMC)`,
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
