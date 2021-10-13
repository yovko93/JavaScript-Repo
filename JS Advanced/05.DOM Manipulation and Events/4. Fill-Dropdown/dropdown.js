function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;
    document.getElementById('menu').appendChild(optionElement);

    newItemText.value = '';
    newItemValue.value = '';
}