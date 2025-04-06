import { Template } from "@/types/templates";

export const businessAnalystTemplate: Template = {
  id: "business-analyst-001",
  title: "Business Analyst Resume",
  description:
    "A detailed resume template for business analysts highlighting analytical skills, process improvement, and stakeholder management",
  category: "resume",
  tags: [
    "business analysis",
    "data analysis",
    "requirements",
    "process improvement",
  ],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Detail-oriented Business Analyst with proven expertise in requirements gathering, process optimization, and stakeholder management. Skilled in translating business needs into technical requirements and driving process improvements that enhance operational efficiency and reduce costs.`,
      },
      {
        title: "Core Competencies",
        content: `• Requirements Analysis & Documentation
• Process Mapping & Optimization
• Data Analysis & Reporting
• Stakeholder Management
• Project Management
• Business Process Reengineering
• System Implementation
• Change Management`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior Business Analyst
[Start Date] - [End Date]
• Led requirements gathering and analysis for $10M digital transformation project
• Developed comprehensive business requirements documents (BRD) and functional specifications
• Reduced process inefficiencies resulting in 30% cost savings
• Facilitated workshops and meetings with stakeholders across all organizational levels
• Created and maintained process documentation and workflow diagrams

[Previous Company] - Business Analyst
[Start Date] - [End Date]
• Analyzed business processes and identified opportunities for automation
• Implemented process improvements reducing manual work by 40%
• Gathered and documented requirements for 5 major system implementations
• Created detailed user stories and acceptance criteria for development team
• Conducted user acceptance testing (UAT) and training sessions`,
      },
      {
        title: "Project Achievements",
        content: `• ERP System Implementation: Reduced processing time by 50%
• Business Process Reengineering: Saved $1.5M annually
• Reporting Automation: Eliminated 20 hours of manual work weekly
• Customer Service Enhancement: Improved satisfaction scores by 35%
• Compliance Initiative: Achieved 100% regulatory compliance`,
      },
      {
        title: "Education",
        content: `Bachelor of Business Administration
Major in Information Systems
[University Name]
[Graduation Year]

Business Analysis Certificate Program
[Institution Name]
[Year]`,
      },
      {
        title: "Technical Skills",
        content: `• Analysis Tools: Microsoft Visio, Draw.io, Lucidchart
• Database: SQL, Microsoft Access, Oracle
• BI Tools: Tableau, Power BI, QlikView
• Modeling: UML, BPMN
• Microsoft Office Suite (Advanced Excel)
• Project Management Tools: JIRA, Trello
• Documentation: Confluence, SharePoint`,
      },
      {
        title: "Certifications",
        content: `• CBAP (Certified Business Analysis Professional)
• Agile Analysis Certification (IIBA-AAC)
• Six Sigma Green Belt
• ITIL Foundation
• Certified Scrum Product Owner (CSPO)`,
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
