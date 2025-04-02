import { Template } from "@/types/templates";

export const termsOfServiceTemplate: Template = {
  id: "terms-of-service-001",
  title: "Terms of Service",
  description:
    "A comprehensive terms of service template for websites, applications, and online services",
  category: "legal",
  tags: ["terms", "service", "website", "online", "legal"],
  content: {
    sections: [
      {
        title: "1. Introduction",
        content: `TERMS OF SERVICE

Last Updated: [DATE]

Welcome to [SERVICE NAME] (the "Service"). Please read these Terms of Service (the "Terms") carefully before using the Service operated by [COMPANY NAME] ("us", "we", or "our").

By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Service.`,
      },
      {
        title: "2. Definitions",
        content: `2.1 Key Terms:
• "Service" refers to [DESCRIPTION OF SERVICE]
• "User" means any individual who accesses or uses the Service
• "Content" means all information, data, text, software, images, videos, or other materials
• "User Content" means content submitted by users
• "Account" means a registered user account on the Service`,
      },
      {
        title: "3. User Accounts",
        content: `3.1 Account Creation:
• Registration requirements
• Age restrictions
• Account security responsibilities

3.2 Account Termination:
• Termination by user
• Termination by service
• Effect of termination

3.3 Account Information:
• Accuracy requirement
• Updates and maintenance
• Privacy protection`,
      },
      {
        title: "4. User Responsibilities",
        content: `4.1 Acceptable Use:
Users agree not to:
• Violate any laws
• Infringe intellectual property rights
• Transmit harmful code
• Interfere with service operation
• Harass or harm others

4.2 Content Guidelines:
• Content restrictions
• Prohibited content
• Reporting violations

4.3 Security:
• Password protection
• Unauthorized access
• Security breach reporting`,
      },
      {
        title: "5. Service Usage",
        content: `5.1 License to Use:
• Scope of license
• Restrictions
• Modifications

5.2 Service Availability:
• No guarantee of availability
• Maintenance windows
• Service modifications

5.3 Third-Party Services:
• Links to other services
• Third-party content
• External terms`,
      },
      {
        title: "6. Intellectual Property",
        content: `6.1 Our IP Rights:
• Service ownership
• Trademarks
• Copyrights
• Patents

6.2 User Content:
• License grant
• Ownership retention
• Usage rights

6.3 DMCA Compliance:
• Copyright policy
• Takedown procedures
• Counter-notices`,
      },
      {
        title: "7. Privacy and Data",
        content: `7.1 Privacy Policy:
• Data collection
• Data usage
• Data protection

7.2 Data Security:
• Security measures
• Breach notification
• User responsibilities

7.3 Cookies and Tracking:
• Cookie usage
• Tracking technologies
• Opt-out options`,
      },
      {
        title: "8. Payments and Billing",
        content: `8.1 Fees:
• Service costs
• Payment methods
• Billing cycles

8.2 Refunds:
• Refund policy
• Cancellation terms
• Dispute resolution

8.3 Price Changes:
• Notice requirements
• Effect on existing subscriptions
• Renewal terms`,
      },
      {
        title: "9. Disclaimers and Limitations",
        content: `9.1 Warranty Disclaimer:
THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND

9.2 Limitation of Liability:
• Liability cap
• Excluded damages
• Basis of bargain

9.3 Indemnification:
User agrees to indemnify and hold harmless [COMPANY NAME] from claims arising from:
• User content
• Service misuse
• Terms violation`,
      },
      {
        title: "10. Changes to Terms",
        content: `10.1 Modifications:
• Right to modify
• Notice of changes
• Continued use constitutes acceptance

10.2 Communication:
• Notice methods
• Contact information
• Support channels`,
      },
      {
        title: "11. General Provisions",
        content: `11.1 Governing Law:
These Terms shall be governed by the laws of [JURISDICTION]

11.2 Dispute Resolution:
• Informal resolution
• Arbitration provisions
• Class action waiver

11.3 Severability:
If any provision is found invalid, others remain in effect

11.4 Entire Agreement:
These Terms constitute the entire agreement between users and [COMPANY NAME]

11.5 Contact Information:
[COMPANY NAME]
[ADDRESS]
[EMAIL]
[PHONE]`,
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
