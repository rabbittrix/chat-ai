import { Template } from "@/types/templates";

export const employmentAgreementTemplate: Template = {
  id: "employment-agreement-001",
  title: "Employment Agreement",
  description:
    "A comprehensive employment agreement template outlining terms and conditions of employment",
  category: "legal",
  tags: ["employment", "HR", "legal", "contract", "labor"],
  content: {
    sections: [
      {
        title: "Agreement Title",
        content: `EMPLOYMENT AGREEMENT

This Employment Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[EMPLOYER NAME], located at [ADDRESS] ("Employer")
and
[EMPLOYEE NAME], residing at [ADDRESS] ("Employee")`,
      },
      {
        title: "1. Position and Duties",
        content: `1.1 Position: Employee is hired for the position of [JOB TITLE].

1.2 Duties and Responsibilities:
• [PRIMARY RESPONSIBILITY 1]
• [PRIMARY RESPONSIBILITY 2]
• [PRIMARY RESPONSIBILITY 3]
• Other duties as assigned by the Employer

1.3 Work Location: [WORKPLACE ADDRESS/REMOTE WORK TERMS]

1.4 Reporting Relationship: Employee will report to [SUPERVISOR TITLE]`,
      },
      {
        title: "2. Compensation and Benefits",
        content: `2.1 Base Salary: 
• Annual salary of [AMOUNT]
• Payable [FREQUENCY] by [PAYMENT METHOD]

2.2 Bonuses and Incentives:
• Performance bonus: [TERMS]
• Other incentives: [DETAILS]

2.3 Benefits:
• Health Insurance: [DETAILS]
• Retirement Plans: [DETAILS]
• Paid Time Off: [VACATION/SICK LEAVE POLICY]
• Other Benefits: [ADDITIONAL BENEFITS]`,
      },
      {
        title: "3. Term and Schedule",
        content: `3.1 Term: This Agreement shall commence on [START DATE].

3.2 Work Schedule:
• Regular hours: [WORK HOURS]
• Overtime requirements: [OVERTIME POLICY]
• Flexible work arrangements: [IF APPLICABLE]

3.3 Probationary Period: [LENGTH AND TERMS]`,
      },
      {
        title: "4. Confidentiality and IP Rights",
        content: `4.1 Confidential Information:
Employee agrees to maintain the confidentiality of Employer's proprietary information, including:
• Trade secrets
• Customer information
• Business strategies
• Technical data
• Financial information

4.2 Intellectual Property:
• All work product created during employment belongs to Employer
• Assignment of rights to inventions and creations
• Terms for pre-existing IP`,
      },
      {
        title: "5. Non-Competition and Non-Solicitation",
        content: `5.1 Non-Competition:
During employment and for [PERIOD] after termination, Employee shall not:
• Work for direct competitors
• Start a competing business
• [SPECIFIC RESTRICTIONS]

5.2 Non-Solicitation:
Employee agrees not to:
• Solicit Employer's customers
• Recruit Employer's employees
• Duration: [PERIOD] after termination`,
      },
      {
        title: "6. Termination",
        content: `6.1 Termination by Employer:
• With cause: [GROUNDS FOR IMMEDIATE TERMINATION]
• Without cause: [NOTICE PERIOD]

6.2 Termination by Employee:
• Required notice period: [NOTICE PERIOD]
• Process for resignation

6.3 Final Pay and Benefits:
• Settlement of final wages
• Treatment of unused benefits
• Return of company property`,
      },
      {
        title: "7. Dispute Resolution",
        content: `7.1 Resolution Process:
• Internal grievance procedure
• Mediation requirements
• Arbitration provisions

7.2 Governing Law: This Agreement shall be governed by the laws of [JURISDICTION].`,
      },
      {
        title: "8. General Provisions",
        content: `8.1 Entire Agreement: This document contains the entire agreement between parties.

8.2 Modifications: Any changes must be in writing and signed by both parties.

8.3 Severability: If any provision is found invalid, others remain in effect.

8.4 Assignment: This Agreement may not be assigned by Employee.`,
      },
      {
        title: "9. Signatures",
        content: `IN WITNESS WHEREOF, the parties have executed this Employment Agreement as of the date first above written.

EMPLOYER:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

EMPLOYEE:
Name: _______________________
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
