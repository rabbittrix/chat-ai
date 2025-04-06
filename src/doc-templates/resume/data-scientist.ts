import { Template } from "@/types/templates";

export const dataScientistTemplate: Template = {
  id: "data-scientist-001",
  title: "Data Scientist Resume",
  description:
    "A technical resume template for data scientists highlighting machine learning expertise, statistical analysis, and business impact",
  category: "resume",
  tags: ["data science", "machine learning", "analytics", "AI", "statistics"],
  content: {
    sections: [
      {
        title: "Professional Summary",
        content: `Innovative Data Scientist with extensive experience in machine learning, statistical analysis, and predictive modeling. Proven track record of delivering data-driven solutions that drive business value. Expert in translating complex analytical findings into actionable business insights.`,
      },
      {
        title: "Core Competencies",
        content: `• Machine Learning & AI
• Statistical Analysis
• Predictive Modeling
• Data Visualization
• Big Data Processing
• Deep Learning
• Natural Language Processing
• A/B Testing & Experimentation`,
      },
      {
        title: "Professional Experience",
        content: `[Company Name] - Senior Data Scientist
[Start Date] - [End Date]
• Developed machine learning models improving prediction accuracy by 35%
• Led team of 5 data scientists on customer segmentation project
• Implemented real-time recommendation system increasing sales by 25%
• Created automated reporting pipeline saving 20 hours weekly
• Collaborated with stakeholders to define data strategy

[Previous Company] - Data Scientist
[Start Date] - [End Date]
• Built predictive models for customer churn reduction
• Developed NLP models for sentiment analysis with 90% accuracy
• Optimized marketing campaigns through A/B testing
• Created interactive dashboards for business metrics
• Conducted statistical analysis for product features`,
      },
      {
        title: "Technical Skills",
        content: `• Languages: Python, R, SQL
• ML/DL: TensorFlow, PyTorch, scikit-learn
• Big Data: Spark, Hadoop, Hive
• Cloud: AWS, GCP, Azure
• Visualization: Tableau, Power BI, D3.js
• Databases: PostgreSQL, MongoDB
• Tools: Git, Docker, Jupyter
• Statistics: Hypothesis Testing, Regression`,
      },
      {
        title: "Project Highlights",
        content: `• Customer Segmentation: Increased marketing ROI by 40%
• Fraud Detection: Reduced false positives by 60%
• Demand Forecasting: Improved accuracy by 30%
• Text Classification: Built model with 95% F1-score
• Time Series Analysis: Predicted trends with 90% accuracy`,
      },
      {
        title: "Education",
        content: `Ph.D. in Data Science
[University Name]
[Graduation Year]

Master of Science in Statistics
[University Name]
[Graduation Year]

Bachelor of Science in Mathematics
[University Name]
[Graduation Year]`,
      },
      {
        title: "Research & Publications",
        content: `• Published 5+ papers in top-tier machine learning conferences
• Patent holder for novel deep learning architecture
• Regular contributor to data science journals
• Speaker at industry conferences
• Research focus on deep learning applications`,
      },
      {
        title: "Certifications",
        content: `• AWS Certified Machine Learning Specialist
• Google Professional Data Engineer
• Deep Learning Specialization (Coursera)
• TensorFlow Developer Certificate
• Microsoft Azure AI Engineer`,
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
