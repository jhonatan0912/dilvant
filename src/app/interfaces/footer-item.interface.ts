
export interface FooterSection {
  id: number;
  label: string;
  items: FooterItem[];
}

export interface FooterItem {
  label: string;
  url: string;
  external: boolean;
}