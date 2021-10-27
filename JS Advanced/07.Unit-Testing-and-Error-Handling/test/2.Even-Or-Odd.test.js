const isOddOrEven = require('../2.Even-Or-Odd');
const { assert, expect } = require('chai');

describe('isOddOrEven functionality', () => {
    it('Should return undefined when parameter is NOT string', () => {
        let input = 234;

        assert.isUndefined(isOddOrEven(input));
    });

    it('Should return EVEN when passing "java"', () => {
        let input = 'java';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'even';

        assert.strictEqual(actualResult, expectedResult);
    });

    it('Should return ODD when passing "programmers"', () => {
        let input = 'programmers';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'odd';

        assert.strictEqual(actualResult, expectedResult);
    });
});