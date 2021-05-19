export function isNullOrUndefined(val: any) {
    return val === null || val === undefined;
}

export function isKeyValue(val: any) {
    return (
        !isNullOrUndefined(val) &&
        typeof val === "object" &&
        !Array.isArray(val) &&
        Object.keys(val).length === 2 &&
        !isNullOrUndefined(val.key) &&
        !isNullOrUndefined(val.value)
    )
}