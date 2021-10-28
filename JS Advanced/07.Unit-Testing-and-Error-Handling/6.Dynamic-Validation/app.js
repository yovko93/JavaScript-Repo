function validate() {
    let input = document.getElementById('email');
    const pattern = /^([a-z0-9]+)\@([a-z]+).([a-z]+)$/gm;

    input.addEventListener('change', () => {
        if (!pattern.test(input.value)) {
            input.classList.add('error');
        } else {
            input.removeAttribute('class');
        }
    })
}