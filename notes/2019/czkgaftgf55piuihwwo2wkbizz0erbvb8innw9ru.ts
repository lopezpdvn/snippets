import { StrValidator } from "./module_0";

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements
  StrValidator {
  isAcceptable(s: string) {
    return s.length === 5 &&
           numberRegexp.test(s);
  }
}