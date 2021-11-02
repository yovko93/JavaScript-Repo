function solve(arr, criteria) {
    function splitLine(line) { return line.split('|') };

    function convertToTicket([destination, price, status]) {
        return new Ticket(destination, Number(price), status)
    }

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const sortMapper = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    return arr
        .map(splitLine)
        .map(convertToTicket)
        .sort(sortMapper[criteria]);
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

//// second way
// function solve(array, criteria) {
//     class Ticket {
//         constructor(destination, price, status) {
//             this.destination = destination;
//             this.price = price;
//             this.status = status;
//         }
//     }

//     let unsortedTickets = [];

//     for (const ticket of array) {
//         let [destination, price, status] = ticket.split('|');
//         price = Number(price);

//         unsortedTickets.push(new Ticket(destination, price, status));
//     }

//     let sortedTickets;

//     switch (criteria) {
//         case 'destination':
//             sortedTickets = unsortedTickets.sort((a, b) => a.destination.localeCompare(b.destination));
//             break;
//         case 'price':
//             sortedTickets = unsortedTickets.sort((a, b) => a.price - b.price);
//             break;
//         case 'status':
//             sortedTickets = unsortedTickets.sort((a, b) => a.status.localeCompare(b.status));
//             break;
//     }

//     return sortedTickets;
// }