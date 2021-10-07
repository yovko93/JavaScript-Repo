function addItem() {
    // create <li>
    const input = document.getElementById('newText');
    const liElement = createElement('li', input.value);

    // add delete button
    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    });
    liElement.appendChild(deleteBtn);

    // add new <li> to document
    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}

// // 2nd way
// //--------------------
// function addItem() {
//     let newText = document.getElementById('newText');
//     let items = document.getElementById('items');

//     let liElement = document.createElement('li');
//     liElement.textContent = newText.value;

//     let deleteBtn = document.createElement('a');
//     deleteBtn.setAttribute('href', '#');
//     deleteBtn.textContent = '[Delete]';
//     deleteBtn.addEventListener('click', (e) => {
//         e.currentTarget.parentNode.remove();
//     })
    
//     liElement.appendChild(deleteBtn);
//     items.appendChild(liElement);

//     newText.value = '';
// }