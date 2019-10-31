interface StrValidator {
  isAcceptable(s: string): boolean;
}

// Use an export statement to make above
// interface available to consumers, with a
// different name than original.
export { StrValidator as StrVal };