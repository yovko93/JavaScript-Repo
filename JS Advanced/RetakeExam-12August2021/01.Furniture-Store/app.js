window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');

    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');

    document.getElementById('add').addEventListener('click', addFurniture);

    function addFurniture(event) {
        event.preventDefault();

        if (model.value == '' || year.value == '' || year.value <= 0 || description.value == '' || price.value == '' || price.value <= 0) {
            return;
        }

        const row = el('tr', undefined, 'info');

        const modelTd = el('td', model.value);
        const priceTd = el('td', `${Number(price.value).toFixed(2)}`);
        row.appendChild(modelTd);
        row.appendChild(priceTd);

        const buttonsTd = el('td');
        const infoBtn = el('button', 'More Info', 'moreBtn');
        const buyBtn = el('button', 'Buy it', 'buyBtn');
        buttonsTd.appendChild(infoBtn);
        buttonsTd.appendChild(buyBtn);

        infoBtn.addEventListener('click', (e) => {
            const currentRow = document.querySelector('.hide');
            const isHidden = infoBtn.textContent == 'More Info';
            currentRow.style.display = (isHidden) ? 'contents' : 'none';
            e.target.textContent = isHidden ? 'Less Info' : 'More Info';
        });

        buyBtn.addEventListener('click', (e) => {
            const currentPrice = totalPrice.textContent;
            const target = e.target.parentNode.parentNode;
            const itemPrice = target.children[1].textContent;

            totalPrice.textContent = (Number(itemPrice) + Number(currentPrice)).toFixed(2);
            row.remove();
            hiddenRow.remove();
        });

        row.appendChild(buttonsTd);

        const hiddenRow = el('tr', undefined, 'hide');
        const yearTd = el('td', 'Year: ' + year.value);
        const descriptionTd = el('td', 'Description: ' + description.value);
        descriptionTd.colSpan = "3";
        hiddenRow.appendChild(yearTd);
        hiddenRow.appendChild(descriptionTd);

        furnitureList.appendChild(row);
        furnitureList.appendChild(hiddenRow);


        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }

    function el(type, content, className) {
        const element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }

        if (className) {
            element.className = className;
        }

        return element;
    }
}