import { it, expext, expect } from "vitest";

import { transformToNumber } from "./numbers";

it("should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN("number");
  expect(result2).toBeNaN("number");
});

it("should transform '0' string to the number 0", () => {
  const input = "0";
  const result = transformToNumber(input);
  expect(result).toBe(0);
});
