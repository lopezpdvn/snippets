interface StrValidator {
  isAcceptable(s: string): boolean;
}

// Use an export statement to make above
// interface available to consumers.
export { StrValidator };