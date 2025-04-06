import { Template } from "@/types/templates";

export const backendDeveloperTemplate: Template = {
  id: "backend-developer-001",
  title: "Backend Developer Resume",
  description:
    "A technical resume template for backend developers highlighting server-side development, databases, and system architecture",
  category: "resume",
  tags: ["backend", "server", "database", "API", "architecture"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Experienced Backend Developer with expertise in designing and implementing scalable server-side applications and RESTful APIs. Strong background in database design, system architecture, and performance optimization. Proven track record of building robust and efficient backend systems.`,
      },
      {
        title: "Core Competencies",
        content: `• Server-side Development
• Database Design & Optimization
• API Development & Integration
• Microservices Architecture
• System Scalability
• Security Implementation
• Performance Optimization
• Cloud Services Integration`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior Backend Developer
[Start Date] - [End Date]
• Architected and implemented microservices handling 1M+ daily requests
• Optimized database queries reducing response time by 60%
• Designed and built RESTful APIs consumed by multiple client applications
• Implemented caching strategy improving system performance by 40%
• Led migration from monolithic to microservices architecture

[Previous Company] - Backend Developer
[Start Date] - [End Date]
• Developed authentication system supporting 100K+ users
• Created automated deployment pipeline reducing deployment time by 70%
• Implemented real-time notification system using WebSockets
• Optimized memory usage reducing server costs by 35%
• Integrated third-party services and payment gateways`,
      },
      {
        title: "Technical Skills",
        content: `• Languages: Python, Java, Node.js, Go
• Frameworks: Django, Spring Boot, Express.js
• Databases: PostgreSQL, MongoDB, Redis, Elasticsearch
• Message Queues: RabbitMQ, Apache Kafka
• Cloud Services: AWS, GCP, Azure
• Tools: Docker, Kubernetes, Jenkins
• Testing: JUnit, PyTest, Mocha
• Additional: GraphQL, gRPC, Swagger`,
      },
      {
        title: "Key Projects",
        content: `• Payment Processing System: Handled $10M+ monthly transactions
• Authentication Service: OAuth2 implementation with JWT
• Data Processing Pipeline: Real-time analytics system
• API Gateway: Centralized API management solution
• Notification System: Push notifications for 1M+ users`,
      },
      {
        title: "Education",
        content: `Master of Science in Computer Science
Specialization in Distributed Systems
[University Name]
[Graduation Year]

Bachelor of Science in Software Engineering
[University Name]
[Graduation Year]`,
      },
      {
        title: "Certifications",
        content: `• AWS Certified Solutions Architect
• Oracle Certified Professional, Java SE
• MongoDB Certified Developer
• Kubernetes Application Developer (CKAD)
• Microsoft Certified: Azure Developer`,
      },
      {
        title: "System Architecture Achievements",
        content: `• Designed highly available systems with 99.99% uptime
• Implemented fault-tolerant microservices architecture
• Created scalable database sharding solution
• Developed automated backup and recovery systems
• Established security best practices and protocols`,
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
