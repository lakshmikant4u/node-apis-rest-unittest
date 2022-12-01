const mathOperations = require('../util/calculator');

describe("Calculator Tests", () => {
    test("Addition of 2 numbers", () => {
        // arrange and act
        var result = mathOperations.sum(1, 2)

        // assert
        expect(result).toBe(3);
    });

    test("Subtraction of 2 numbers", () => {
        // arrange and act
        var result = mathOperations.diff(10, 2)

        // assert
        expect(result).toBe(8);
    });

    test("Multiplication of 2 numbers", () => {
        // arrange and act
        var result = mathOperations.product(2, 8)

        // assert
        expect(result).toBe(16);
    });

    test("Division of 2 numbers", () => {
        // arrange and act
        var result = mathOperations.divide(24, 8)

        // assert
        expect(result).toBe(3);
    });
})

describe("Testing with Jest", () => {
    test("Addition", () => {
        const sum = 2 + 3;
        const expectedResult = 5;
        expect(sum).toEqual(expectedResult);
    });

    // Jest also allows a test to run multiple
    // times using different values
    test.each([[1, 1, 2], [-1, 1, 0], [3, 2, 5]])(
        'Does %i + %i equals %i', (a, b, expectedResult) => {
            expect(a + b).toBe(expectedResult);
        });
});

