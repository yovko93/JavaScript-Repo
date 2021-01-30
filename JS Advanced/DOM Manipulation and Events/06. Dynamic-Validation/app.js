function validate() {
    // select input field and add change event listener 
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {
        // onChange -> validate input
        const email = ev.target.value;

        if (/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
            // if invalid -> add class error
            ev.target.className = '';
        } else {
            // else -> remove class error
            ev.target.className = 'error';
        }
    }
}