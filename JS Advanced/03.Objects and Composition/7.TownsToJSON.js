function townsToJSON(input) {
    let [columns, ...table] = input.map(splitLine);

    function isEmptyString(x) {
        return x !== "";
    }

    function convertNum(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    function splitLine(input) {
        return input.split('|').filter(isEmptyString).map(x => x.trim()).map(convertNum);
    }

    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {})
    }));
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));

// second way
// function solve(input) {
//     let data = input
//     .map(row => row.split('|').filter(x => x != '').map(x => x.trim()));

//     let properties = data.shift();

//     let result = [];

//     data.forEach(row => {
//        let town = {
//           [properties[0]]: row[0],
//           'Latitude': Number(Number(row[1]).toFixed(2)),
//           'Longitude': Number(Number(row[2]).toFixed(2)),
//        };

//        result.push(town);
//     });

//     return JSON.stringify(result);
//  }