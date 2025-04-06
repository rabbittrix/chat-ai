import { Template } from "@/types/templates";

export const marketingSpecialistTemplate: Template = {
  id: "marketing-specialist-001",
  title: "Marketing Specialist Resume",
  description:
    "A dynamic resume template for marketing specialists highlighting digital marketing skills, campaign management, and measurable results",
  category: "resume",
  tags: ["marketing", "digital", "social media", "analytics", "campaigns"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Results-oriented Marketing Specialist with expertise in digital marketing, brand development, and campaign management. Proven track record of developing and executing successful marketing strategies that drive engagement and ROI. Strong analytical skills with focus on data-driven decision making.`,
      },
      {
        title: "Core Competencies",
        content: `• Digital Marketing Strategy
• Social Media Management
• Content Marketing
• SEO/SEM
• Email Marketing
• Marketing Analytics
• Brand Development
• Campaign Management`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior Marketing Specialist
[Start Date] - [End Date]
• Led digital marketing campaigns resulting in 150% increase in lead generation
• Managed social media presence growing followers from 10K to 100K
• Developed content strategy increasing organic traffic by 200%
• Optimized email campaigns achieving 45% open rate and 15% CTR
• Managed monthly marketing budget of $50,000 with 300% ROI

[Previous Company] - Marketing Specialist
[Start Date] - [End Date]
• Created and executed social media strategy across multiple platforms
• Implemented SEO best practices improving search rankings by 40%
• Developed marketing materials increasing conversion rate by 25%
• Conducted market research and competitor analysis
• Collaborated with design team on brand identity projects`,
      },
      {
        title: "Campaign Highlights",
        content: `• Product Launch Campaign: Generated $2M in revenue
• Social Media Contest: Reached 1M+ users organically
• Email Nurture Series: 35% conversion rate
• Content Marketing: 200K+ monthly blog visitors
• PPC Campaign: Reduced CPA by 45%`,
      },
      {
        title: "Technical Skills",
        content: `• Marketing Tools: HubSpot, Mailchimp, Hootsuite
• Analytics: Google Analytics, SEMrush, Ahrefs
• Advertising: Google Ads, Facebook Ads, LinkedIn Ads
• CRM: Salesforce, Zoho, HubSpot CRM
• Design: Adobe Creative Suite, Canva
• Additional: WordPress, HTML/CSS basics`,
      },
      {
        title: "Education",
        content: `Bachelor of Business Administration
Major in Marketing
[University Name]
[Graduation Year]

Digital Marketing Certificate
[Institution Name]
[Year]`,
      },
      {
        title: "Certifications",
        content: `• Google Analytics Certification
• HubSpot Inbound Marketing
• Facebook Blueprint
• Google Ads Certification
• Hootsuite Social Marketing`,
      },
      {
        title: "Additional Skills",
        content: `• Project Management
• Marketing Automation
• A/B Testing
• Lead Generation
• Marketing Strategy
• Brand Management
• Content Creation
• Data Analysis`,
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
