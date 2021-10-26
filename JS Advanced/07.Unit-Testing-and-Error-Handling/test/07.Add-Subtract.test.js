const createCalculator = require('../07.Add-Subtract');
const { assert, expect } = require('chai');

describe('createCalculator functionality', () => {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it('Should return 0 for get', () => {
        let value = 0;
        expect(value).to.be.equal(0);
    });

    it('Should return 5 after add(2), add(3)', () => {
        calc.add(2);
        calc.add(3);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });

    it('Should return -5 after subtract(3), subtract(2)', () => {
        calc.subtract(3);
        calc.subtract(2);
        let value = calc.get();
        expect(value).to.be.equal(-5);
    });

    it('Should return 2 after add(10), subtract(7), add(-2), subtract(-1)', () => {
        calc.add(10);
        calc.subtract(7);
        calc.add(-2);
        calc.subtract(-1);

        let value = calc.get();

        assert.strictEqual(value, 2);
    });

    it('Should return NaN for add(string)', () => {
        calc.add('hello');
        let value = calc.get();
        expect(value).to.be.NaN;
    });
});

