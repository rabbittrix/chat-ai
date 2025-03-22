export type TemplateCategory = "resume" | "legal" | "financial" | "business";

export interface Template {
  id: string;
  title: string;
  description: string;
  category: TemplateCategory;
  tags: string[];
  content: {
    sections: {
      title: string;
      content: string;
    }[];
  };
  metadata: {
    createdAt: string;
    updatedAt: string;
    version: string;
    author: string;
  };
}

export interface TemplateCollection {
  [category: string]: Template[];
}
