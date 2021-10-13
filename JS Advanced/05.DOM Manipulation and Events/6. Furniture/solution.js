function solve() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    const tbody = document.querySelector('tbody');

    function createCell(type, textContent, attribute) {
        const cell = document.createElement('td');
        const content = document.createElement(type);
        if (attribute) {
            content.setAttribute(attribute[0], attribute[1]);
        }
        content.textContent = textContent;
        cell.appendChild(content);
        return cell;
    }

    buttons[0].addEventListener('click', function (e) {
        const arr = JSON.parse(textareas[0].value);

        for (const el of arr) {
            const row = document.createElement('tr');

            const cellImage = createCell('img', '', ['src', el.img]);

            //TODO: createCell function
            const cellName = document.createElement('td');
            const pName = document.createElement('p');
            pName.textContent = el.name;
            cellName.appendChild(pName);

            const cellPrice = document.createElement('td');
            const pPrice = document.createElement('p');
            pPrice.textContent = el.price;
            cellPrice.appendChild(pPrice);

            const cellDecor = document.createElement('td');
            const pDecor = document.createElement('p');
            pDecor.textContent = el.decFactor;
            cellDecor.appendChild(pDecor);

            const cellCheck = document.createElement('td');
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            cellCheck.appendChild(input);

            row.appendChild(cellImage);
            row.appendChild(cellName);
            row.appendChild(cellPrice);
            row.appendChild(cellDecor);
            row.appendChild(cellCheck);

            tbody.appendChild(row);
        }

    })

    buttons[1].addEventListener('click', function (e) {
        const furniture = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked'))
            .map(i => i.parentNode.parentNode);

        const result = {
            bought: [],
            totalPrice: 0,
            decFactorSum: 0,
        }

        for (let row of furniture) {
            const cells = row.children;

            const name = cells[1].children[0].textContent;
            result.bought.push(name);

            const price = Number(cells[2].children[0].textContent);
            result.totalPrice += price;

            const decFactor = Number(cells[3].children[0].textContent);
            result.decFactorSum += decFactor;
        }

        textareas[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.decFactorSum / furniture.length}`;
    })
}

// // REDUCE
// const furniture = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked'))
//     .map(i => i.parentNode.parentNode);

// const result = furniture.reduce((result, row) => {
//     const cells = row.children;

//     const name = cells[1].children[0].textContent;
//     result.bought.push(name);

//     const price = Number(cells[2].children[0].textContent);
//     result.totalPrice += price;

//     const decFactor = Number(cells[3].children[0].textContent);
//     result.decFactorSum += decFactor;

//     return result;
// }, {
//     bought: [],
//     totalPrice: 0,
//     decFactorSum: 0,
// });