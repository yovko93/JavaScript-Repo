const library = require('../03.Library.js').library;
const { assert, expect } = require('chai');


describe("library functionality", () => {
    describe("calcPriceOfBook", () => {
        it("Should throw error if the input is invalid", () => {
            assert.throw(() => library.calcPriceOfBook(1, '1'));
            assert.throw(() => library.calcPriceOfBook('Book', '1'));
            assert.throw(() => library.calcPriceOfBook([], 1));
            assert.throw(() => library.calcPriceOfBook('Book', {}));
            assert.throw(() => library.calcPriceOfBook(["book"], []));
            assert.throw(() => library.calcPriceOfBook('', ''));
            assert.throw(() => library.calcPriceOfBook(1, 1));
        });

        it("Should return price with discount", () => {
            let totalPrice = 20 - (20 * 0.5);
            assert.equal(library.calcPriceOfBook('Book', 1970), `Price of Book is ${totalPrice.toFixed(2)}`);
            assert.equal(library.calcPriceOfBook('Book', 1980), `Price of Book is ${totalPrice.toFixed(2)}`);
        });

        it("Should return regular price", () => {
            let totalPrice = 20;
            const actualRes = library.calcPriceOfBook('Book', 2000);
            assert.equal(actualRes, `Price of Book is ${totalPrice.toFixed(2)}`);
        });
    });

    describe("findBook", () => {
        it("Should throw error if no books are available", () => {
            assert.throw(() => library.findBook([], 'Book'));
        });

        it("Should return msg if we find the book", () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy'), "We found the book you want.");
        });

        it("Should return msg if we can't find the book", () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Book'), "The book you are looking for is not here!");
        });
    });

    describe("arrangeTheBooks", () => {
        it("Should throw an error if the input is invalid", () => {
            assert.throw(() => library.arrangeTheBooks('1'));
            assert.throw(() => library.arrangeTheBooks(-1));
            assert.throw(() => library.arrangeTheBooks([]));
            assert.throw(() => library.arrangeTheBooks({}));
        });

        it("Should return msg if availableSpace >= countBooks", () => {
            assert.equal(library.arrangeTheBooks(20), "Great job, the books are arranged.");
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
        });

        it("Should return msg if countBooks > availableSpace", () => {
            assert.equal(library.arrangeTheBooks(50), "Insufficient space, more shelves need to be purchased.");
        });
    });
});
