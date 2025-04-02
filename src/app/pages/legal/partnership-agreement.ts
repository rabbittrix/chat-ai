import { Template } from "@/types/templates";

export const partnershipAgreementTemplate: Template = {
  id: "partnership-agreement-001",
  title: "Partnership Agreement",
  description:
    "A comprehensive partnership agreement template for business partnerships and joint ventures",
  category: "legal",
  tags: ["partnership", "business", "legal", "joint venture", "collaboration"],
  content: {
    sections: [
      {
        title: "Agreement Title",
        content: `PARTNERSHIP AGREEMENT

This Partnership Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[PARTNER 1 NAME], located at [ADDRESS] ("Partner 1")
and
[PARTNER 2 NAME], located at [ADDRESS] ("Partner 2")
[ADD ADDITIONAL PARTNERS AS NEEDED]

Collectively referred to as the "Partners"`,
      },
      {
        title: "1. Partnership Formation",
        content: `1.1 Name and Purpose:
• Partnership Name: [PARTNERSHIP NAME]
• Business Purpose: [DETAILED DESCRIPTION]
• Principal Place of Business: [ADDRESS]

1.2 Term:
• Commencement Date: [DATE]
• Duration: [SPECIFY TERM OR "UNTIL DISSOLVED"]

1.3 Business Type:
[SPECIFY TYPE: GENERAL, LIMITED, LLP, ETC.]`,
      },
      {
        title: "2. Capital Contributions",
        content: `2.1 Initial Contributions:
Partner 1: [AMOUNT/ASSETS]
Partner 2: [AMOUNT/ASSETS]
[ADDITIONAL PARTNERS' CONTRIBUTIONS]

2.2 Additional Contributions:
• Process for requesting
• Requirements
• Consequences of failure to contribute

2.3 Capital Accounts:
• Maintenance requirements
• Accounting methods
• Adjustments`,
      },
      {
        title: "3. Profit and Loss Allocation",
        content: `3.1 Profit Distribution:
• Distribution formula: [SPECIFY PERCENTAGES/METHOD]
• Frequency of distributions
• Reinvestment provisions

3.2 Loss Allocation:
• Loss sharing formula
• Liability limitations
• Capital account impacts

3.3 Draws and Salaries:
• Partner compensation
• Draw limitations
• Approval process`,
      },
      {
        title: "4. Management and Control",
        content: `4.1 Management Structure:
• Decision-making process
• Voting rights
• Management responsibilities

4.2 Partner Duties:
• Time commitment
• Non-compete obligations
• Confidentiality requirements

4.3 Meetings:
• Frequency
• Notice requirements
• Quorum
• Voting procedures`,
      },
      {
        title: "5. New Partners and Transfers",
        content: `5.1 Admission of New Partners:
• Approval requirements
• Capital contribution requirements
• Documentation

5.2 Transfer of Partnership Interest:
• Right of first refusal
• Transfer restrictions
• Valuation method
• Required approvals`,
      },
      {
        title: "6. Partner Withdrawal or Death",
        content: `6.1 Voluntary Withdrawal:
• Notice requirements
• Buyout terms
• Continuing obligations

6.2 Death or Incapacity:
• Succession rights
• Purchase options
• Payment terms

6.3 Retirement:
• Retirement notice
• Retirement benefits
• Transition process`,
      },
      {
        title: "7. Dissolution and Liquidation",
        content: `7.1 Events of Dissolution:
• Voluntary dissolution
• Automatic dissolution events
• Court-ordered dissolution

7.2 Liquidation Process:
• Asset distribution
• Debt payment
• Final accounting
• Partner distributions`,
      },
      {
        title: "8. Financial Management",
        content: `8.1 Banking:
• Account management
• Signing authority
• Investment policies

8.2 Accounting:
• Record keeping
• Reporting requirements
• Audit rights
• Tax matters

8.3 Fiscal Year:
[SPECIFY FISCAL YEAR]`,
      },
      {
        title: "9. Dispute Resolution",
        content: `9.1 Internal Resolution:
• Negotiation requirement
• Mediation process
• Partner meetings

9.2 External Resolution:
• Arbitration provisions
• Jurisdiction
• Governing law`,
      },
      {
        title: "10. General Provisions",
        content: `10.1 Amendments:
• Amendment process
• Voting requirements

10.2 Notices:
• Required form
• Delivery methods
• Address for notices

10.3 Entire Agreement

10.4 Severability

10.5 Governing Law: [JURISDICTION]`,
      },
      {
        title: "11. Signatures",
        content: `IN WITNESS WHEREOF, the Partners have executed this Partnership Agreement as of the date first above written.

PARTNER 1:
Name: _______________________
Date: _______________________
Signature: ___________________

PARTNER 2:
Name: _______________________
Date: _______________________
Signature: ___________________

[ADDITIONAL PARTNER SIGNATURES AS NEEDED]`,
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
