import { Template } from "@/types/templates";

export const uxUiDesignerTemplate: Template = {
  id: "ux-ui-designer-001",
  title: "UX/UI Designer Resume",
  description:
    "A creative resume template for UX/UI designers showcasing design skills, portfolio projects, and user-centered methodologies",
  category: "resume",
  tags: ["design", "UX", "UI", "creative", "portfolio"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Creative and user-focused UX/UI Designer with proven experience in creating intuitive digital experiences. Skilled in translating user needs into elegant design solutions that drive engagement and satisfaction. Strong background in user research, interaction design, and visual design principles.`,
      },
      {
        title: "Core Competencies",
        content: `• User Experience (UX) Design
• User Interface (UI) Design
• User Research & Testing
• Wireframing & Prototyping
• Information Architecture
• Visual Design & Typography
• Design Systems
• Responsive Design`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior UX/UI Designer
[Start Date] - [End Date]
• Led redesign of main product interface resulting in 40% improvement in user satisfaction
• Created and maintained comprehensive design system used across 5 product lines
• Conducted user research and usability testing with 200+ participants
• Collaborated with product and engineering teams on feature implementation
• Mentored junior designers and provided design direction

[Previous Company] - UI/UX Designer
[Start Date] - [End Date]
• Designed mobile app interfaces resulting in 4.8/5 star rating
• Developed user personas and journey maps for product development
• Improved conversion rate by 25% through optimization of user flows
• Created interactive prototypes for stakeholder presentations
• Collaborated with marketing team on brand consistency`,
      },
      {
        title: "Portfolio Highlights",
        content: `• E-commerce Platform Redesign: Increased conversion by 35%
• Mobile Banking App: Improved task completion rate by 45%
• Healthcare Portal: Reduced user errors by 60%
• Corporate Website: Increased engagement by 50%
• Design System: Implemented across 3 product lines`,
      },
      {
        title: "Education",
        content: `Bachelor of Fine Arts in Interaction Design
[University Name]
[Graduation Year]

User Experience Design Certificate
[Institution Name]
[Year]`,
      },
      {
        title: "Technical Skills",
        content: `• Design Tools: Figma, Sketch, Adobe XD, Illustrator, Photoshop
• Prototyping: InVision, Principle, ProtoPie
• Research: UserTesting, Hotjar, Optimal Workshop
• Code: HTML/CSS, Basic JavaScript
• Additional: Zeplin, Abstract, Version Control`,
      },
      {
        title: "Certifications",
        content: `• Google UX Design Certificate
• Certified Usability Analyst (CUA)
• Interaction Design Foundation Member
• Adobe Certified Professional`,
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
