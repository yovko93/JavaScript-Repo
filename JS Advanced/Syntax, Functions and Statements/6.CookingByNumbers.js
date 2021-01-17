function solve(...params) {
    let number = Number(params[0]);

    for (let i = 1; i < params.length; i++) {
        let operation = params[i];

        if (operation === 'chop') {
            number /= 2;
        } else if (operation === 'dice') {
            number = Math.sqrt(number);
        } else if (operation === 'spice') {
            number += 1;
        } else if (operation === 'bake') {
            number *= 3;
        } else if (operation === 'fillet') {
            number = number - (number * 0.2);
        }

        console.log(number);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');