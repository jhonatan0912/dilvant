export interface NavigationItem {
  id: number;
  label: string;
  submenu?: NavigationSubItem[];
}

interface NavigationSubItem {
  id: number;
  label: string;
}