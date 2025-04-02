import { Template } from "@/types/templates";

export const salesExecutiveTemplate: Template = {
  id: "sales-executive-001",
  title: "Sales Executive Resume",
  description:
    "A results-driven resume template for sales executives highlighting revenue growth, client relationships, and sales strategies",
  category: "resume",
  tags: ["sales", "business development", "account management", "negotiation"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Dynamic Sales Executive with proven track record of exceeding targets and building long-term client relationships. Expert in complex B2B sales cycles, strategic account management, and team leadership. Consistently recognized for top performance and ability to penetrate new markets.`,
      },
      {
        title: "Core Competencies",
        content: `• Strategic Sales Planning
• Business Development
• Account Management
• Contract Negotiation
• Team Leadership
• Client Relationship Building
• Sales Pipeline Management
• Market Analysis & Strategy`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior Sales Executive
[Start Date] - [End Date]
• Exceeded annual sales targets by 135%, generating $12M in new business revenue
• Managed portfolio of 50+ enterprise clients with 95% retention rate
• Led team of 8 sales representatives, achieving 40% YoY team growth
• Developed and implemented new sales strategy increasing pipeline by 60%
• Negotiated and closed largest deal in company history ($2.5M)

[Previous Company] - Regional Sales Manager
[Start Date] - [End Date]
• Consistently achieved 120% of quarterly sales targets
• Built and maintained relationships with C-level executives
• Expanded territory revenue by 75% through new client acquisition
• Implemented sales training program improving team performance by 45%
• Reduced sales cycle length by 30% through process optimization`,
      },
      {
        title: "Sales Achievement Highlights",
        content: `• President's Club Award Winner (3 consecutive years)
• Top Sales Executive of the Year 2023
• Closed $15M+ in sales revenue in past 12 months
• Developed 3 new market territories
• 100% client satisfaction rating`,
      },
      {
        title: "Education",
        content: `Bachelor of Business Administration
Major in Marketing
[University Name]
[Graduation Year]`,
      },
      {
        title: "Technical Skills",
        content: `• CRM Systems: Salesforce, HubSpot, Microsoft Dynamics
• Sales Tools: LinkedIn Sales Navigator, Outreach, SalesLoft
• Analytics: Tableau, Power BI
• Productivity: Microsoft Office Suite, Google Workspace
• Presentation Tools: PowerPoint, Prezi`,
      },
      {
        title: "Certifications",
        content: `• Certified Sales Executive (CSE)
• SPIN Selling Certification
• Challenger Sale Certification
• Salesforce Certified Administrator
• Strategic Account Management Association (SAMA) Certification`,
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
