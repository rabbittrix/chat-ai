import { Template } from "@/types/templates";

export const promissoryNoteTemplate: Template = {
  id: "promissory-note-001",
  title: "Promissory Note",
  description:
    "A comprehensive promissory note template for documenting loans and debt obligations",
  category: "financial",
  tags: ["note", "debt", "loan", "finance", "payment"],
  content: `PROMISSORY NOTE

Date: [DATE]
Principal Amount: $[AMOUNT]
Interest Rate: [RATE]% per annum

FOR VALUE RECEIVED, [BORROWER NAME], located at [BORROWER ADDRESS] ("Borrower"), promises to pay to the order of [LENDER NAME], located at [LENDER ADDRESS] ("Lender"), the principal sum of [AMOUNT IN WORDS] Dollars ($[AMOUNT]), together with interest thereon from the date hereof until paid in full, on the terms and conditions set forth below.

1. PAYMENT TERMS

1.1. Principal and Interest
    a) The principal amount of this Note shall bear interest at a rate of [RATE]% per annum
    b) Interest shall be calculated on the basis of a 360-day year
    c) Interest shall accrue daily on the outstanding principal balance

1.2. Payment Schedule
    a) Regular Payments: [AMOUNT] payable [WEEKLY/MONTHLY/QUARTERLY]
    b) First Payment Due: [DATE]
    c) Final Payment Due: [DATE]
    d) Payment Method: [SPECIFY METHOD]

1.3. Application of Payments
    a) Order of Application:
       • First to accrued interest
       • Then to outstanding principal
       • Finally to any other amounts due
    b) Prepayment permitted without penalty

2. DEFAULT

2.1. Events of Default
    a) Failure to make any payment when due
    b) Breach of any provision of this Note
    c) Bankruptcy or insolvency of Borrower
    d) Death or incapacity of Borrower

2.2. Consequences of Default
    a) Acceleration of entire balance
    b) Default interest rate of [RATE]%
    c) Collection costs and attorney fees
    d) Exercise of all available legal remedies

3. SECURITY

3.1. Collateral [IF APPLICABLE]
    a) Description of security
    b) Location of collateral
    c) Maintenance requirements
    d) Insurance requirements

3.2. Additional Security
    a) Future security interests
    b) Substitute collateral
    c) Release conditions

4. GENERAL PROVISIONS

4.1. Waivers
    a) Presentment
    b) Demand
    c) Notice of dishonor
    d) Protest

4.2. Transfer and Assignment
    a) Note may be transferred by Lender
    b) Prior written notice required
    c) Binding on successors and assigns

4.3. Amendments
    a) Written modifications only
    b) Signed by both parties
    c) No oral modifications

4.4. Governing Law
This Note shall be governed by the laws of [JURISDICTION]

4.5. Severability
If any provision is found to be invalid, the remaining provisions shall continue in full force

5. SIGNATURES

IN WITNESS WHEREOF, Borrower has executed this Promissory Note as of the date first above written.

BORROWER:
Signature: _________________________
Name: [BORROWER NAME]
Date: [DATE]

LENDER:
Signature: _________________________
Name: [LENDER NAME]
Date: [DATE]

[NOTARY ACKNOWLEDGMENT IF REQUIRED]

State of [STATE]
County of [COUNTY]

On this [DATE], before me personally appeared [BORROWER NAME], known to me (or proved to me on the basis of satisfactory evidence) to be the person whose name is subscribed to the within instrument and acknowledged to me that he/she executed the same in his/her authorized capacity, and that by his/her signature on the instrument, the person, or the entity upon behalf of which the person acted, executed the instrument.

WITNESS my hand and official seal.

_________________________
Notary Public
My Commission Expires: [DATE]`,
};
