import { it, expect } from "vitest";
import { add } from "./math";

it("should summarise all number values in an array", () => {
  
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectResult = numbers.reduce(
    (preValue, curValue) => preValue + curValue,
    0
  );

  expect(result).toBe(expectResult);
});
