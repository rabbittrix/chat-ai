import { Template, TemplateCollection } from "@/types/templates";
import { softwareEngineerTemplate } from "./resume/software-engineer";
import { marketingSpecialistTemplate } from "./resume/marketing-specialist";
import { dataScientistTemplate } from "./resume/data-scientist";
import { productManagerTemplate } from "./resume/product-manager";
import { uxUiDesignerTemplate } from "./resume/ux-ui-designer";
import { salesExecutiveTemplate } from "./resume/sales-executive";
import { projectManagerTemplate } from "./resume/project-manager";
import { businessAnalystTemplate } from "./resume/business-analyst";
import { devopsEngineerTemplate } from "./resume/devops-engineer";
import { frontendDeveloperTemplate } from "./resume/frontend-developer";
import { backendDeveloperTemplate } from "./resume/backend-developer";
import { serviceAgreementTemplate } from "./legal/service-agreement";
import { businessPlanTemplate } from "./business/business-plan";
import { nonDisclosureAgreementTemplate } from "./legal/non-disclosure-agreement";
import { employmentAgreementTemplate } from "./legal/employment-agreement";
import { commercialLeaseAgreementTemplate } from "./legal/commercial-lease-agreement";
import { purchaseAgreementTemplate } from "./legal/purchase-agreement";
import { independentContractorAgreementTemplate } from "./legal/independent-contractor-agreement";
import { softwareLicenseAgreementTemplate } from "./legal/software-license-agreement";
import { termsOfServiceTemplate } from "./legal/terms-of-service";
import { privacyPolicyTemplate } from "./legal/privacy-policy";
import { loanAgreementTemplate } from "./legal/loan-agreement";
import { consultingAgreementTemplate } from "./legal/consulting-agreement";
import { distributionAgreementTemplate } from "./legal/distribution-agreement";
import { franchiseAgreementTemplate } from "./legal/franchise-agreement";
import { jointVentureAgreementTemplate } from "./legal/joint-venture-agreement";
import { financialTemplates } from "./financial/generate-templates";

// Organize templates by category
export const templates: TemplateCollection = {
  resume: [
    softwareEngineerTemplate,
    marketingSpecialistTemplate,
    dataScientistTemplate,
    productManagerTemplate,
    uxUiDesignerTemplate,
    salesExecutiveTemplate,
    projectManagerTemplate,
    businessAnalystTemplate,
    devopsEngineerTemplate,
    frontendDeveloperTemplate,
    backendDeveloperTemplate,
    // TODO: Add more resume templates
    // Próximos templates a serem criados:
    // - Full Stack Developer
    // - Systems Administrator
    // - HR Manager
    // - Financial Analyst
    // - Management Consultant
    // - Content Writer
    // - Graphic Designer
    // - Network Engineer
    // - Cloud Architect
    // - Data Analyst
    // - Digital Marketing Manager
    // - Operations Manager
    // - Research Scientist
    // - Quality Assurance Engineer
    // - Business Development Manager
    // ... até completar 50
  ],
  legal: [
    nonDisclosureAgreementTemplate,
    serviceAgreementTemplate,
    employmentAgreementTemplate,
    commercialLeaseAgreementTemplate,
    purchaseAgreementTemplate,
    independentContractorAgreementTemplate,
    softwareLicenseAgreementTemplate,
    termsOfServiceTemplate,
    privacyPolicyTemplate,
    loanAgreementTemplate,
    consultingAgreementTemplate,
    distributionAgreementTemplate,
    franchiseAgreementTemplate,
    jointVentureAgreementTemplate,
    // TODO: Add more legal templates
    // Sugestões para templates legais:
    // - Manufacturing Agreement
    // - Merger Agreement
    // - Trademark License
    // - Patent License
    // - Copyright Assignment
    // - Equipment Lease
    // - Real Estate Purchase Agreement
    // - Construction Contract
    // ... até completar 50
  ],
  financial: financialTemplates,
  business: [
    businessPlanTemplate,
    // TODO: Add more business templates
    // Sugestões para templates de negócios:
    // - Executive Summary
    // - Marketing Plan
    // - Project Proposal
    // - Company Profile
    // - Business Case
    // - SWOT Analysis
    // - Meeting Minutes
    // - Business Report
    // - Strategic Plan
    // - Operational Plan
    // ... até completar 50
  ],
};

// Helper functions
export const getAllTemplates = (): Template[] => {
  return Object.values(templates).flat();
};

export const getTemplatesByCategory = (category: string): Template[] => {
  return templates[category] || [];
};

export const getTemplateById = (id: string): Template | undefined => {
  return getAllTemplates().find((template) => template.id === id);
};

export const getTemplatesByTags = (tags: string[]): Template[] => {
  return getAllTemplates().filter((template) =>
    tags.some((tag) => template.tags.includes(tag.toLowerCase()))
  );
};
