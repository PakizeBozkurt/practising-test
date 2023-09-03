import { it, expect, describe } from 'vitest';

import { validateNumber, validateStringNotEmpty } from './validation';

describe('validationStringNotEmpty()', () => {
    it("should throw an error, if an empty string is provided", () => {
      const input = "";
      const validationFn = () => validateStringNotEmpty(input);
      expect(validationFn).toThrow();
    });

    it("should throw an error, if a non-numeric value is provided", () => {
      const input = "1";
      const validationFn = () => validateNumber(input);
      expect(validationFn).toThrow();
    });

    it("should throw an error, if a number is provided", () => {
      const input = 1;
      const validationFn = () => validateNumber(input);
      expect(validationFn).not.toThrow();
    });
})
