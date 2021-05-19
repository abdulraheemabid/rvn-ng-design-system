
export interface RvnNavListInput {
  list: RvnNavItem[];
}

export interface RvnNavItem {
  displayName: string;
  routeURL?: string;
  showDividerBelow?: boolean;
}