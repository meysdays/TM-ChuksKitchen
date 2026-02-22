export interface NavItemType {
    name: string;
    path: string;
    // icon: React.ElementType
}

export interface FooterLink {
  name: string;
  path?: string;   
  value?: string;
}

export interface FooterSection {
  title?: string;
  children: FooterLink[];
}