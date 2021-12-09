const testNumbers = require('../03.Test-Numbers.js').testNumbers;
const { assert, expect } = require('chai');


describe("testNumbers functionality", () => {
    describe("sumNumber", () => {
        it("Should return undefine", () => {
            assert.isUndefined(testNumbers.sumNumbers('1', '1'));
            assert.isUndefined(testNumbers.sumNumbers('1', 1));
            assert.isUndefined(testNumbers.sumNumbers(null, '1'));
        });

        it("Should return result", () => {
            assert.equal(testNumbers.sumNumbers(1, 1), 2.00);
            assert.equal(testNumbers.sumNumbers(1, 1.5), 2.50);
        });
    });

    describe("numberChecker", () => {
        it("Should throw error if input is not a number", () => {
            assert.throw(() => testNumbers.numberChecker('test'));
        });

        it("Should return a msg if number is EVEN", () => {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
            assert.equal(testNumbers.numberChecker(0), 'The number is even!');
        });

        it("Should return a msg if number is ODD", () => {
            assert.equal(testNumbers.numberChecker(1), 'The number is odd!');
        });
    });

    describe("averageSumArray", () => {
        it("Should return average sum of arr", () => {
            assert.equal(testNumbers.averageSumArray([1, 2, 3]), 2);
        });
    });
});
