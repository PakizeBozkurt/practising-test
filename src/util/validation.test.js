import { it, expect, describe } from "vitest";

import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validationStringNotEmpty()", () => {
  it("should throw an error, if an empty string is provided", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it("should throw an error with a message that contains a reason (must not be empty)", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/);
  });
  it("should throw an error, if a  long string of blanks is provided", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });
});


