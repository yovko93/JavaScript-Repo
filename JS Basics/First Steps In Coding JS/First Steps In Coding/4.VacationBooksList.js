function hoursNeeded(countPagesPerBook, pagesPerHour, days){
    let numOfPages = Number(countPagesPerBook);
    let readedPagesPerHour = Number(pagesPerHour);
    let daysPerBook = Number(days);

    let hoursPerBook = numOfPages/readedPagesPerHour;
    let hoursPerDay = hoursPerBook/daysPerBook;

    console.log(hoursPerDay);
}

hoursNeeded("212",
"20",
"2");