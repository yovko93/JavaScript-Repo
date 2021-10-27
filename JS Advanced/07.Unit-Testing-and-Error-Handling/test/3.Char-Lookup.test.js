const lookupChar = require('../3.Char-Lookup');
const { assert, expect } = require('chai');

describe('charLookUp functionality', () => {
    it('Should return undefined when first parameter is NOT a string or the second parameter is NOT a number ', () => {
        assert.isUndefined(lookupChar(5, 4));
        assert.isUndefined(lookupChar([], 4));
        assert.isUndefined(lookupChar({}, 4));
        assert.isUndefined(lookupChar('test', 1.4));
        assert.isUndefined(lookupChar('test', '4'));
    });

    it('Should return "Incorrect index" when parameter [index] is below 0 or bigger than string length', () => {
        assert.equal(lookupChar('test', -4), "Incorrect index");
        assert.equal(lookupChar('test', 4), "Incorrect index");
    });

    it('Should return the correct character', () => {
        let actualResult = lookupChar('test', 1);
        let expectedResult = 'e';

        assert.equal(actualResult, expectedResult);
    });
});