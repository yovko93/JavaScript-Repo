function solve(fruit, day, volume) {
    volume = Number(volume);

    let result = 0.0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    result = volume * 2.5;
                    break;
                case "apple":
                    result = volume * 1.2;
                    break;
                case "orange":
                    result = volume * 0.85;
                    break;
                case "grapefruit":
                    result = volume * 1.45;
                    break;
                case "kiwi":
                    result = volume * 2.7;
                    break;
                case "pineapple":
                    result = volume * 5.5;
                    break;
                case "grapes":
                    result = volume * 3.85;
                    break;

                default:
                    console.log("error");
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    result = volume * 2.7;
                    break;
                case "apple":
                    result = volume * 1.25;
                    break;
                case "orange":
                    result = volume * 0.9;
                    break;
                case "grapefruit":
                    result = volume * 1.6;
                    break;
                case "kiwi":
                    result = volume * 3.0;
                    break;
                case "pineapple":
                    result = volume * 5.6;
                    break;
                case "grapes":
                    result = volume * 4.2;
                    break;

                default:
                    console.log("error");
                    break;
            }
            break;

        default:
            console.log("error");
            break;
    }

    if (result > 0.0) {
        console.log(result.toFixed(2));
    }

}

solve("apple",
    "Tuesday",
    "2");

solve("kiwi",
    "Monday",
    "2.5");

solve("tomato",
    "Monday",
    "0.5");