// types/nav.ts
export interface NavItem {
  label: string;
  to?: string;
  icon: string;
  authOnly?: boolean;
  guestOnly?: boolean;
  children?: NavItem[];
}
