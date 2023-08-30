import { it, expect } from "vitest";
import { add } from "./math";

it("should summarise all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectResult = numbers.reduce(
    (preValue, curValue) => preValue + curValue,
    0
  );

  expect(result).toBe(expectResult);
});

it("should yield NaN if a least one invalid number is provided", () => {
  //Arrange
  const inputs = ["invalid", 1];

  //Act
  const result = add(inputs);

  //Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectResult = numbers.reduce(
    (preValue, curValue) => +preValue + +curValue,
    0
  );

  expect(result).toBe(expectResult);
});

it('should yield 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  
});