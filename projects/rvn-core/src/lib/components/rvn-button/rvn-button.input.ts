import { ColorType } from "../../utils/types";

export interface RvnButtonInput {
    disabled?: boolean;
    color?: ColorType;
    type?: "primary" | "secondary" | "tertiary" | "icon" | "icon-text" | "icon-text-primary" | "icon-text-secondary" | "fab" | "mini-fab",
    icon?: string;
    btnClass?: string;
    tooltipMessage?: string;
}