const sum = require('../04.Sum-of-Numbers');
const assert = require('chai').assert;

describe('Sum function', () => {
    it('Should add positive numbers', () => {
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 15;

        let actualResult = sum(input);

        assert.strictEqual(actualResult, expectedResult);
    });

    it('Should return false when adding positive numbers', () => {
        let input = [10, 20, 30];
        let expectedResult = 15;

        let actualResult = sum(input);

        assert.notEqual(actualResult, expectedResult);
    });

    it('Should pass when adding negative numbers', () => {
        let input = [-1, -2, -3];
        let expectedResult = -6;

        let actualResult = sum(input);

        assert.strictEqual(actualResult, expectedResult);
    });
});