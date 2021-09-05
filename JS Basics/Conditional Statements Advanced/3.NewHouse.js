function solve(flowers, quantity, budget) {
    quantity = Number(quantity);
    budget = Number(budget);

    let price = 0;

    switch (flowers) {
        case 'Roses':
            price = quantity * 5;
            if (quantity > 80) {
                price *= 0.9;
            }
            break;

        case 'Dahlias':
            price = quantity * 3.8;
            if (quantity > 90) {
                price *= 0.85;
            }
            break;

        case 'Tulips':
            price = quantity * 2.8;
            if (quantity > 80) {
                price *= 0.85;
            }
            break;

        case 'Narcissus':
            price = quantity * 3;
            if (quantity < 120) {
                price *= 1.15;
            }
            break;

        case 'Gladiolus':
            price = quantity * 2.5;
            if (quantity < 80) {
                price *= 1.2;
            }
            break;
    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${(budget - price).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}