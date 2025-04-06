import { Template } from "@/types/templates";

export const loanAgreementTemplate: Template = {
  id: "loan-agreement-001",
  title: "Loan Agreement",
  description:
    "A comprehensive loan agreement template for business and personal loans",
  category: "legal",
  tags: ["loan", "finance", "debt", "banking", "legal"],
  content: {
    sections: [
      {
        title: "Agreement Title",
        content: `LOAN AGREEMENT

This Loan Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[LENDER NAME], located at [ADDRESS] ("Lender")
and
[BORROWER NAME], located at [ADDRESS] ("Borrower")`,
      },
      {
        title: "1. Loan Details",
        content: `1.1 Principal Amount:
The Lender agrees to loan the Borrower [AMOUNT] (the "Principal")

1.2 Purpose of Loan:
[SPECIFY PURPOSE]

1.3 Disbursement:
• Date: [DATE]
• Method: [PAYMENT METHOD]
• Account details: [ACCOUNT INFORMATION]`,
      },
      {
        title: "2. Interest and Fees",
        content: `2.1 Interest Rate:
• Annual rate: [PERCENTAGE]%
• Type: [FIXED/VARIABLE]
• Calculation method: [METHOD]

2.2 Additional Fees:
• Origination fee: [AMOUNT/PERCENTAGE]
• Late payment fee: [AMOUNT/PERCENTAGE]
• Prepayment penalty: [TERMS]

2.3 Annual Percentage Rate (APR):
Total cost of credit expressed as yearly rate: [PERCENTAGE]%`,
      },
      {
        title: "3. Repayment Terms",
        content: `3.1 Payment Schedule:
• Term length: [DURATION]
• Payment frequency: [FREQUENCY]
• Payment amount: [AMOUNT]
• Due dates: [DATES]

3.2 Amortization Schedule:
[ATTACH DETAILED SCHEDULE]

3.3 Prepayment:
• Prepayment rights
• Notice requirements
• Penalties or fees`,
      },
      {
        title: "4. Security and Collateral",
        content: `4.1 Collateral Description:
[IF APPLICABLE]:
• Asset description
• Value
• Location
• Documentation

4.2 Security Interest:
• Filing requirements
• Maintenance obligations
• Insurance requirements

4.3 Additional Guarantees:
• Personal guarantees
• Corporate guarantees
• Third-party guarantees`,
      },
      {
        title: "5. Default and Remedies",
        content: `5.1 Events of Default:
• Missed payments
• Breach of covenants
• False representations
• Bankruptcy or insolvency
• [OTHER DEFAULT EVENTS]

5.2 Lender's Remedies:
• Acceleration of debt
• Seizure of collateral
• Legal action
• Collection costs

5.3 Cure Periods:
• Payment defaults: [PERIOD]
• Other defaults: [PERIOD]`,
      },
      {
        title: "6. Borrower's Representations",
        content: `6.1 Borrower warrants that:
• Legal authority to borrow
• No existing defaults
• Accurate financial information
• Valid collateral ownership

6.2 Financial Covenants:
• Minimum net worth
• Debt service coverage
• Financial reporting
• Notice requirements`,
      },
      {
        title: "7. Conditions Precedent",
        content: `7.1 Required Documentation:
• Financial statements
• Tax returns
• Insurance certificates
• Corporate resolutions

7.2 Other Conditions:
• Regulatory approvals
• Third-party consents
• Due diligence completion
• [OTHER CONDITIONS]`,
      },
      {
        title: "8. Loan Administration",
        content: `8.1 Payments:
• Payment instructions
• Application of payments
• Payment allocation
• Payment verification

8.2 Statements and Notices:
• Statement frequency
• Notice requirements
• Address changes
• Communication methods`,
      },
      {
        title: "9. Assignment and Transfer",
        content: `9.1 By Lender:
• Right to assign
• Notice requirements
• Documentation

9.2 By Borrower:
• Transfer restrictions
• Assumption requirements
• Lender approval`,
      },
      {
        title: "10. General Provisions",
        content: `10.1 Governing Law:
This Agreement shall be governed by [JURISDICTION]

10.2 Amendments:
• Written requirement
• Approval process
• Documentation

10.3 Severability:
Invalid provisions shall not affect others

10.4 Entire Agreement:
This document represents complete understanding

10.5 Counterparts:
May be executed in multiple copies`,
      },
      {
        title: "11. Signatures",
        content: `IN WITNESS WHEREOF, the parties have executed this Loan Agreement as of the date first above written.

LENDER:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

BORROWER:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

NOTARY:
State of [STATE]
County of [COUNTY]
[NOTARY ACKNOWLEDGMENT]`,
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
