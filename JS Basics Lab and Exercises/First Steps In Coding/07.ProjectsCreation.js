function calculateHours(name, countProjects) {
    let architectName = name;
    let hoursNeeded = Number(countProjects) * 3;

    let result = `The architect ${architectName} will need ${hoursNeeded} hours to complete ${countProjects} project/s.`;
    console.log(result);
}

calculateHours("Gerge", "4");