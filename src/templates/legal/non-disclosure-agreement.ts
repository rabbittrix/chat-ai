import { Template } from "@/types/templates";

export const nonDisclosureAgreementTemplate: Template = {
  id: "non-disclosure-agreement-001",
  title: "Non-Disclosure Agreement (NDA)",
  description:
    "A comprehensive non-disclosure agreement template for protecting confidential information in business relationships",
  category: "legal",
  tags: ["confidentiality", "business", "legal", "protection", "privacy"],
  content: {
    sections: [
      {
        title: "Agreement Title",
        content: `NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement (the "Agreement") is entered into on [DATE] by and between:

[DISCLOSING PARTY NAME], located at [ADDRESS] ("Disclosing Party")
and
[RECEIVING PARTY NAME], located at [ADDRESS] ("Receiving Party")`,
      },
      {
        title: "1. Definition of Confidential Information",
        content: `"Confidential Information" means any and all non-public information, including but not limited to:

• Trade secrets and proprietary information
• Technical data and know-how
• Business plans and strategies
• Customer and supplier lists
• Financial information and projections
• Product designs and specifications
• Marketing plans and research
• Employee and personnel information
• Software and technology information
• Any other information marked as "confidential" or "proprietary"`,
      },
      {
        title: "2. Obligations of Receiving Party",
        content: `The Receiving Party agrees to:

a) Maintain the confidentiality of all Confidential Information
b) Use Confidential Information solely for the purpose of [SPECIFIED PURPOSE]
c) Not disclose Confidential Information to any third party without prior written consent
d) Take reasonable security measures to prevent unauthorized disclosure
e) Notify the Disclosing Party immediately upon discovery of any unauthorized use or disclosure
f) Return or destroy all Confidential Information upon request`,
      },
      {
        title: "3. Exclusions",
        content: `This Agreement does not apply to information that:

a) Was publicly known at the time of disclosure
b) Becomes publicly known through no fault of the Receiving Party
c) Was rightfully known by the Receiving Party before disclosure
d) Is independently developed by the Receiving Party
e) Is disclosed under operation of law or legal process`,
      },
      {
        title: "4. Term and Termination",
        content: `4.1 Term: This Agreement shall remain in effect for [DURATION] from the date of execution.

4.2 Survival: The obligations regarding Confidential Information shall survive the termination of this Agreement for a period of [SURVIVAL PERIOD].`,
      },
      {
        title: "5. Remedies",
        content: `5.1 The Receiving Party acknowledges that monetary damages may be inadequate for any breach of this Agreement.

5.2 The Disclosing Party shall be entitled to injunctive relief in addition to all other remedies available at law or in equity.`,
      },
      {
        title: "6. General Provisions",
        content: `6.1 Governing Law: This Agreement shall be governed by the laws of [JURISDICTION].

6.2 Assignment: This Agreement may not be assigned without prior written consent.

6.3 Modification: Any modifications must be in writing and signed by both parties.

6.4 Severability: If any provision is found invalid, the remainder shall remain in effect.`,
      },
      {
        title: "7. Signatures",
        content: `IN WITNESS WHEREOF, the parties have executed this Non-Disclosure Agreement as of the date first above written.

DISCLOSING PARTY:
Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

RECEIVING PARTY:
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
