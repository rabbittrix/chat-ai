import { Template } from "@/types/templates";

export const serviceAgreementTemplate: Template = {
  id: "service-agreement-001",
  title: "Service Agreement",
  description:
    "A comprehensive service agreement template for professional services and consulting relationships",
  category: "legal",
  tags: ["services", "business", "legal", "contract", "consulting"],
  content: {
    sections: [
      {
        title: "Agreement Title",
        content: `SERVICE AGREEMENT

This Service Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[SERVICE PROVIDER NAME], located at [ADDRESS] ("Provider")
and
[CLIENT NAME], located at [ADDRESS] ("Client")`,
      },
      {
        title: "1. Services",
        content: `1.1 Scope of Services: The Provider agrees to provide the following services to the Client:

[DETAILED DESCRIPTION OF SERVICES]

1.2 Delivery Schedule: Services shall be delivered according to the following schedule:
[TIMELINE OR MILESTONES]

1.3 Performance Standards: Provider shall perform the Services in a professional manner consistent with industry standards.`,
      },
      {
        title: "2. Compensation",
        content: `2.1 Fees: Client agrees to pay Provider the following fees:
[FEE STRUCTURE/RATES]

2.2 Payment Schedule:
• Initial payment: [AMOUNT/PERCENTAGE]
• Milestone payments: [DETAILS]
• Final payment: [AMOUNT/PERCENTAGE]

2.3 Expenses: [EXPENSE REIMBURSEMENT POLICY]

2.4 Late Payments: Payments made after the due date shall incur interest at [RATE]% per month.`,
      },
      {
        title: "3. Term and Termination",
        content: `3.1 Term: This Agreement shall commence on [START DATE] and continue until [END DATE].

3.2 Termination:
a) By mutual written agreement
b) By either party with [NUMBER] days written notice
c) Immediately for material breach
d) Upon completion of Services`,
      },
      {
        title: "4. Intellectual Property",
        content: `4.1 Ownership: All intellectual property created during the provision of Services shall be:
[OWNERSHIP TERMS]

4.2 Pre-existing IP: Each party retains rights to their pre-existing intellectual property.

4.3 License: [LICENSE TERMS IF APPLICABLE]`,
      },
      {
        title: "5. Confidentiality",
        content: `5.1 Both parties agree to maintain the confidentiality of any proprietary information disclosed during the provision of Services.

5.2 Confidential Information includes:
• Business strategies and plans
• Technical specifications
• Client data and information
• Pricing and financial information`,
      },
      {
        title: "6. Warranties and Representations",
        content: `6.1 Provider warrants that:
• Services will be performed in a professional manner
• Provider has the necessary skills and qualifications
• Services will comply with applicable laws and regulations

6.2 Client warrants that:
• It has the authority to enter into this Agreement
• It will provide necessary cooperation and resources`,
      },
      {
        title: "7. Limitation of Liability",
        content: `7.1 Provider's liability shall be limited to [AMOUNT] or the total fees paid under this Agreement, whichever is less.

7.2 Neither party shall be liable for indirect, incidental, or consequential damages.`,
      },
      {
        title: "8. General Provisions",
        content: `8.1 Independent Contractor: Provider is an independent contractor, not an employee.

8.2 Insurance: [INSURANCE REQUIREMENTS]

8.3 Assignment: Neither party may assign this Agreement without written consent.

8.4 Governing Law: This Agreement shall be governed by [JURISDICTION] law.

8.5 Dispute Resolution: [DISPUTE RESOLUTION PROCESS]`,
      },
      {
        title: "9. Signatures",
        content: `IN WITNESS WHEREOF, the parties have executed this Service Agreement as of the date first above written.

SERVICE PROVIDER:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

CLIENT:
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
