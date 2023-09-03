import { it, expect } from 'vitest';

import { validateNumber, validateStringNotEmpty } from './validation';

it('should throw an error, if an empty string is provided', () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();

});

it("should throw an error, if a non-numeric value is provided", () => {
  const input = '1';
  const validationFn = () => validateNumber(input);
  expect(validationFn).toThrow();
});

it("should throw an error, if a number is provided", () => {
  const input = 1;
  const validationFn = () => validateNumber(input);
  expect(validationFn).not.toThrow();
});