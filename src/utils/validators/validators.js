


export const requiredField = value => value ? undefined : "Field is required";

export const maxLength = (limit) => (value) => value?.length > limit ? `Max length is ${limit} chars` : undefined;
