import { Template } from "@/types/templates";

export const devopsEngineerTemplate: Template = {
  id: "devops-engineer-001",
  title: "DevOps Engineer Resume",
  description:
    "A technical resume template for DevOps engineers highlighting infrastructure automation, CI/CD, and cloud technologies",
  category: "resume",
  tags: ["devops", "cloud", "automation", "infrastructure", "CI/CD"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Experienced DevOps Engineer with expertise in cloud infrastructure, automation, and CI/CD implementation. Proven track record of improving deployment efficiency, reducing downtime, and implementing robust monitoring solutions. Strong background in both development and operations with focus on scalable, reliable systems.`,
      },
      {
        title: "Core Competencies",
        content: `• Infrastructure as Code (IaC)
• CI/CD Pipeline Development
• Cloud Architecture & Migration
• Container Orchestration
• Configuration Management
• Monitoring & Logging
• Security Implementation
• Performance Optimization`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior DevOps Engineer
[Start Date] - [End Date]
• Implemented CI/CD pipelines reducing deployment time by 75%
• Managed cloud infrastructure on AWS serving 1M+ daily users
• Automated infrastructure deployment using Terraform and Ansible
• Reduced infrastructure costs by 40% through optimization
• Implemented monitoring solution with 99.99% uptime achievement

[Previous Company] - DevOps Engineer
[Start Date] - [End Date]
• Containerized 20+ applications using Docker and Kubernetes
• Developed automated testing and deployment workflows
• Implemented log aggregation system processing 1TB+ daily
• Reduced incident response time by 60% through monitoring
• Managed migration of legacy systems to cloud infrastructure`,
      },
      {
        title: "Technical Skills",
        content: `• Cloud Platforms: AWS, GCP, Azure
• Infrastructure: Terraform, CloudFormation
• Containers: Docker, Kubernetes, ECS
• CI/CD: Jenkins, GitLab CI, GitHub Actions
• Configuration: Ansible, Chef, Puppet
• Monitoring: Prometheus, Grafana, ELK Stack
• Version Control: Git, GitHub, BitBucket
• Scripting: Python, Bash, PowerShell`,
      },
      {
        title: "Key Projects",
        content: `• Cloud Migration: Led migration of 100+ services to AWS
• Automation Framework: Reduced manual operations by 85%
• Security Implementation: Achieved SOC2 compliance
• Monitoring Solution: Implemented comprehensive observability
• Disaster Recovery: Achieved RPO of 15 minutes`,
      },
      {
        title: "Education",
        content: `Bachelor of Science in Computer Science
[University Name]
[Graduation Year]

Cloud Architecture Specialization
[Institution Name]
[Year]`,
      },
      {
        title: "Certifications",
        content: `• AWS Certified DevOps Engineer Professional
• Google Cloud Professional DevOps Engineer
• Certified Kubernetes Administrator (CKA)
• HashiCorp Certified: Terraform Associate
• Docker Certified Associate
• Red Hat Certified Engineer (RHCE)`,
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
