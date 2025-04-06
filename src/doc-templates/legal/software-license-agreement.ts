import { Template } from "@/types/templates";

export const softwareLicenseAgreementTemplate: Template = {
  id: "software-license-agreement-001",
  title: "Software License Agreement",
  description:
    "A comprehensive software license agreement template for software products and applications",
  category: "legal",
  tags: ["software", "license", "technology", "IT", "legal"],
  content: {
    sections: [
      {
        title: "Agreement Title",
        content: `SOFTWARE LICENSE AGREEMENT

This Software License Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[LICENSOR NAME], located at [ADDRESS] ("Licensor")
and
[LICENSEE NAME], located at [ADDRESS] ("Licensee")`,
      },
      {
        title: "1. Definitions",
        content: `1.1 "Software" means:
[DETAILED SOFTWARE DESCRIPTION]
• Name and version
• Components and modules
• Documentation
• Updates and upgrades

1.2 "License" means:
The rights granted under this Agreement

1.3 "Intellectual Property Rights" means:
All rights in the Software including:
• Copyright
• Patents
• Trade secrets
• Trademarks`,
      },
      {
        title: "2. License Grant",
        content: `2.1 Grant of License:
Licensor hereby grants Licensee:
[SPECIFY TYPE]:
• Perpetual or term license
• Exclusive or non-exclusive
• Transferable or non-transferable
• Territory restrictions

2.2 Permitted Uses:
• Installation rights
• Number of users/seats
• Backup copies
• Testing and development

2.3 Restrictions:
• No modification
• No reverse engineering
• No sublicensing
• No distribution`,
      },
      {
        title: "3. License Fees",
        content: `3.1 License Fee:
• Initial fee: [AMOUNT]
• Payment schedule
• Payment method

3.2 Maintenance Fees:
• Annual maintenance fee
• Support services included
• Update rights

3.3 Additional Fees:
• Additional user fees
• Custom development
• Training services`,
      },
      {
        title: "4. Term and Termination",
        content: `4.1 Term:
• Initial term
• Renewal terms
• Notice requirements

4.2 Termination:
• For breach
• For convenience
• Effect of termination
• Return of materials

4.3 Survival:
Specified provisions that survive termination`,
      },
      {
        title: "5. Delivery and Installation",
        content: `5.1 Delivery:
• Delivery method
• Delivery timeline
• Installation support

5.2 Acceptance:
• Testing period
• Acceptance criteria
• Rejection process

5.3 Training:
• Initial training
• Additional training
• Documentation`,
      },
      {
        title: "6. Maintenance and Support",
        content: `6.1 Support Services:
• Support hours
• Response times
• Support channels
• Severity levels

6.2 Updates and Upgrades:
• Update frequency
• Installation support
• Version support
• End-of-life policy

6.3 Service Level Agreement:
• Uptime guarantee
• Performance metrics
• Resolution times`,
      },
      {
        title: "7. Warranties and Disclaimers",
        content: `7.1 Software Warranties:
Licensor warrants that:
• Software will perform as documented
• Free from material defects
• No known infringement
• Compliance with laws

7.2 Disclaimer:
• No warranty of fitness
• No warranty of merchantability
• As-is provisions

7.3 Limitation of Liability:
• Liability cap
• Exclusion of damages
• Force majeure`,
      },
      {
        title: "8. Intellectual Property",
        content: `8.1 Ownership:
• Retention of rights
• Assignment provisions
• Third-party components

8.2 IP Indemnification:
• Scope of protection
• Defense obligations
• Settlement rights

8.3 IP Claims:
• Notice requirements
• Cooperation
• Remedies`,
      },
      {
        title: "9. Confidentiality",
        content: `9.1 Confidential Information:
• Definition
• Protection requirements
• Exceptions

9.2 Data Security:
• Security measures
• Breach notification
• Audit rights

9.3 Privacy Compliance:
• Data protection laws
• Privacy policies
• User data handling`,
      },
      {
        title: "10. General Provisions",
        content: `10.1 Assignment:
No assignment without written consent

10.2 Governing Law:
[JURISDICTION]

10.3 Dispute Resolution:
• Negotiation
• Mediation
• Arbitration
• Venue

10.4 Entire Agreement

10.5 Amendments

10.6 Severability`,
      },
      {
        title: "11. Signatures",
        content: `IN WITNESS WHEREOF, the parties have executed this Software License Agreement as of the date first above written.

LICENSOR:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

LICENSEE:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________`,
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
