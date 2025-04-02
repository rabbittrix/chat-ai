import { Template } from "@/types/templates";

export const commercialLeaseAgreementTemplate: Template = {
  id: "commercial-lease-agreement-001",
  title: "Commercial Lease Agreement",
  description:
    "A comprehensive commercial lease agreement template for business properties",
  category: "legal",
  tags: ["lease", "real estate", "commercial", "property", "business"],
  content: {
    sections: [
      {
        title: "Agreement Title",
        content: `COMMERCIAL LEASE AGREEMENT

This Commercial Lease Agreement (the "Lease") is made and entered into on [DATE] by and between:

[LANDLORD NAME], located at [ADDRESS] ("Landlord")
and
[TENANT NAME], located at [ADDRESS] ("Tenant")`,
      },
      {
        title: "1. Premises",
        content: `1.1 Property Description:
• Address: [PROPERTY ADDRESS]
• Square Footage: [SQUARE FEET]
• Unit/Suite Number: [UNIT NUMBER]
• Included Facilities: [DETAILS]

1.2 Permitted Use:
The Premises shall be used solely for [SPECIFIED BUSINESS PURPOSE] and related activities.`,
      },
      {
        title: "2. Lease Term",
        content: `2.1 Initial Term:
• Commencement Date: [START DATE]
• Expiration Date: [END DATE]

2.2 Renewal Options:
• Number of renewal terms: [NUMBER]
• Length of each renewal term: [DURATION]
• Notice required for renewal: [NOTICE PERIOD]

2.3 Early Access:
Terms for tenant improvements or setup: [DETAILS]`,
      },
      {
        title: "3. Rent and Other Charges",
        content: `3.1 Base Rent:
• Monthly Amount: [AMOUNT]
• Due Date: [DATE]
• Payment Method: [METHOD]

3.2 Security Deposit:
• Amount: [AMOUNT]
• Terms for return: [TERMS]

3.3 Additional Rent:
• Common Area Maintenance (CAM): [DETAILS]
• Property Taxes: [ALLOCATION]
• Insurance: [REQUIREMENTS]
• Utilities: [RESPONSIBILITY]`,
      },
      {
        title: "4. Maintenance and Repairs",
        content: `4.1 Landlord's Responsibilities:
• Structural components
• Common areas
• Building systems
• [OTHER RESPONSIBILITIES]

4.2 Tenant's Responsibilities:
• Interior maintenance
• Minor repairs
• Janitorial services
• [OTHER RESPONSIBILITIES]

4.3 Alterations and Improvements:
• Approval requirements
• Restoration obligations
• Ownership of improvements`,
      },
      {
        title: "5. Insurance and Liability",
        content: `5.1 Required Insurance:
Tenant shall maintain:
• Commercial General Liability: [COVERAGE AMOUNT]
• Property Insurance: [COVERAGE AMOUNT]
• Business Interruption Insurance
• Worker's Compensation Insurance

5.2 Indemnification:
• Tenant's obligations
• Landlord's obligations
• Mutual responsibilities`,
      },
      {
        title: "6. Assignment and Subletting",
        content: `6.1 Restrictions:
• Landlord's consent requirements
• Permitted transfers
• Prohibited transfers

6.2 Process:
• Application requirements
• Review period
• Fees and expenses
• Documentation`,
      },
      {
        title: "7. Default and Remedies",
        content: `7.1 Events of Default:
• Non-payment of rent
• Breach of covenants
• Bankruptcy or insolvency
• Abandonment

7.2 Landlord's Remedies:
• Termination rights
• Re-entry rights
• Damages
• Other legal remedies

7.3 Cure Periods:
• Monetary defaults: [PERIOD]
• Non-monetary defaults: [PERIOD]`,
      },
      {
        title: "8. Property Access and Security",
        content: `8.1 Tenant's Access:
• Business hours
• After-hours access
• Parking rights
• Security systems

8.2 Landlord's Access:
• Inspection rights
• Maintenance access
• Emergency entry
• Showing to prospective tenants`,
      },
      {
        title: "9. Surrender and Holding Over",
        content: `9.1 Surrender Conditions:
• Required condition
• Removal of property
• Restoration requirements

9.2 Holding Over:
• Monthly rent rate
• Other terms
• Landlord's rights`,
      },
      {
        title: "10. General Provisions",
        content: `10.1 Notices:
• Required form
• Delivery methods
• Address for notices

10.2 Governing Law: [JURISDICTION]

10.3 Entire Agreement

10.4 Amendments

10.5 Severability

10.6 Recording`,
      },
      {
        title: "11. Signatures",
        content: `IN WITNESS WHEREOF, the parties have executed this Commercial Lease Agreement as of the date first above written.

LANDLORD:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

TENANT:
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
