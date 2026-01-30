export interface NavItem {
  href: string;
  label: string;
  disabled?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export type Theme = "light" | "dark" | "system";
