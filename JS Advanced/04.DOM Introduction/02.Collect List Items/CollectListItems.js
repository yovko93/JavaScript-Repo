function extractText() {
    const liElements = [...document.getElementsByTagName('li')];
    const elementText = liElements.map(e => e.textContent);

    document.getElementById('result').value = elementText.join('\n');
}

// 2nd way
// function extractText() {
//     let listItemsQuery = document.querySelectorAll('#items li');
//     let result = document.getElementById('result');

//     for (const listItem of listItemsQuery) {
//         result.textContent += listItem.textContent + '\n';
//     }
// }