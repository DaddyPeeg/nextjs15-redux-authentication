type ElementType = "text" | "image" | "section";

type StyleProperties = {
  [key: string]: string | number;
};

interface BaseElement {
  id: string;
  type: ElementType;
  styles?: StyleProperties;
}

interface TextElement extends BaseElement {
  type: "text";
  content: string;
}

interface ImageElement extends BaseElement {
  type: "image";
  src: string;
  alt?: string;
}

interface SectionElement extends BaseElement {
  type: "section";
  children: WebsiteElement[];
}

export type WebsiteElement = TextElement | ImageElement | SectionElement;

export interface WebsiteStructure {
  id: string;
  type: "section";
  styles?: StyleProperties;
  children: WebsiteElement[];
}

export type BulletinState = {
  document: WebsiteStructure;
  currentNode: WebsiteElement | null;
};
