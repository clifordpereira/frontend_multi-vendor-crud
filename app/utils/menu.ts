// utils/menu.ts
import type { NavItem } from "~/types/nav";

const ICON_DEFAULT = "i-lucide-text";

export function buildMenu(
  tables: string[],
  label = "Resources",
  icon = "i-lucide-briefcase",
  authOnly = true
): NavItem {
  const children: NavItem[] = tables.map((table) => ({
    label: table.charAt(0).toUpperCase() + table.slice(1),
    to: `/resource/${table}`,
    icon: ICON_DEFAULT,
  }));

  return { label, icon, authOnly, children };
}
