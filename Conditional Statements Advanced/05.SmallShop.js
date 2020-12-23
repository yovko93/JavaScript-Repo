function solve(product, city, volume) {
    volume = Number(volume);

    let result = 0.0;

    switch (product) {
        case "coffee":
            if (city == "Sofia") {
                result = volume * 0.5;
            } else if (city == "Plovdiv") {
                result = volume * 0.4;
            } else if (city == "Varna") {
                result = volume * 0.45;
            }
            break;

        case "water":
            if (city == "Sofia") {
                result = volume * 0.8;
            } else if (city == "Plovdiv" || city == "Varna") {
                result = volume * 0.7;
            }
            break;
        case "beer":
            if (city == "Sofia") {
                result = volume * 1.2;
            } else if (city == "Plovdiv") {
                result = volume * 1.15;
            } else if (city == "Varna") {
                result = volume * 1.1;
            }
            break;
        case "sweets":
            if (city == "Sofia") {
                result = volume * 1.45;
            } else if (city == "Plovdiv") {
                result = volume * 1.3;
            } else if (city == "Varna") {
                result = volume * 1.35;
            }
            break;
        case "peanuts":
            if (city == "Sofia") {
                result = volume * 1.6;
            } else if (city == "Plovdiv") {
                result = volume * 1.5;
            } else if (city == "Varna") {
                result = volume * 1.55;
            }
            break;

    }

    console.log(result);
}