import { sqrt } from "./sqrt"

describe('sqrt unit tests', () => {

it('should sqrt (25) =5', () => {
// Pattern AAA (Arrange - Act - Assert)

// Arrange
let result = 0;

// Act
result = sqrt(25);

// Assert
expect(result).toBe(5);
})

it('should sqrt (16)=4', () => {
// Arrange
let result = 0;
// Act
result = sqrt(16);
// Assert
expect(result).toBe(4);
})

it('should sqrt (9)=3', () => {
    // Arrange
    let result = 0;
    // Act
    result = sqrt(9);
    // Assert
    expect(result).toBe(3);
})

    it('should sqrt (4)=2', () => {
        // Arrange
        let result = 0;
        // Act
        result = sqrt(4);
        // Assert
        expect(result).toBe(2);
    })
    // is ok
}) 