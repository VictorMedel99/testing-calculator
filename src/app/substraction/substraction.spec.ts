import { substraction } from "./substraction"

describe('substraction unit tests', () => {

it('should substract 0 - +2=-2', () => {
// Pattern AAA (Arrange - Act - Assert)

// Arrange
let result = 0;

// Act
result = substraction(0,2);

// Assert
expect(result).toBe(-2);
})

it('should substract 9 - 3=6', () => {
// Arrange
let result = 0;
// Act
result = substraction(9,3);
// Assert
expect(result).toBe(6);
})

it('should substract 3.1416 - 0.1416=3.0', () => {
    // Arrange
    let result = 0;
    // Act
    result = substraction(3.1416,0.1416);
    // Assert
    expect(result).toBe(3.0);
})

    it('should substract 2.7-0.7=2.0', () => {
        // Arrange
        let result = 0;
        // Act
        result = substraction(2.7,0.7);
        // Assert
        expect(result).toBe(2.0);
    })

}) 