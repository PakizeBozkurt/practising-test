import { it, expect } from 'vitest';

import { validateNumber, validateStringNotEmpty } from './validation';

it('should throw an error, if an empty string is provided', () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();

});