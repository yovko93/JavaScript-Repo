window.addEventListener('load', solve);

function solve() {
    const productType = document.getElementById('type-product');
    const description = document.getElementById('description');
    const name = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');

    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');

    document.querySelector('form button').addEventListener('click', sendForm);

    function sendForm(event) {
        event.preventDefault();

        if (description.value == '' || name.value == '' || phone == '') {
            return;
        }

        const divElement = e('div', undefined, 'container');
        const typeH2 = e('h2', 'Product type for repair: ' + productType.value);
        const infoH3 = e('h3', `Client information: ${name.value}, ${phone.value}`);
        const descriptionH4 = e('h4', `Description of the problem: ${description.value}`);
        const startBtn = e('button', 'Start repair', 'start-btn');
        const finishtBtn = e('button', 'Finish repair', 'finish-btn');
        finishtBtn.disabled = true;

        divElement.appendChild(typeH2);
        divElement.appendChild(infoH3);
        divElement.appendChild(descriptionH4);
        divElement.appendChild(startBtn);
        divElement.appendChild(finishtBtn);

        receivedOrders.appendChild(divElement);

        startBtn.addEventListener('click', () => {
            startBtn.disabled = true;
            finishtBtn.disabled = false;
        });

        finishtBtn.addEventListener('click', () => {
            completedOrders.appendChild(divElement);
            divElement.querySelector('.start-btn').remove();
            divElement.querySelector('.finish-btn').remove();
        });

        const clearBtn = document.querySelector('.clear-btn');
        clearBtn.addEventListener('click', () => {
            const divArr = Array.from(document.querySelectorAll('#completed-orders .container'));
            divArr.forEach(e => e.remove());
        });

        description.value = '';
        name.value = '';
        phone.value = '';
    }

    function e(type, content, className) {
        let element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }

        if (className) {
            element.className = className;
        }

        return element;
    }
}