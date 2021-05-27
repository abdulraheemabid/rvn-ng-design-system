export type CreateOrEdit = "create" | "edit";

export type ColorType = "primary" | "accent" | "warn";

export interface IApiResponseWrapper {
    status: "success" | "failure";
    statusCode: number,
    data: any;
    message: string;
}

export interface GenericObjectWithId {
    [key: string]: unknown;
    id: number;
}