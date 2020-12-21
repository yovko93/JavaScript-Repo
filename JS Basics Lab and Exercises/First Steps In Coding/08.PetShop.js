function calculateExpenses(countDogs, restAnimals){
    let dogsExpenses = Number(countDogs) * 2.5;
    let animalsExpenses = Number(restAnimals) * 4;

    let sum = dogsExpenses + animalsExpenses;
    console.log(`${sum} lv.`);
}

calculateExpenses(5,4);