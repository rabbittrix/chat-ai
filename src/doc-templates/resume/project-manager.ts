import { Template } from "@/types/templates";

export const projectManagerTemplate: Template = {
  id: "project-manager-001",
  title: "Project Manager Resume",
  description:
    "A comprehensive resume template for project managers highlighting project delivery, team leadership, and methodologies",
  category: "resume",
  tags: ["project management", "leadership", "agile", "PMP", "team management"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Results-oriented Project Manager with extensive experience in leading complex projects from inception to delivery. Proven track record of managing multi-million dollar initiatives while ensuring scope, budget, and timeline compliance. Expert in both Agile and Waterfall methodologies.`,
      },
      {
        title: "Core Competencies",
        content: `• Project Planning & Execution
• Budget Management
• Risk Mitigation
• Stakeholder Management
• Team Leadership
• Agile & Waterfall Methodologies
• Resource Allocation
• Change Management`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior Project Manager
[Start Date] - [End Date]
• Successfully delivered 15+ projects with combined budget of $25M
• Led cross-functional teams of 20+ members across multiple departments
• Reduced project delivery time by 30% through process optimization
• Managed stakeholder expectations across C-level executives
• Implemented PMO best practices improving project success rate by 40%

[Previous Company] - Project Manager
[Start Date] - [End Date]
• Managed portfolio of 10 concurrent projects valued at $15M
• Achieved 95% on-time project delivery rate
• Reduced project costs by 25% through efficient resource allocation
• Developed and maintained project documentation and reporting systems
• Led Agile transformation for development team of 30+ members`,
      },
      {
        title: "Project Highlights",
        content: `• Enterprise Software Implementation: $5M budget, 18-month timeline
• Digital Transformation Initiative: Led company-wide change affecting 500+ employees
• Infrastructure Upgrade: Completed 3 months ahead of schedule
• New Product Launch: Coordinated efforts across 5 departments
• Process Automation: Resulted in $2M annual savings`,
      },
      {
        title: "Education",
        content: `Master of Business Administration (MBA)
Project Management Specialization
[University Name]
[Graduation Year]

Bachelor of Science in Business Administration
[University Name]
[Graduation Year]`,
      },
      {
        title: "Technical Skills",
        content: `• Project Management Tools: JIRA, MS Project, Trello, Asana
• Collaboration: Confluence, SharePoint, Slack
• Business Tools: Microsoft Office Suite, Visio
• Reporting: PowerBI, Tableau
• Additional: Risk Management Software, Budget Tracking Tools`,
      },
      {
        title: "Certifications",
        content: `• Project Management Professional (PMP)
• Certified Scrum Master (CSM)
• PRINCE2 Practitioner
• Agile Certified Practitioner (PMI-ACP)
• Six Sigma Green Belt`,
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
