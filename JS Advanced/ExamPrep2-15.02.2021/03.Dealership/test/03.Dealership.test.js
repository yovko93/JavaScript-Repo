const dealership = require('../03.Dealership.js').dealership;
const { assert, expect } = require('chai');


describe("dealership functionality", () => {
    describe("newCarCost", () => {
        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }
        it("Should return price with discount", () => {
            let newCarCost = dealership.newCarCost('Audi A4 B8', 20000);
            let finalPrice = 5000;
            assert.equal(newCarCost, finalPrice);
        });

        it("Should return new price", () => {
            let newCarCost = dealership.newCarCost('BMW', 20000);
            let finalPrice = 20000;
            assert.equal(newCarCost, finalPrice);
        });
    });

    describe("carEquipment", () => {

        it("Should return array with selected extras", () => {
            const selectedExtras = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2]);
            const expectedResult = ['heated seats', 'sport rims'];

            assert.deepEqual(selectedExtras, expectedResult);
        });
    });

    describe("euroCategory", () => {
        it("Should return msg if category is lower than 4", () => {
            const category3 = dealership.euroCategory(3);

            assert.equal(category3, 'Your euro category is low, so there is no discount from the final price!');
        });

        it("Should return msg if category is more than or equal to 4", () => {
            const category4 = dealership.euroCategory(4);
            const category5 = dealership.euroCategory(5);

            assert.equal(category4, `We have added 5% discount to the final price: 14250.`);
            assert.equal(category5, `We have added 5% discount to the final price: 14250.`);
        });
    });
});
