/** Striped placeholder tones (swap for real imagery later). */
export const STRIPES = {
  green:
    "repeating-linear-gradient(45deg,#D9DED2 0px,#D9DED2 14px,#E6E9E0 14px,#E6E9E0 28px)",
  aqua: "repeating-linear-gradient(45deg,#D4DDD8 0px,#D4DDD8 12px,#E2E8E3 12px,#E2E8E3 24px)",
  sand: "repeating-linear-gradient(45deg,#E0DCCB 0px,#E0DCCB 12px,#EBE7D8 12px,#EBE7D8 24px)",
  beige:
    "repeating-linear-gradient(45deg,#E3E1D4 0px,#E3E1D4 14px,#EDEBDF 14px,#EDEBDF 28px)",
} as const satisfies Record<string, string>;
