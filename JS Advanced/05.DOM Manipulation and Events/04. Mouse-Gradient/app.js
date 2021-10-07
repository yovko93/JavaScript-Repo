function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    const output = document.getElementById('result');

    function onMove(event) {
        const offsetX = event.offsetX
        const percent = Math.floor(offsetX / event.target.clientWidth * 100);

        output.textContent = `${percent}%`
    };
}

//=================================
// function attachGradientEvents() {
//     document.getElementById('gradient').addEventListener('mousemove', onMove);;
//     let result = document.getElementById('result');

//     function onMove(e) {
//         const percent = Math.floor(e.offsetX / e.currentTarget.offsetWidth * 100);

//         result.textContent = `${percent}%`;
//     }
// }