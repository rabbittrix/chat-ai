import { Template } from "@/types/templates";

export const privacyPolicyTemplate: Template = {
  id: "privacy-policy-001",
  title: "Privacy Policy",
  description:
    "A comprehensive privacy policy template for websites, applications, and online services",
  category: "legal",
  tags: ["privacy", "data protection", "GDPR", "CCPA", "legal"],
  content: {
    sections: [
      {
        title: "1. Introduction",
        content: `PRIVACY POLICY

Last Updated: [DATE]

This Privacy Policy describes how [COMPANY NAME] ("we", "us", or "our") collects, uses, and discloses your personal information when you use our [SERVICE/WEBSITE/APPLICATION] (the "Service").

We are committed to protecting your personal information and your right to privacy. If you have any questions about this Privacy Policy, please contact us at [CONTACT INFORMATION].`,
      },
      {
        title: "2. Information We Collect",
        content: `2.1 Personal Information:
We collect information that you provide directly to us:
• Contact information (name, email, phone)
• Account credentials
• Payment information
• Communication preferences
• [OTHER SPECIFIC DATA POINTS]

2.2 Automatically Collected Information:
• Device information
• Log data
• Usage information
• Location data
• Cookies and tracking technologies

2.3 Information from Third Parties:
• Social media information
• Payment processors
• Analytics providers
• Marketing partners`,
      },
      {
        title: "3. How We Use Your Information",
        content: `3.1 Primary Uses:
• Providing and maintaining the Service
• Processing your transactions
• Communicating with you
• Customer support
• Account management

3.2 Additional Uses:
• Service improvement
• Analytics and research
• Marketing and advertising
• Legal compliance
• Security purposes

3.3 Legal Basis for Processing:
[FOR GDPR COMPLIANCE]:
• Consent
• Contract performance
• Legal obligations
• Legitimate interests`,
      },
      {
        title: "4. Information Sharing",
        content: `4.1 Third-Party Service Providers:
We may share information with:
• Cloud storage providers
• Payment processors
• Analytics services
• Marketing services
• Customer support services

4.2 Legal Requirements:
We may disclose information:
• To comply with laws
• To respond to legal requests
• To protect our rights
• In emergency situations

4.3 Business Transfers:
Information transfer in case of:
• Merger
• Acquisition
• Asset sale
• Bankruptcy`,
      },
      {
        title: "5. Data Security",
        content: `5.1 Security Measures:
• Encryption protocols
• Access controls
• Regular security assessments
• Employee training

5.2 Data Retention:
• Retention periods
• Deletion procedures
• Archiving policies

5.3 Data Breaches:
• Detection procedures
• Notification process
• Response plan`,
      },
      {
        title: "6. Your Privacy Rights",
        content: `6.1 Access and Control:
You have the right to:
• Access your data
• Correct your data
• Delete your data
• Port your data
• Restrict processing

6.2 Cookie Preferences:
• Cookie settings
• Opt-out options
• Do Not Track signals

6.3 Marketing Communications:
• Subscription preferences
• Unsubscribe options
• Frequency controls`,
      },
      {
        title: "7. Children's Privacy",
        content: `7.1 Age Restrictions:
• Minimum age requirements
• Parental consent requirements
• Data collection limitations

7.2 Special Protections:
• Verification procedures
• Parental controls
• Data deletion requests`,
      },
      {
        title: "8. International Data Transfers",
        content: `8.1 Data Transfer Mechanisms:
• Standard contractual clauses
• Privacy Shield compliance
• Adequacy decisions

8.2 International Processing:
• Data center locations
• Cross-border transfers
• Regional compliance`,
      },
      {
        title: "9. Changes to This Policy",
        content: `9.1 Policy Updates:
• Update procedures
• Notification methods
• Material changes

9.2 Version History:
• Previous versions
• Change log
• Effective dates`,
      },
      {
        title: "10. Specific Regional Rights",
        content: `10.1 European Union (GDPR):
• Data protection rights
• Supervisory authority
• Representative details

10.2 California (CCPA):
• Personal information categories
• Sale of personal information
• Consumer rights

10.3 Other Regions:
• Regional compliance
• Specific requirements
• Local representatives`,
      },
      {
        title: "11. Contact Information",
        content: `For privacy-related inquiries:

[COMPANY NAME]
Attn: Privacy Officer
[ADDRESS]
Email: [EMAIL]
Phone: [PHONE]

Data Protection Officer:
[DPO CONTACT INFORMATION]

EU Representative:
[EU REPRESENTATIVE DETAILS]`,
      },
    ],
  },
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: "1.0.0",
    author: "AI Legal Document Builder",
  },
};
