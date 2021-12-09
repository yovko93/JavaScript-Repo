const numberOperations = require('../03.Number-Operations.js').numberOperations;
const { assert, expect } = require('chai');


describe("numberOperations functionality", () => {
    describe("powNumber", () => {
        it("Should return the power of given number", () => {
            assert.equal(numberOperations.powNumber(2), 4);
        });
    });

    describe("numberChecker", () => {
        it("Should throw an error if input is NaN", () => {
            assert.throw(() => numberOperations.numberChecker('test'));
        });

        it("Should return msg if input is less than 100", () => {
            assert.equal(numberOperations.numberChecker(90), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(-90), 'The number is lower than 100!');
        });

        it("Should return msg if input is equal or greater than 100", () => {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
        });
    });

    describe("sumArrays", () => {
        it("Should return sum", () => {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2, 3]), [2, 4, 6]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2]), [2, 4, 3]);
        });
    });
});
