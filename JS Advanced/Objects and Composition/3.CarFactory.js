function carFactory(arguments) {
    const {
        model,
        power,
        carriage,
        color,
        wheelsize
    } = arguments;

    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ].sort((a, b) => a.power - b.power);

        // let result;
        // for(i = 0; i < engines.length; i++){
        //     if (engines[i].power >= power) {
        //         result = engines[i];
        //         break;
        //     }
        // }

        return engines.find(en => en.power >= power);
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color
        }
    }

    function getWheels(wheelsize) {
        let wheel = wheelsize % 2 === 0
            ? wheelsize - 1
            : wheelsize;

        //return [wheel, wheel, wheel, wheel];
        return Array(4).fill(wheel, 0);
    }

    return {
        model,
        engine: getEngine(power),
        carriage: getCarriage(carriage, color),
        wheels: getWheels(wheelsize)
    }

}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));