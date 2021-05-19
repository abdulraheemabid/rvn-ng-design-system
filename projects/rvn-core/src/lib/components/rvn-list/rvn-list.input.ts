import { TemplateRef } from "@angular/core";

export interface RvnListInput {
    list: any[];
    lineOneKey: string;
    lineTwoKey?: string;
    icon?: string;
    actionTemplateRef?: TemplateRef<any>;
    dense?: boolean;
}