import { StrValidator, TOP_LEVEL_NUMBER }
from './module_1';

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements
  StrValidator {
  isAcceptable(s: string) {
    return s.length === 5 &&
           numberRegexp.test(s);
  }
}

console.log(TOP_LEVEL_NUMBER);