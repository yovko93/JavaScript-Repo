function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if (!validFaces.includes(face)) {
        throw new Error('Error');
    }

    if (!validSuits.hasOwnProperty(suit)) {
        throw new Error('Error');
    }

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        toString() {
            return `${this.face}${validSuits[this.suit]}`;
        }
    }

    return new Card(face, suit);
}

console.log(createCard('A', 'S'));
console.log(createCard('1', 'C'));