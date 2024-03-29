import { html, render } from '../node_modules/lit-html/lit-html.js';

// update: (executed on app start and on every add operation)
// interpolate template with list
// render result inside div

// add function: (executed when the user clicks submit)
// parse input value
// create object
// send POST request with object
// on success -> add result to local list and call update

const selectTemplate = (list) => html`
<select id="menu">
    ${list.map(x => html`<option value=${x._id}>${x.text}</option>`)}
</select>`;

const endPoint = 'http://localhost:3030/jsonstore/advanced/dropdown';
const main = document.querySelector('div');
const input = document.getElementById('itemText');
initialize();

async function initialize() {
    document.querySelector('form').addEventListener('submit', (ev) => addItem(ev, list));

    const response = await fetch(endPoint);
    const data = await response.json();
    const list = Object.values(data);

    update(list);
}

function update(list) {
    const result = selectTemplate(list);
    render(result, main);
}

async function addItem(ev, list) {
    ev.preventDefault();

    const item = {
        text: input.value
    };

    const response = await fetch(endPoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });

    const result = await response.json();
    list.push(result);

    update(list);
}