import { Template } from "@/types/templates";

export const independentContractorAgreementTemplate: Template = {
  id: "independent-contractor-agreement-001",
  title: "Independent Contractor Agreement",
  description:
    "A comprehensive independent contractor agreement template for freelance and consulting relationships",
  category: "legal",
  tags: ["contractor", "freelance", "consulting", "services", "legal"],
  content: {
    sections: [
      {
        title: "Agreement Title",
        content: `INDEPENDENT CONTRACTOR AGREEMENT

This Independent Contractor Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[CLIENT NAME], located at [ADDRESS] ("Client")
and
[CONTRACTOR NAME], located at [ADDRESS] ("Contractor")`,
      },
      {
        title: "1. Services",
        content: `1.1 Scope of Services:
Contractor agrees to provide the following services:
[DETAILED DESCRIPTION OF SERVICES]

1.2 Deliverables:
• [DELIVERABLE 1]
• [DELIVERABLE 2]
• [ADDITIONAL DELIVERABLES]

1.3 Project Timeline:
• Start Date: [DATE]
• Milestones: [SPECIFY DATES]
• Completion Date: [DATE]`,
      },
      {
        title: "2. Compensation",
        content: `2.1 Fee Structure:
[CHOOSE AND SPECIFY ONE]:
• Hourly Rate: [AMOUNT] per hour
• Project Fee: [AMOUNT] for complete project
• Retainer: [AMOUNT] per [PERIOD]

2.2 Payment Schedule:
• Invoice Frequency: [SPECIFY]
• Payment Terms: Net [NUMBER] days
• Payment Method: [SPECIFY]

2.3 Expenses:
• Reimbursable Expenses: [SPECIFY]
• Approval Requirements
• Documentation Required`,
      },
      {
        title: "3. Independent Contractor Status",
        content: `3.1 Relationship:
Contractor is an independent contractor, not an employee.

3.2 Contractor Responsibilities:
• Own taxes and insurance
• Own equipment and tools
• Own schedule and method
• No employee benefits

3.3 No Authority to Bind:
Contractor has no authority to bind Client to any agreements.`,
      },
      {
        title: "4. Intellectual Property",
        content: `4.1 Work Product Ownership:
• All work product created belongs to Client
• Assignment of rights
• Contractor retains no rights

4.2 Pre-existing IP:
• Contractor retains rights to pre-existing IP
• License terms for pre-existing IP
• Identification of pre-existing IP

4.3 Third-Party Materials:
• Usage rights
• Licenses required
• Attribution requirements`,
      },
      {
        title: "5. Confidentiality",
        content: `5.1 Confidential Information:
• Definition of confidential information
• Protection requirements
• Permitted disclosures

5.2 Duration:
Confidentiality obligations survive termination

5.3 Return of Materials:
All confidential materials must be returned upon request`,
      },
      {
        title: "6. Term and Termination",
        content: `6.1 Term:
This Agreement is effective until [DATE/PROJECT COMPLETION]

6.2 Termination:
• By either party with [NUMBER] days notice
• Immediate termination for cause
• Effect on payments
• Return of materials

6.3 Survival:
Specified provisions survive termination`,
      },
      {
        title: "7. Representations and Warranties",
        content: `7.1 Contractor Warranties:
• Qualified to provide services
• No conflicts of interest
• Work will be original
• Compliance with laws

7.2 Client Warranties:
• Authority to enter agreement
• Will provide necessary resources
• Will review deliverables timely`,
      },
      {
        title: "8. Limitation of Liability",
        content: `8.1 Liability Cap:
Maximum liability limited to [AMOUNT/FEES PAID]

8.2 Exclusions:
• Gross negligence
• Willful misconduct
• Confidentiality breaches
• IP infringement`,
      },
      {
        title: "9. Insurance",
        content: `9.1 Required Insurance:
Contractor shall maintain:
• Professional liability insurance
• General liability insurance
• Workers compensation (if applicable)
• [OTHER REQUIRED INSURANCE]

9.2 Coverage Amounts:
[SPECIFY MINIMUM COVERAGE AMOUNTS]`,
      },
      {
        title: "10. General Provisions",
        content: `10.1 Assignment:
No assignment without written consent

10.2 Governing Law:
[JURISDICTION]

10.3 Dispute Resolution:
• Negotiation requirement
• Mediation
• Arbitration
• Venue for litigation

10.4 Entire Agreement

10.5 Amendments

10.6 Severability`,
      },
      {
        title: "11. Signatures",
        content: `IN WITNESS WHEREOF, the parties have executed this Independent Contractor Agreement as of the date first above written.

CLIENT:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

CONTRACTOR:
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
