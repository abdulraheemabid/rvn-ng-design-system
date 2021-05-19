
export interface RvnOrgChartInput {
  data: OrgChartNode;
  keyForLabel: string;
  expandAll?: boolean;
  rootStyleClass?: string;
  leafStyleClass?: string;
  lookUpData?: any[];
  useLookUpWithId?: boolean;
}

export interface OrgChartNode {
  label?: string;
  id?: number;
  styleClass?: string
  expanded?: boolean,
  children?: OrgChartNode[];
}
