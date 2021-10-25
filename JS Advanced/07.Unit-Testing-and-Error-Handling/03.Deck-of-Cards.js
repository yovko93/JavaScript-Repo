function printDeckOfCards(cards) {
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

    let result = [];

    for (let i = 0; i < cards.length; i++) {
        try {
            const face = cards[i].substring(0, cards[i].length - 1);
            const suit = cards[i][cards[i].length - 1];
            const card = createCard(face, suit);
            result.push(card);
        } catch (error) {
            console.log(`Invalid card: ${cards[i]}`);
            return;
        }
    }

    console.log(result.map(card => card.toString()).join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);