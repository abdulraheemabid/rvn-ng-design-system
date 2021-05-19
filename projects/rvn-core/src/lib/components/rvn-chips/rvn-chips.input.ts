import { ColorType } from "../../utils/types";

export interface RvnChipsInput {
    list: {
        key: string,
        value: string,
        color?: ColorType
    }[];
}