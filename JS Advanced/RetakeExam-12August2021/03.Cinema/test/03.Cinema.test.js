const cinema = require('../03.Cinema.js').cinema;
const { assert, expect } = require('chai');


describe("cinema functionality", () => {
    describe("showMovies", () => {
        it("Should return msg if input arr is empty", () => {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');
        });

        it("Should return result", () => {
            assert.equal(cinema.showMovies(['King Kong', 'The Tomorrow War']), 'King Kong, The Tomorrow War');
            assert.equal(cinema.showMovies(['King Kong']), 'King Kong');
        });
    });

    describe("ticketPrice", () => {
        it("Should throw an erro if projection is not present", () => {
            assert.throw(() => cinema.ticketPrice('Test'));
            assert.throw(() => cinema.ticketPrice(''));
        });

        it("Should return the correct price", () => {
            assert.equal(cinema.ticketPrice('Premiere'), 12.00);
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
            assert.equal(cinema.ticketPrice('Discount'), 5.50);
        });
    });

    describe("swapSeatsInHall", () => {
        it("Should return msg if not successful change", () => {
            assert.equal(cinema.swapSeatsInHall(1, 1), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall('test', 1), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(0, 1), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(-1, 1), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(21, 1), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall("test", null), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall([], []), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(40, 40), "Unsuccessful change of seats in the hall.");

            assert.equal(cinema.swapSeatsInHall(1, 'test'), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(1, 0), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(1, -1), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(1, 21), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(1, 1.25), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall('test'), "Unsuccessful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(1), "Unsuccessful change of seats in the hall.");
        });

        it("Should return msg when the change is successful", () => {
            assert.equal(cinema.swapSeatsInHall(1, 2), "Successful change of seats in the hall.");
            assert.equal(cinema.swapSeatsInHall(10, 15), "Successful change of seats in the hall.");
        });
    });
});

//  this works
// it("floating number given", () => {
//     expect(cinema.swapSeatsInHall(1.25, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
// })
// it("greater than 20 number given", () => {
//     expect(cinema.swapSeatsInHall(25, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
// })

// it("negative number given", () => {
//     expect(cinema.swapSeatsInHall(-5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
// })
// it("0 given as number", () => {
//     expect(cinema.swapSeatsInHall(0, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
// })
// it("equal numbers", () => {
//     expect(cinema.swapSeatsInHall(5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
// })
// it("both numbers out of range", () => {
//     expect(cinema.swapSeatsInHall(25, 26)).to.be.equal("Unsuccessful change of seats in the hall.");
// })
// it("invalid param type", () => {
//     expect(cinema.swapSeatsInHall("movie", null)).to.be.equal("Unsuccessful change of seats in the hall.");
// })
// it("only 1 param passed", () => {
//     expect(cinema.swapSeatsInHall(5)).to.be.equal("Unsuccessful change of seats in the hall.");
// })
// it('if swap is succesfull', () => {
//     expect(cinema.swapSeatsInHall(3, 2)).to.equal("Successful change of seats in the hall.");
// })
// it('if num not intiger', () => {
//     expect(cinema.swapSeatsInHall(3, 'bla')).to.equal('Unsuccessful change of seats in the hall.');
// })
// it('0', () => {
//     expect(cinema.swapSeatsInHall(3, 0)).to.equal('Unsuccessful change of seats in the hall.');
// })
// it('more than 20  first param', () => {
//     expect(cinema.swapSeatsInHall(21, 3)).to.equal('Unsuccessful change of seats in the hall.');
// })

// it('more than 20  bouth param', () => {
//     expect(cinema.swapSeatsInHall(22, 23)).to.equal('Unsuccessful change of seats in the hall.');
// })
// it('null', () => {
//     expect(cinema.swapSeatsInHall('m=ov', null)).to.equal('Unsuccessful change of seats in the hall.');
// })
// it("1 and 2 numbers given", () => {
//     expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
// })