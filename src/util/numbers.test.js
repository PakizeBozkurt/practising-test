import { it, expext, expect } from "vitest";

import { transformToNumber } from "./numbers";

it("should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("should yield NaN for non-transformable values", () => {
  const input = "invalid";

  const result = transformToNumber(input);

  expect(result).toBeNaN("number");
});

it("should transform '0' string to the number 0", () => {
  const input = "0";
  const result = transformToNumber(input);
  expect(result).toBe(0);
});
