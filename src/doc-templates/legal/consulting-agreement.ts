import { Template } from "@/types/templates";

export const consultingAgreementTemplate: Template = {
  id: "consulting-agreement-001",
  title: "Consulting Agreement",
  description:
    "A comprehensive agreement template for consulting services, outlining the terms and conditions between a consultant and client.",
  category: "legal",
  tags: ["consulting", "services", "professional", "business", "legal"],
  content: `CONSULTING AGREEMENT

This Consulting Agreement (the "Agreement") is made effective as of [DATE] by and between:

[CLIENT NAME], a [ENTITY TYPE] with its principal place of business at [CLIENT ADDRESS] (hereinafter referred to as the "Client")

and

[CONSULTANT NAME], a [ENTITY TYPE] with its principal place of business at [CONSULTANT ADDRESS] (hereinafter referred to as the "Consultant").

1. ENGAGEMENT OF SERVICES

1.1. The Client hereby engages the Consultant, and the Consultant hereby accepts the engagement, to provide consulting services to the Client on the terms and conditions set forth in this Agreement.

1.2. Scope of Services. The Consultant shall provide the following services (the "Services"):
    a) [DETAILED DESCRIPTION OF SERVICE 1]
    b) [DETAILED DESCRIPTION OF SERVICE 2]
    c) [DETAILED DESCRIPTION OF SERVICE 3]
    d) Additional services as mutually agreed upon in writing by both parties

2. TERM AND TERMINATION

2.1. Term. This Agreement shall commence on [START DATE] and shall continue until [END DATE], unless terminated earlier in accordance with the provisions of this Agreement.

2.2. Termination
    a) Either party may terminate this Agreement upon [NUMBER] days' written notice to the other party.
    b) Either party may terminate this Agreement immediately upon written notice in the event of a material breach by the other party.
    c) Upon termination, the Consultant shall be compensated for Services performed up to the effective date of termination.

3. COMPENSATION AND PAYMENT

3.1. Fees. The Client shall pay the Consultant:
    a) A fee of [AMOUNT] per [HOUR/DAY/MONTH]
    b) [DESCRIPTION OF ANY ADDITIONAL FEES OR BONUSES]

3.2. Expenses. The Client shall reimburse the Consultant for reasonable expenses incurred in connection with the Services, provided that:
    a) Such expenses are pre-approved in writing by the Client
    b) The Consultant provides appropriate documentation of such expenses

3.3. Payment Terms
    a) The Consultant shall submit invoices [PAYMENT FREQUENCY]
    b) Payment shall be due within [NUMBER] days of receipt of invoice
    c) Late payments shall bear interest at [PERCENTAGE]% per month

4. INDEPENDENT CONTRACTOR STATUS

4.1. The Consultant is an independent contractor and not an employee of the Client.

4.2. The Consultant shall be responsible for:
    a) All taxes and withholdings related to compensation received
    b) Providing their own equipment and materials
    c) Maintaining their own insurance coverage

5. CONFIDENTIALITY

5.1. Confidential Information. The Consultant agrees to maintain the confidentiality of:
    a) Client's proprietary information
    b) Trade secrets
    c) Business methods and practices
    d) Any other confidential information disclosed during the engagement

5.2. Non-Disclosure
    a) The Consultant shall not disclose confidential information to any third party
    b) The Consultant shall use confidential information only for the purpose of providing the Services
    c) These obligations shall survive the termination of this Agreement

6. INTELLECTUAL PROPERTY

6.1. Ownership
    a) All work product created by the Consultant in performing the Services shall be the property of the Client
    b) The Consultant hereby assigns all rights, title, and interest in such work product to the Client

6.2. Pre-Existing Materials
    a) The Consultant retains ownership of pre-existing materials
    b) The Client is granted a non-exclusive license to use such materials as part of the Services

7. WARRANTIES AND REPRESENTATIONS

7.1. The Consultant warrants that:
    a) They have the right and authority to enter into this Agreement
    b) The Services will be performed in a professional manner
    c) The Services will conform to the requirements specified in this Agreement

8. LIMITATION OF LIABILITY

8.1. Neither party shall be liable for:
    a) Any indirect, incidental, or consequential damages
    b) Lost profits or business interruption
    c) Damages exceeding the total amount paid under this Agreement

9. NON-SOLICITATION

9.1. During the term of this Agreement and for [NUMBER] months thereafter, neither party shall:
    a) Solicit or hire the other party's employees
    b) Solicit the other party's clients or customers

10. GENERAL PROVISIONS

10.1. Governing Law
This Agreement shall be governed by and construed in accordance with the laws of [JURISDICTION].

10.2. Dispute Resolution
Any disputes arising from this Agreement shall be resolved through:
    a) Good faith negotiation
    b) Mediation
    c) Binding arbitration in [JURISDICTION]

10.3. Assignment
Neither party may assign this Agreement without the prior written consent of the other party.

10.4. Entire Agreement
This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements and understandings.

10.5. Amendments
This Agreement may only be amended by a written document signed by both parties.

10.6. Severability
If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

IN WITNESS WHEREOF, the parties have executed this Consulting Agreement as of the date first above written.

CLIENT:
[CLIENT NAME]
By: _________________________
Name: [AUTHORIZED SIGNATORY NAME]
Title: [TITLE]
Date: [DATE]

CONSULTANT:
[CONSULTANT NAME]
By: _________________________
Name: [AUTHORIZED SIGNATORY NAME]
Title: [TITLE]
Date: [DATE]`,
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: "1.0.0",
    author: "AI Legal Document Builder",
  },
};
