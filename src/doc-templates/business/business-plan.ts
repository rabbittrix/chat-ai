import { Template } from "@/types/templates";

export const businessPlanTemplate: Template = {
  id: "business-plan-001",
  title: "Professional Business Plan",
  description:
    "A comprehensive business plan template for startups and established companies",
  category: "business",
  tags: ["business plan", "startup", "strategy", "financial planning"],
  content: {
    sections: [
      {
        title: "Executive Summary",
        content: `[COMPANY NAME]
Business Plan - [YEAR]

Vision: [COMPANY VISION STATEMENT]
Mission: [COMPANY MISSION STATEMENT]

Key Highlights:
• Market Opportunity: [BRIEF DESCRIPTION]
• Solution: [PRODUCT/SERVICE OVERVIEW]
• Target Market: [PRIMARY CUSTOMER SEGMENTS]
• Financial Projections: [KEY METRICS]
• Funding Required: [AMOUNT]`,
      },
      {
        title: "Company Overview",
        content: `1. COMPANY BACKGROUND
• Founded: [DATE]
• Location: [ADDRESS]
• Legal Structure: [STRUCTURE]
• Stage: [DEVELOPMENT STAGE]

2. CORE COMPETENCIES
• [KEY STRENGTH 1]
• [KEY STRENGTH 2]
• [KEY STRENGTH 3]

3. TEAM
• Management Team
  - [NAME], [POSITION] - [BRIEF BIO]
  - [NAME], [POSITION] - [BRIEF BIO]
• Advisory Board
  - [NAME] - [EXPERTISE]
  - [NAME] - [EXPERTISE]`,
      },
      {
        title: "Market Analysis",
        content: `1. MARKET SIZE
• Total Addressable Market (TAM): [SIZE]
• Serviceable Addressable Market (SAM): [SIZE]
• Serviceable Obtainable Market (SOM): [SIZE]

2. MARKET TRENDS
• [TREND 1]: [DESCRIPTION]
• [TREND 2]: [DESCRIPTION]
• [TREND 3]: [DESCRIPTION]

3. COMPETITIVE ANALYSIS
Competitors:
• [COMPETITOR 1]
  - Strengths: [LIST]
  - Weaknesses: [LIST]
• [COMPETITOR 2]
  - Strengths: [LIST]
  - Weaknesses: [LIST]`,
      },
      {
        title: "Product/Service Line",
        content: `1. PRODUCT DESCRIPTION
• Core Features
• Value Proposition
• Development Stage
• Intellectual Property

2. TECHNOLOGY
• [TECHNOLOGY 1]: [DESCRIPTION]
• [TECHNOLOGY 2]: [DESCRIPTION]

3. FUTURE DEVELOPMENTS
• Product Roadmap
• R&D Plans
• Timeline`,
      },
      {
        title: "Marketing Strategy",
        content: `1. TARGET MARKET SEGMENTS
• Primary Segment: [DESCRIPTION]
• Secondary Segment: [DESCRIPTION]

2. MARKETING CHANNELS
• Digital Marketing
• Content Strategy
• Social Media
• PR & Communications

3. SALES STRATEGY
• Sales Process
• Customer Acquisition
• Partnerships
• Distribution Channels`,
      },
      {
        title: "Financial Projections",
        content: `1. FINANCIAL SUMMARY
Revenue Projections:
Year 1: [AMOUNT]
Year 2: [AMOUNT]
Year 3: [AMOUNT]

2. KEY METRICS
• Customer Acquisition Cost (CAC): [AMOUNT]
• Lifetime Value (LTV): [AMOUNT]
• Burn Rate: [AMOUNT]/month
• Break-even Point: [TIMELINE]

3. FUNDING REQUIREMENTS
• Amount Needed: [AMOUNT]
• Use of Funds:
  - [CATEGORY 1]: [AMOUNT]
  - [CATEGORY 2]: [AMOUNT]
  - [CATEGORY 3]: [AMOUNT]`,
      },
    ],
  },
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: "1.0.0",
    author: "AI Business Document Builder",
  },
};
