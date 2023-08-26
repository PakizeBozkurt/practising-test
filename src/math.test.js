import { it, expect } from 'vitest';
import { add } from './math';

it('should summarise all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3];
    
    // Act
    const result = add(numbers);
    
    expect(result).toBe(6);
});