declare const formats: readonly ["jpeg", "jpg", "png", "webp", "avif"];
export type AllowedFormat = typeof formats[number];
declare const formatValidate: (format?: string) => format is "jpeg" | "jpg" | "png" | "webp" | "avif";
export default formatValidate;
