import { sqr } from "./sqr"

describe('sqr unit tests', () => {

it('should sqr 2 ^ 2=4', () => {
// Pattern AAA (Arrange - Act - Assert)

// Arrange
let result = 0;

// Act
result = sqr(2);

// Assert
expect(result).toBe(4);
})

it('should sqr 3 ^ 2=9', () => {
// Arrange
let result = 0;
// Act
result = sqr(3);
// Assert
expect(result).toBe(9);
})

it('should sqr 4 ^ 2=16', () => {
    // Arrange
    let result = 0;
    // Act
    result = sqr(4);
    // Assert
    expect(result).toBe(16);
})

    it('should sqr 5 ^ 2=25', () => {
        // Arrange
        let result = 0;
        // Act
        result = sqr(5);
        // Assert
        expect(result).toBe(25);
    })
    // is ok
}) 