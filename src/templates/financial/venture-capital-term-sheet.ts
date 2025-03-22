import { Template } from "@/types/templates";

export const ventureCapitalTermSheetTemplate: Template = {
  id: "vc-term-sheet-001",
  title: "Venture Capital Term Sheet",
  description:
    "A comprehensive term sheet template for venture capital investments with standard terms and conditions",
  category: "financial",
  tags: ["venture capital", "investment", "startup", "financing", "term sheet"],
  content: {
    sections: [
      {
        title: "Transaction Overview",
        content: `TERM SHEET
For Series [A/B/C] Preferred Stock Financing of
[COMPANY NAME, INC.]
[DATE]

This Term Sheet summarizes the principal terms of the Series [A/B/C] Preferred Stock Financing of [Company Name, Inc.], a [State] corporation (the "Company").`,
      },
      {
        title: "Offering Terms",
        content: `Security: Series [A/B/C] Preferred Stock

Amount of Financing: $[Amount]

Pre-Money Valuation: $[Amount]

Price Per Share: $[Amount] (the "Original Purchase Price")

Investment Amount: $[Lead Investor Amount] from [Lead Investor Name]
                  $[Other Investors Amount] from other investors`,
      },
      {
        title: "Capitalization",
        content: `Fully-Diluted Pre-Money Capitalization: [Number] shares
Post-Money Capitalization: [Number] shares

The Company's fully-diluted capitalization is set forth on Exhibit A.`,
      },
      {
        title: "Dividends",
        content: `Dividends will be paid on the Series [A/B/C] Preferred on an as-converted basis when, as, and if paid on the Common Stock.

[Annual Rate]% non-cumulative dividends will be paid prior to any dividend on Common Stock.`,
      },
      {
        title: "Liquidation Preference",
        content: `In the event of any liquidation, dissolution or winding up of the Company, the proceeds shall be paid as follows:

First: To Series [A/B/C] Preferred, an amount per share equal to [1x-2x] the Original Purchase Price, plus declared and unpaid dividends.

Thereafter: The balance of any proceeds shall be distributed pro rata to holders of Common Stock.`,
      },
      {
        title: "Voting Rights",
        content: `Each share of Series [A/B/C] Preferred will have the right to a number of votes equal to the number of shares of Common Stock issuable upon conversion of each such share of Series [A/B/C] Preferred.

Voting together with the Common Stock on all matters except as specifically noted herein or as required by law.`,
      },
      {
        title: "Protective Provisions",
        content: `So long as [X]% of the Series [A/B/C] Preferred is outstanding, consent of the holders of at least [X]% of the Series [A/B/C] Preferred shall be required for any action that:

• Changes the rights, preferences or privileges of the Series [A/B/C] Preferred
• Creates any new class of shares having rights superior to the Series [A/B/C] Preferred
• Increases or decreases the authorized number of shares
• Results in the redemption or repurchase of any shares (other than pursuant to employee agreements)
• Results in any merger, acquisition, or sale of the Company
• Amends the Certificate of Incorporation or Bylaws
• Increases or decreases the authorized size of the Board`,
      },
      {
        title: "Conversion",
        content: `The Series [A/B/C] Preferred may be converted at any time into shares of Common Stock at the option of the holder.

Initial conversion rate of 1:1, subject to adjustment as provided below.

Automatic conversion into Common Stock in the event of:
• IPO with a price of at least $[X] per share and gross proceeds to the Company of not less than $[X] million
• Written consent of holders of at least [X]% of Series [A/B/C] Preferred`,
      },
    ],
  },
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: "1.0.0",
    author: "AI Financial Document Builder",
  },
};
