const mathEnforcer = require('../4.Math-Enforcer').mathEnforcer;
const { assert, expect } = require('chai');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('Should return undefined when parameter is NOT a number', () => {
            assert.isUndefined(mathEnforcer.addFive("test"));
        });

        it('Should return correct result for positive numbers', () => {
            assert.equal(mathEnforcer.addFive(10), 15);
        });

        it('Should return correct result for negative numbers', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });

        it('Should return correct result for floating point parameter', () => {
            assert.closeTo(mathEnforcer.addFive(3.15), 8.15, 0.01);
            // expect(mathEnforcer.addFive(3.15)).to.be.closeTo(8.15, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('Should return undefined when parameter is NOT a number', () => {
            assert.isUndefined(mathEnforcer.subtractTen("test"));
        });

        it('Should return correct result for positive numbers', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5);
        });

        it('Should return correct result for negative numbers', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        });

        it('Should return correct result for floating point parameter', () => {
            assert.closeTo(mathEnforcer.subtractTen(10.15), 0.15, 0.01);
            // expect(mathEnforcer.subtractTen(10.15)).to.be.closeTo(0.15, 0.01);
        });
    });

    describe('sum', () => {
        it("Should return undefined for non-number first parameter", () => {
            expect(mathEnforcer.sum("5", 5)).to.be.equal(undefined);
        });
        it("Should return undefined for non-number second parameter", () => {
            expect(mathEnforcer.sum(5, "5")).to.be.equal(undefined);
        });
        it("Should return correct result for integer parameters", () => {
            expect(mathEnforcer.sum(5, -3)).to.be.equal(2);
        });
        it("Should return correct result for floating point parameters", () => {
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
        })
    });
});