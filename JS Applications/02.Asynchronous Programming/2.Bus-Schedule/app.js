function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let infoBox = document.querySelector('#info span');

    let stop = {
        next: 'depot'
    };

    async function depart() {
        const url = 'http://localhost:3030/jsonstore/bus/schedule/' + stop.next;

        const response = await fetch(url);
        const data = await response.json();

        stop = data;

        infoBox.textContent = `Next stop ${stop.name}`;

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();