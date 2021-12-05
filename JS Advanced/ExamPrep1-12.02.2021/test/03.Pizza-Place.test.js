const pizzUni = require('../03.PizzaPlace.js').pizzUni;
const { assert, expect } = require('chai');

describe('pizzUni functionality', () => {
    describe('Make an order', () => {
        it("Throw error if there is no orderedPizza", () => {
            let pizza = { orderedDrink: 'drink' };
            let pizza2 = {};

            assert.throw(() => pizzUni.makeAnOrder(pizza), 'You must order at least 1 Pizza to finish the order.');
            assert.throw(() => pizzUni.makeAnOrder(pizza2), 'You must order at least 1 Pizza to finish the order.');
        });
        it("Should return msg if order pizza but no drink", () => {
            let pizza = { orderedPizza: 'pizza' };

            assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered ${pizza.orderedPizza}`);
        });
        it("Should return msg if order pizza and drink", () => {
            let pizza = {
                orderedPizza: 'pizza',
                orderedDrink: 'drink'
            };

            assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`);
        });
    });

    describe('Get Remaining Work', () => {
        it('Should work properly', () => {
            let statusArr = [{ pizzaName: 'pizza', status: 'ready' }];
            let statusArr2 = [];

            assert.equal(pizzUni.getRemainingWork(statusArr), 'All orders are complete!');
            assert.equal(pizzUni.getRemainingWork(statusArr2), 'All orders are complete!');
        });
        it('Should return all pizzas which are still preparing', () => {
            let statusArr = [{ pizzaName: 'pizza', status: 'preparing' }];

            let pizzaNames = statusArr.map(p => p.pizzaName).join(', ');
            assert.equal(pizzUni.getRemainingWork(statusArr), `The following pizzas are still preparing: ${pizzaNames}.`);
        });
    });

    describe('Order Type', () => {
        it("Should return total sum if typeOfOrder is 'Carry Out'", () => {
            let totalSum = pizzUni.orderType(100, 'Carry Out');
            assert.equal(totalSum, 90);
        });

        it("Should return total sum if typeOfOrder is 'Delivery'", () => {
            let totalSum = pizzUni.orderType(100, 'Delivery');
            assert.equal(totalSum, 100);
        });
    });
});