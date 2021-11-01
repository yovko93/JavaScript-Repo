function solve(input) {
    const bottles = new Map();

    input.reduce((acc, curr) => {
        let [juice, quantity] = curr.split(" => ");
        quantity = Number(quantity);

        if (!acc.hasOwnProperty(juice)) {
            acc[juice] = 0;
        }
        acc[juice] += quantity;

        if (acc[juice] >= 1000) {
            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }

            bottles.set(juice, bottles.get(juice) + parseInt(acc[juice] / 1000));
            acc[juice] %= 1000;
        }

        return acc;
    }, {});


    for (let [juice, quantity] of bottles) {
        console.log(`${juice} => ${quantity}`);
    }
}

// // second way
// function solve(arr) {
//     let map = new Map();
//     let result = {};

//     for (const juice of arr) {
//         let [juiceName, juiceQuantity] = juice
//             .split(' => ')
//             .filter(x => x !== '');
//         juiceQuantity = Number(juiceQuantity);

//         if (!result.hasOwnProperty(juiceName)) {
//             result[juiceName] = 0;
//         }

//         result[juiceName] += juiceQuantity;

//         if (result[juiceName] >= 1000) {
//             if (!map.has(juiceName)) {
//                 map.set(juiceName, 0);
//             }

//             map.set(juiceName, map.get(juiceName) + parseInt(result[juiceName] / 1000));
//             result[juiceName] %= 1000;
//         }
//     }

//     for (const [juice, quantity] of map) {
//         console.log(`${juice} => ${quantity}`);
//     }
// }

// solve(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']
// );

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);