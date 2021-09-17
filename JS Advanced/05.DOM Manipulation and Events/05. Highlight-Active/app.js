function focus() {
    // select all input fields
    // add listener for focus event
    // add listener for blur event
    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    });
    
    function onFocus(ev){
        // onfocus -> select input parent -> apply class "focused"
        ev.target.parentNode.className = 'focused';
    }
    
    function onBlur(ev){
        // onBlur -> select input parent -> remove class focused
        ev.target.parentNode.className = '';
    }
}