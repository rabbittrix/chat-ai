import { Template } from "@/types/templates";

const generateFinancialTemplate = (
  id: string,
  title: string,
  description: string,
  tags: string[],
  content: string
): Template => {
  return {
    id,
    title,
    description,
    category: "financial",
    tags,
    content: {
      sections: [
        {
          title: "Overview",
          content: `# ${title}\n\n${description}\n\n${content}`,
        },
        {
          title: "Terms and Conditions",
          content: `## Terms and Conditions\n\nThis document outlines the terms and conditions for ${title.toLowerCase()}.\n\n1. General Provisions\n2. Definitions\n3. Obligations\n4. Representations and Warranties\n5. Governing Law`,
        },
        {
          title: "Signatures",
          content: `## Signatures\n\nIN WITNESS WHEREOF, the parties have executed this ${title} as of the date first above written.\n\n[PARTY NAME]\nBy: _________________________\nName: [AUTHORIZED SIGNATORY NAME]\nTitle: [TITLE]\nDate: [DATE]`,
        },
      ],
    },
    metadata: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: "1.0.0",
      author: "System Generated",
    },
  };
};

// Generate templates for all financial documents
export const generateFinancialTemplates = () => {
  const templates = [
    {
      id: "bond-agreement-001",
      title: "Bond Agreement",
      description:
        "A comprehensive bond agreement template for debt securities",
      tags: ["bond", "debt", "securities", "finance"],
      content: `This Bond Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[ISSUER NAME], a [ENTITY TYPE] with its principal place of business at [ISSUER ADDRESS] ("Issuer")

and

[BONDHOLDER NAME], a [ENTITY TYPE] with its principal place of business at [BONDHOLDER ADDRESS] ("Bondholder")

1. BOND TERMS
   a) Principal Amount: $[AMOUNT]
   b) Interest Rate: [RATE]%
   c) Maturity Date: [DATE]
   d) Payment Terms: [TERMS]`,
    },
    {
      id: "convertible-note-agreement-001",
      title: "Convertible Note Agreement",
      description: "A template for convertible debt instruments",
      tags: ["convertible", "note", "debt", "equity"],
      content: `This Convertible Note Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[COMPANY NAME], a [ENTITY TYPE] with its principal place of business at [COMPANY ADDRESS] ("Company")

and

[INVESTOR NAME], a [ENTITY TYPE] with its principal place of business at [INVESTOR ADDRESS] ("Investor")

1. NOTE TERMS
   a) Principal Amount: $[AMOUNT]
   b) Interest Rate: [RATE]%
   c) Maturity Date: [DATE]
   d) Conversion Terms: [TERMS]`,
    },
    {
      id: "credit-agreement-001",
      title: "Credit Agreement",
      description: "A template for credit facilities and loans",
      tags: ["credit", "loan", "facility", "finance"],
      content: `This Credit Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[LENDER NAME], a [ENTITY TYPE] with its principal place of business at [LENDER ADDRESS] ("Lender")

and

[BORROWER NAME], a [ENTITY TYPE] with its principal place of business at [BORROWER ADDRESS] ("Borrower")

1. CREDIT TERMS
   a) Credit Limit: $[AMOUNT]
   b) Interest Rate: [RATE]%
   c) Term: [TERM]
   d) Repayment Terms: [TERMS]`,
    },
    {
      id: "investment-agreement-001",
      title: "Investment Agreement",
      description: "A template for investment transactions",
      tags: ["investment", "equity", "finance"],
      content: `This Investment Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[COMPANY NAME], a [ENTITY TYPE] with its principal place of business at [COMPANY ADDRESS] ("Company")

and

[INVESTOR NAME], a [ENTITY TYPE] with its principal place of business at [INVESTOR ADDRESS] ("Investor")

1. INVESTMENT TERMS
   a) Investment Amount: $[AMOUNT]
   b) Equity Percentage: [PERCENTAGE]%
   c) Valuation: $[AMOUNT]
   d) Terms: [TERMS]`,
    },
    {
      id: "merger-agreement-001",
      title: "Merger Agreement",
      description: "A template for business mergers and acquisitions",
      tags: ["merger", "acquisition", "business", "finance"],
      content: `This Merger Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[COMPANY A NAME], a [ENTITY TYPE] with its principal place of business at [COMPANY A ADDRESS] ("Company A")

and

[COMPANY B NAME], a [ENTITY TYPE] with its principal place of business at [COMPANY B ADDRESS] ("Company B")

1. MERGER TERMS
   a) Structure: [STRUCTURE]
   b) Consideration: [TERMS]
   c) Closing Conditions: [CONDITIONS]
   d) Timeline: [TIMELINE]`,
    },
    {
      id: "mortgage-agreement-001",
      title: "Mortgage Agreement",
      description: "A template for real estate mortgages",
      tags: ["mortgage", "real estate", "property", "finance"],
      content: `This Mortgage Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[MORTGAGOR NAME], a [ENTITY TYPE] with its principal place of business at [MORTGAGOR ADDRESS] ("Mortgagor")

and

[MORTGAGEE NAME], a [ENTITY TYPE] with its principal place of business at [MORTGAGEE ADDRESS] ("Mortgagee")

1. MORTGAGE TERMS
   a) Property Description: [DESCRIPTION]
   b) Loan Amount: $[AMOUNT]
   c) Interest Rate: [RATE]%
   d) Term: [TERM]`,
    },
    {
      id: "option-agreement-001",
      title: "Option Agreement",
      description: "A template for stock options and warrants",
      tags: ["option", "stock", "equity", "finance"],
      content: `This Option Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[COMPANY NAME], a [ENTITY TYPE] with its principal place of business at [COMPANY ADDRESS] ("Company")

and

[OPTIONEE NAME], a [ENTITY TYPE] with its principal place of business at [OPTIONEE ADDRESS] ("Optionee")

1. OPTION TERMS
   a) Number of Shares: [NUMBER]
   b) Exercise Price: $[PRICE]
   c) Vesting Schedule: [SCHEDULE]
   d) Expiration Date: [DATE]`,
    },
    {
      id: "partnership-agreement-001",
      title: "Partnership Agreement",
      description: "A template for business partnerships",
      tags: ["partnership", "business", "finance"],
      content: `This Partnership Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[PARTNER A NAME], a [ENTITY TYPE] with its principal place of business at [PARTNER A ADDRESS] ("Partner A")

and

[PARTNER B NAME], a [ENTITY TYPE] with its principal place of business at [PARTNER B ADDRESS] ("Partner B")

1. PARTNERSHIP TERMS
   a) Business Purpose: [PURPOSE]
   b) Capital Contributions: [TERMS]
   c) Profit Sharing: [TERMS]
   d) Management: [TERMS]`,
    },
    {
      id: "pledge-agreement-001",
      title: "Pledge Agreement",
      description: "A template for asset pledges and collateral",
      tags: ["pledge", "collateral", "security", "finance"],
      content: `This Pledge Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[PLEDGOR NAME], a [ENTITY TYPE] with its principal place of business at [PLEDGOR ADDRESS] ("Pledgor")

and

[PLEDGEE NAME], a [ENTITY TYPE] with its principal place of business at [PLEDGEE ADDRESS] ("Pledgee")

1. PLEDGE TERMS
   a) Collateral Description: [DESCRIPTION]
   b) Secured Obligations: [TERMS]
   c) Release Conditions: [CONDITIONS]
   d) Default Terms: [TERMS]`,
    },
    {
      id: "promissory-note-001",
      title: "Promissory Note",
      description: "A template for promissory notes and loans",
      tags: ["promissory", "note", "loan", "finance"],
      content: `This Promissory Note (the "Note") is made and entered into on [DATE] by and between:

[MAKER NAME], a [ENTITY TYPE] with its principal place of business at [MAKER ADDRESS] ("Maker")

and

[PAYEE NAME], a [ENTITY TYPE] with its principal place of business at [PAYEE ADDRESS] ("Payee")

1. NOTE TERMS
   a) Principal Amount: $[AMOUNT]
   b) Interest Rate: [RATE]%
   c) Maturity Date: [DATE]
   d) Payment Terms: [TERMS]`,
    },
    {
      id: "security-agreement-001",
      title: "Security Agreement",
      description: "A template for secured transactions",
      tags: ["security", "collateral", "finance"],
      content: `This Security Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[DEBTOR NAME], a [ENTITY TYPE] with its principal place of business at [DEBTOR ADDRESS] ("Debtor")

and

[SECURED PARTY NAME], a [ENTITY TYPE] with its principal place of business at [SECURED PARTY ADDRESS] ("Secured Party")

1. SECURITY TERMS
   a) Collateral Description: [DESCRIPTION]
   b) Secured Obligations: [TERMS]
   c) Default Terms: [TERMS]
   d) Remedies: [TERMS]`,
    },
    {
      id: "shareholders-agreement-001",
      title: "Shareholders Agreement",
      description: "A template for shareholder arrangements",
      tags: ["shareholders", "equity", "business", "finance"],
      content: `This Shareholders Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[SHAREHOLDER A NAME], a [ENTITY TYPE] with its principal place of business at [SHAREHOLDER A ADDRESS] ("Shareholder A")

and

[SHAREHOLDER B NAME], a [ENTITY TYPE] with its principal place of business at [SHAREHOLDER B ADDRESS] ("Shareholder B")

1. SHAREHOLDER TERMS
   a) Share Ownership: [TERMS]
   b) Voting Rights: [TERMS]
   c) Transfer Restrictions: [TERMS]
   d) Management: [TERMS]`,
    },
    {
      id: "stock-purchase-agreement-001",
      title: "Stock Purchase Agreement",
      description: "A template for stock purchases",
      tags: ["stock", "purchase", "equity", "finance"],
      content: `This Stock Purchase Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[SELLER NAME], a [ENTITY TYPE] with its principal place of business at [SELLER ADDRESS] ("Seller")

and

[BUYER NAME], a [ENTITY TYPE] with its principal place of business at [BUYER ADDRESS] ("Buyer")

1. PURCHASE TERMS
   a) Number of Shares: [NUMBER]
   b) Purchase Price: $[PRICE]
   c) Closing Date: [DATE]
   d) Conditions: [CONDITIONS]`,
    },
    {
      id: "subscription-agreement-001",
      title: "Subscription Agreement",
      description: "A template for investment subscriptions",
      tags: ["subscription", "investment", "equity", "finance"],
      content: `This Subscription Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[COMPANY NAME], a [ENTITY TYPE] with its principal place of business at [COMPANY ADDRESS] ("Company")

and

[INVESTOR NAME], a [ENTITY TYPE] with its principal place of business at [INVESTOR ADDRESS] ("Investor")

1. SUBSCRIPTION TERMS
   a) Investment Amount: $[AMOUNT]
   b) Securities: [TERMS]
   c) Closing Date: [DATE]
   d) Conditions: [CONDITIONS]`,
    },
    {
      id: "venture-capital-term-sheet-001",
      title: "Venture Capital Term Sheet",
      description: "A template for venture capital investments",
      tags: ["venture capital", "investment", "startup", "finance"],
      content: `This Venture Capital Term Sheet (the "Term Sheet") is made and entered into on [DATE] by and between:

[COMPANY NAME], a [ENTITY TYPE] with its principal place of business at [COMPANY ADDRESS] ("Company")

and

[INVESTOR NAME], a [ENTITY TYPE] with its principal place of business at [INVESTOR ADDRESS] ("Investor")

1. INVESTMENT TERMS
   a) Investment Amount: $[AMOUNT]
   b) Valuation: $[AMOUNT]
   c) Security Type: [TYPE]
   d) Key Terms: [TERMS]`,
    },
    {
      id: "warrant-agreement-001",
      title: "Warrant Agreement",
      description: "A template for stock warrants",
      tags: ["warrant", "stock", "equity", "finance"],
      content: `This Warrant Agreement (the "Agreement") is made and entered into on [DATE] by and between:

[COMPANY NAME], a [ENTITY TYPE] with its principal place of business at [COMPANY ADDRESS] ("Company")

and

[WARRANT HOLDER NAME], a [ENTITY TYPE] with its principal place of business at [WARRANT HOLDER ADDRESS] ("Warrant Holder")

1. WARRANT TERMS
   a) Number of Shares: [NUMBER]
   b) Exercise Price: $[PRICE]
   c) Expiration Date: [DATE]
   d) Exercise Terms: [TERMS]`,
    },
  ];

  return templates.map((template) =>
    generateFinancialTemplate(
      template.id,
      template.title,
      template.description,
      template.tags,
      template.content
    )
  );
};

// Export the generated templates
export const financialTemplates = generateFinancialTemplates();
