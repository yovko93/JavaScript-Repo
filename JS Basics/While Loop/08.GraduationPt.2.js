function graduation(input) {
    let name = input[0];
    let grade = 1;
    let averageGrade = 0;
    let index = 1;
    let repeat = 0;
    let sum = 0;


    while (grade < input.length) {
        let currentGrade = Number(input[index]);

        if (currentGrade < 4) {
            index++;
            repeat += 1;
            if (repeat == 2) {
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }

            continue;
        }

        sum += currentGrade;
        if (grade === 12) {
            console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
        }

        grade++;
        index++;

    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"]);
