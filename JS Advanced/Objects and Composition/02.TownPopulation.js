function townPopulation(townsArray){
    const towns = {};

    for (let townsAsStrings of townsArray) {
        let [name, population] = townsAsStrings.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
           population += towns[name];
        }

        towns[name] = population;
    }

    for (let [name, population] of Object.entries(towns)) {
       console.log(`${name} : ${population}`)
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);