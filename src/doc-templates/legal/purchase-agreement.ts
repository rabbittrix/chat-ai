import { Template } from "@/types/templates";

export const purchaseAgreementTemplate: Template = {
  id: "purchase-agreement-001",
  title: "Purchase Agreement",
  description:
    "A comprehensive purchase agreement template for business transactions and asset sales",
  category: "legal",
  tags: ["purchase", "sales", "business", "contract", "transaction"],
  content: {
    sections: [
      {
        title: "Agreement Title",
        content: `PURCHASE AGREEMENT

This Purchase Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[SELLER NAME], located at [ADDRESS] ("Seller")
and
[BUYER NAME], located at [ADDRESS] ("Buyer")`,
      },
      {
        title: "1. Purchase and Sale",
        content: `1.1 Assets/Items Being Sold:
[DETAILED DESCRIPTION OF ITEMS/ASSETS]
• Item/Asset 1: [DESCRIPTION, QUANTITY, SPECIFICATIONS]
• Item/Asset 2: [DESCRIPTION, QUANTITY, SPECIFICATIONS]
• [ADDITIONAL ITEMS/ASSETS]

1.2 Included Components:
• All associated rights and licenses
• Documentation and records
• Warranties and guarantees
• [OTHER INCLUDED ITEMS]`,
      },
      {
        title: "2. Purchase Price and Payment",
        content: `2.1 Purchase Price:
Total purchase price: [AMOUNT]

2.2 Payment Terms:
• Initial deposit: [AMOUNT/PERCENTAGE]
• Payment schedule: [SCHEDULE DETAILS]
• Final payment: [AMOUNT/TERMS]
• Payment method: [METHOD]

2.3 Escrow Arrangements:
[ESCROW TERMS IF APPLICABLE]`,
      },
      {
        title: "3. Closing",
        content: `3.1 Closing Date:
The transaction shall close on [DATE]

3.2 Closing Deliverables:
Seller shall deliver:
• Bill of sale
• Transfer documents
• Warranties and guarantees
• [OTHER DOCUMENTS]

Buyer shall deliver:
• Purchase price payment
• [OTHER REQUIREMENTS]`,
      },
      {
        title: "4. Representations and Warranties",
        content: `4.1 Seller's Representations:
• Title and ownership
• Authority to sell
• No encumbrances
• Condition of assets
• Compliance with laws
• [OTHER WARRANTIES]

4.2 Buyer's Representations:
• Authority to purchase
• Financial capability
• [OTHER WARRANTIES]`,
      },
      {
        title: "5. Conditions Precedent",
        content: `5.1 Seller's Conditions:
• Receipt of payment
• Required approvals
• [OTHER CONDITIONS]

5.2 Buyer's Conditions:
• Satisfactory inspection
• Due diligence completion
• Required approvals
• [OTHER CONDITIONS]`,
      },
      {
        title: "6. Due Diligence",
        content: `6.1 Inspection Period:
• Duration: [PERIOD]
• Access rights
• Documentation review

6.2 Due Diligence Items:
• Physical inspection
• Document review
• Title search
• [OTHER ITEMS]`,
      },
      {
        title: "7. Risk of Loss",
        content: `7.1 Prior to Closing:
[TERMS FOR RISK ALLOCATION]

7.2 Insurance:
[INSURANCE REQUIREMENTS]

7.3 Damage or Loss:
[PROCEDURES FOR HANDLING DAMAGE]`,
      },
      {
        title: "8. Indemnification",
        content: `8.1 Seller's Indemnification:
• Scope of indemnity
• Limitations
• Process

8.2 Buyer's Indemnification:
• Scope of indemnity
• Limitations
• Process`,
      },
      {
        title: "9. Default and Remedies",
        content: `9.1 Seller's Default:
• Definition of default
• Buyer's remedies
• Cure period

9.2 Buyer's Default:
• Definition of default
• Seller's remedies
• Cure period`,
      },
      {
        title: "10. General Provisions",
        content: `10.1 Notices:
[NOTICE REQUIREMENTS]

10.2 Governing Law:
This Agreement shall be governed by the laws of [JURISDICTION]

10.3 Assignment:
[ASSIGNMENT TERMS]

10.4 Entire Agreement

10.5 Amendments

10.6 Severability`,
      },
      {
        title: "11. Signatures",
        content: `IN WITNESS WHEREOF, the parties have executed this Purchase Agreement as of the date first above written.

SELLER:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

BUYER:
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
