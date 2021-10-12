function attachEventsListeners() {
    const main = document.querySelector('main');

    main.addEventListener('click', (e) => {
        if (e.target.type == 'button') {
            let input = Number(e.target.parentElement.children[1].value);
            let secondsInput = input;

            switch (e.target.id) {
                case 'daysBtn': secondsInput = input * 86400; break;
                case 'hoursBtn': secondsInput = input * 3600; break;
                case 'minutesBtn': secondsInput = input * 60; break;
            }

            let days = main.children[1].children[1];
            let hours = main.children[2].children[1];
            let minutes = main.children[3].children[1];
            let seconds = main.children[4].children[1];

            days.value = secondsInput / 86400;
            hours.value = secondsInput / 3600;
            minutes.value = secondsInput / 60;
            seconds.value = secondsInput;
        }
    })
}


//// 2nd way
// function attachEventsListeners() {
//     let daysInput = document.getElementById('days');
//     let hoursInput = document.getElementById('hours');
//     let minutesInput = document.getElementById('minutes');
//     let secondsInput = document.getElementById('seconds');

//     document.getElementById('daysBtn').addEventListener('click', () => {
//         hoursInput.value = daysInput.value * 24;
//         minutesInput.value = daysInput.value * 1440;
//         secondsInput.value = daysInput.value * 86400;
//     });

//     document.getElementById('hoursBtn').addEventListener('click', () => {
//         daysInput.value = hoursInput.value / 24;
//         minutesInput.value = hoursInput.value * 60;
//         secondsInput.value = hoursInput.value * 60 * 60;
//     });

//     document.getElementById('minutesBtn').addEventListener('click', () => {
//         daysInput.value = minutesInput.value / 60 / 24;
//         hoursInput.value = minutesInput.value / 60;
//         secondsInput.value = minutesInput.value * 60;
//     });

//     document.getElementById('secondsBtn').addEventListener('click', () => {
//         daysInput.value = secondsInput.value / 60 / 60 / 24;
//         hoursInput.value = secondsInput.value / 60 / 60;
//         minutesInput.value = secondsInput.value / 60;
//     });
// }