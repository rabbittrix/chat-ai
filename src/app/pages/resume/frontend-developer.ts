import { Template } from "@/types/templates";

export const frontendDeveloperTemplate: Template = {
  id: "frontend-developer-001",
  title: "Frontend Developer Resume",
  description:
    "A modern resume template for frontend developers highlighting UI/UX skills, JavaScript frameworks, and responsive design",
  category: "resume",
  tags: ["frontend", "web development", "UI/UX", "JavaScript", "React"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Creative Frontend Developer with strong expertise in modern JavaScript frameworks and responsive web design. Passionate about creating intuitive user interfaces and optimizing web performance. Experienced in translating design mockups into pixel-perfect, accessible, and performant web applications.`,
      },
      {
        title: "Core Competencies",
        content: `• Modern JavaScript/TypeScript
• React.js/Next.js Development
• Responsive Web Design
• UI/UX Implementation
• Web Performance Optimization
• Cross-browser Compatibility
• Component Architecture
• State Management`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior Frontend Developer
[Start Date] - [End Date]
• Led frontend development of e-commerce platform serving 100K+ daily users
• Improved website performance score from 65 to 95 on Lighthouse
• Implemented responsive design system used across 20+ projects
• Reduced bundle size by 40% through code splitting and optimization
• Mentored junior developers and conducted code reviews

[Previous Company] - Frontend Developer
[Start Date] - [End Date]
• Developed and maintained multiple React-based web applications
• Created reusable component library reducing development time by 30%
• Implemented A/B testing framework increasing conversion rate by 25%
• Collaborated with UI/UX team to improve user experience
• Integrated third-party APIs and services`,
      },
      {
        title: "Technical Skills",
        content: `• Languages: JavaScript, TypeScript, HTML5, CSS3
• Frameworks: React, Next.js, Vue.js
• Styling: Sass/SCSS, Tailwind CSS, Styled-Components
• State Management: Redux, Context API, MobX
• Build Tools: Webpack, Vite, Babel
• Testing: Jest, React Testing Library, Cypress
• Version Control: Git, GitHub
• Additional: GraphQL, REST APIs`,
      },
      {
        title: "Key Projects",
        content: `• E-commerce Platform: Built with Next.js and Tailwind CSS
• Admin Dashboard: React-based analytics dashboard
• Progressive Web App: Offline-first mobile application
• Design System: Created component library with Storybook
• Marketing Website: Responsive landing pages with animations`,
      },
      {
        title: "Education",
        content: `Bachelor of Science in Computer Science
[University Name]
[Graduation Year]

Frontend Web Development Bootcamp
[Institution Name]
[Year]`,
      },
      {
        title: "Certifications",
        content: `• AWS Certified Cloud Practitioner
• Meta Frontend Developer Certificate
• Google Mobile Web Specialist
• Accessibility Fundamentals
• JavaScript Algorithms and Data Structures`,
      },
      {
        title: "Open Source & Community",
        content: `• Contributor to React-based open source projects
• Technical blog author with 10K+ monthly readers
• Speaker at local web development meetups
• Created educational content for frontend developers
• Active member of online developer communities`,
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
