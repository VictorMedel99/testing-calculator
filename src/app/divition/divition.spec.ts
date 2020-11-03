import { divition } from "./divition"

describe('divition unit tests', () => {

it('should div 9/2 = 4.5', () => {
// Pattern AAA (Arrange - Act - Assert)

// Arrange
let result = 0;

// Act
result = divition(9,2);

// Assert
expect(result).toBe(4.5);
})

it('should div 2/2 = 1', () => {
// Arrange
let result = 0;
// Act
result = divition(2,2);
// Assert
expect(result).toBe(1);
})

it('should div 3.0 /0.5 = 6', () => {
    // Arrange
    let result = 0;
    // Act
    result = divition(3.0,0.5);
    // Assert
    expect(result).toBe(6);
})

    it('should div 0/ 1 = 0', () => {
        // Arrange
        let result = 0;
        // Act
        result = divition(0,1);
        // Assert
        expect(result).toBe(0);
    })

}) 