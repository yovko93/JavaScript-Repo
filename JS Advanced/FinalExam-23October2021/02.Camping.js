class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp.hasOwnProperty(condition) == false) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.find(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (this.listOfParticipants.find(p => p.name == name) == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        //const index = this.listOfParticipants.indexOf(name);
        const index = this.listOfParticipants.findIndex(p => p.name === name);
        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (this.listOfParticipants.some(p => p.name == participant1) == false) {
            throw new Error('Invalid entered name/s.');
        }

        let person1 = this.listOfParticipants.find(p => p.name === participant1);

        if (typeOfGame === 'WaterBalloonFights') {
            if (this.listOfParticipants.some(p => p.name == participant2) == false) {
                throw new Error('Invalid entered name/s.');
            }

            let person2 = this.listOfParticipants.find(p => p.name === participant2);

            if (person1.condition != person2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            let winnerName = '';

            if ((person1.power > person2.power)) {
                winnerName = person1.name;
                person1.wins++;
            } else if ((person1.power < person2.power)) {
                winnerName = person2.name;
                person2.wins++;
            } else {
                return `There is no winner.`;
            }

            return `The ${winnerName} is winner in the game ${typeOfGame}.`;
        } else if (typeOfGame === 'Battleship') {
            person1.power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return result.join('\n');
    }
}

// // Input 1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


// // Input 2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// // Input 3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// Input 4
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
