const companyAdministration = require('../companyAdministration.js').companyAdministration;
const { assert, expect } = require('chai');


describe("company administration functionality", function () {
    describe("hiringEmployee", function () {
        it("Should throw error if input is different from 'Programmer", function () {
            assert.throw(() => companyAdministration.hiringEmployee('Ivan', 'Test', 5));
            assert.throw(() => companyAdministration.hiringEmployee('Ivan', 'Test', -5));
        });

        it("Should return msg if yearsExperience >= 3", function () {
            assert.equal(companyAdministration.hiringEmployee('Test', 'Programmer', 3), 'Test was successfully hired for the position Programmer.');

            assert.equal(companyAdministration.hiringEmployee('Test', 'Programmer', 5), 'Test was successfully hired for the position Programmer.');
            assert.equal(companyAdministration.hiringEmployee('Test', 'Programmer', 2), `Test is not approved for this position.`);
        });

        it("Should throw an error if input is not a number or less than 0", function () {
            assert.throw(() => companyAdministration.calculateSalary('Test'));
            assert.throw(() => companyAdministration.calculateSalary({}));
            assert.throw(() => companyAdministration.calculateSalary([]));
            assert.throw(() => companyAdministration.calculateSalary(-10));
            assert.throw(() => companyAdministration.calculateSalary(null));
            assert.throw(() => companyAdministration.calculateSalary(''));
        });

        it("Should return totalAmount", function () {
            assert.equal(companyAdministration.calculateSalary(10), 150);
            assert.equal(companyAdministration.calculateSalary(161), 3415);
            assert.equal(companyAdministration.calculateSalary(0), 0);
        });

        it("Should throw an error if input is not valid", function () {
            assert.throw(() => companyAdministration.firedEmployee('Test', 1));
            assert.throw(() => companyAdministration.firedEmployee('Test', 's'));
            assert.throw(() => companyAdministration.firedEmployee('', ''));
            assert.throw(() => companyAdministration.firedEmployee({}, 1));
            assert.throw(() => companyAdministration.firedEmployee(1, '1'));
            assert.throw(() => companyAdministration.firedEmployee(null, 1));
            assert.throw(() => companyAdministration.firedEmployee(['Test', 'Gosho'], -1));
            assert.throw(() => companyAdministration.firedEmployee(['Test', 'Gosho'], 2));
            assert.throw(() => companyAdministration.firedEmployee(['Test', 'Gosho'], 5));
            assert.throw(() => companyAdministration.firedEmployee(['Test', 'Gosho'], 'Test'));
            assert.throw(() => companyAdministration.firedEmployee(['Test', 'Gosho'], []));
            assert.throw(() => companyAdministration.firedEmployee(null, null));
            assert.throw(() => companyAdministration.firedEmployee());
        });

        it("Should return array as a string", function () {
            assert.equal(companyAdministration.firedEmployee(['Test', 'Gosho'], 1), 'Test');
            assert.equal(companyAdministration.firedEmployee(['Test', 'Gosho', 'Ivan'], 1), 'Test, Ivan');
            assert.equal(companyAdministration.firedEmployee(['Test'], 0), '');
        });
    });
});
