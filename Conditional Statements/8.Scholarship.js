function solve(income, grade, minSalary) {
    income = Number(income);
    grade = Number(grade);
    minSalary = Number(minSalary);

    let excellentScholarship = grade * 25;;
    let socialScholarship = minSalary * 0.35;

    if (income < minSalary && grade >= 4.5) {

        if (grade >= 5.5 && excellentScholarship >= socialScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }

    } else if (grade >= 5.5) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    }
    else {
        console.log(`You cannot get a scholarship!`);
    }
}

solve("480.00",
    "4.60",
    "450.00");

solve("300.00",
    "5.65",
    "420.00");