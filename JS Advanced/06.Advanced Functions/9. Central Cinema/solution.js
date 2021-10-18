function solve() {
    const formElements = document.querySelector('#container').children;
    const inputs = Array.from(formElements).slice(0, formElements.length - 1);
    const onScreenBtn = Array.from(formElements).slice(formElements.length - 1)[0];
    const moviesUl = document.querySelector('#movies>ul');
    const archiveUl = document.querySelector('#archive>ul');
    const clearBtn = document.querySelector('#archive>button');

    function clear(e) {
        Array.from(e.target.parentNode.children[1].children).forEach(e => e.remove());
    }

    function archive(e) {
        const li = e.target.parentNode.parentNode;
        const div = e.target.parentNode;
        const input = div.children[1];

        if (!Number(input.value)) {
            return;
        }

        const span = document.createElement('span');
        const name = li.children[0].textContent;
        span.textContent = name;

        const strong = document.createElement('strong');
        const price = +div.children[0].textContent;
        const totalPrice = price * Number(input.value);
        strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove()
        })

        const resultLi = document.createElement('li');

        resultLi.appendChild(span);
        resultLi.appendChild(strong);
        resultLi.appendChild(deleteBtn);

        archiveUl.appendChild(resultLi);

        li.remove();
    }

    function createMovie(e) {
        e.preventDefault();

        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = Number(inputs[2].value);

        if (!name || !hall || !price || isNaN(price)) {
            return;
        }

        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);

        const strongHall = document.createElement('strong');
        strongHall.textContent = `Hall: ${hall}`;
        li.appendChild(strongHall);

        const div = document.createElement('div');

        const strongPrice = document.createElement('strong');
        strongPrice.textContent = price.toFixed(2);
        
        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        
        const archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive';
        archiveBtn.addEventListener('click', archive);

        div.appendChild(strongPrice);
        div.appendChild(input);
        div.appendChild(archiveBtn);

        li.appendChild(div);
        moviesUl.appendChild(li);
    }

    clearBtn.addEventListener('click', clear);
    onScreenBtn.addEventListener('click', createMovie);
}



//========================================================
// // judge 100/100
// function solve() {
//     const input = Array.from(document.getElementById('container').children);
 
//     const addBtn = document.querySelector('form div button');
//     addBtn.addEventListener('click', addMovie);
 
//     function addMovie(e) {
//         e.preventDefault();
 
//         let name = input[0].value;
//         let hall = input[1].value;
//         let price = input[2].value;
 
//         let moviesList = document.querySelector('section ul');
 
//         if (name != '' && hall != '' && price != '' && !isNaN(price)) {
//             let newLi = document.createElement('li');
//             let newSpan = document.createElement('span');
//             let spanText = document.createTextNode(name);
//             newSpan.appendChild(spanText);
 
//             let newStrong = document.createElement('strong');
//             let strongText = document.createTextNode(`Hall: ${hall}`);
//             newStrong.appendChild(strongText);
//             newLi.appendChild(newSpan);
//             newLi.appendChild(newStrong);
 
//             let newDiv = document.createElement('div');
//             let divStrong = document.createElement('strong');
//             let strongContent = document.createTextNode(price);
//             divStrong.appendChild(strongContent);
 
 
//             let newInput = document.createElement('input');
//             newInput.setAttribute('placeholder', 'Tickets Sold');
//             let newBtn = document.createElement('button');
//             let btnText = document.createTextNode('Archive');
//             newBtn.appendChild(btnText);
//             newBtn.addEventListener('click', archive);
 
//             newLi.appendChild(newDiv);
//             newDiv.appendChild(divStrong);
//             newDiv.appendChild(newInput);
//             newDiv.appendChild(newBtn);
//             moviesList.appendChild(newLi);
//         }
 
//         input[0].value = '';
//         input[1].value = '';
//         input[2].value = '';
//     }
 
//     function archive(e) {
//         let ticketsSold = e.target.parentNode.children[1];
//         let row = e.target.parentNode.parentNode;
//         let rowParent = row.parentNode;
//         let name = e.target.parentNode.parentNode.children[0];
//         let price = e.target.parentNode.children[0];
 
//         if (ticketsSold.value != '' && !isNaN(ticketsSold.value)) {
//             let archiveUl = document.querySelector('#archive ul');
//             let newLi = document.createElement('li');
//             let newSpan = document.createElement('span');
//             let spanContent = document.createTextNode(name.textContent);
//             newSpan.appendChild(spanContent);
 
//             let newStrong = document.createElement('strong');
//             let totalPrice = Number(price.textContent) * Number(ticketsSold.value);
//             let strongContent = document.createTextNode(`Total amount: ${totalPrice.toFixed(2)}`);
//             newStrong.appendChild(strongContent);
 
//             let newBtn = document.createElement('button');
//             let btnText = document.createTextNode('Delete');
//             newBtn.appendChild(btnText);
 
//             newBtn.addEventListener('click', deleteMovie);
 
//             newLi.appendChild(newSpan);
//             newLi.appendChild(newStrong);
//             newLi.appendChild(newBtn);
//             archiveUl.appendChild(newLi);
//             rowParent.removeChild(row);
//         }
//     }
 
//     function deleteMovie(e) {
//         let row = e.target.parentNode;
//         let rowParent = row.parentNode;
//         rowParent.removeChild(row);
//     }
 
//     const clearBtn = document.querySelector('#archive button');
//     clearBtn.addEventListener('click', (e) => {
//         let ul = e.target.previousElementSibling;
//         ul.innerHTML = '';
 
//     });
// }


//========================================================
// // // judge 100/100
// function solve() {
//     const onScreenButton = document.querySelector('form div button');
//     const [nameElement, hallElement, ticketPriceElement] = Array.from(document.querySelectorAll('form div input'));
 
//     const addedMoviesList = document.querySelector('section#movies ul');
//     const archivedMoviesList = document.querySelector('section#archive ul');
//     const clearButton = document.querySelector('section#archive button');
 
//     clearButton.addEventListener('click', () => {
//         archivedMoviesList.innerHTML = '';
//     });
 
//     onScreenButton.addEventListener('click', addMovie);
 
//     function addMovie(event) {
//         event.preventDefault();
 
//         const name = nameElement.value;
//         nameElement.value = '';
 
//         const hall = hallElement.value;
//         hallElement.value = '';
 
//         if(!name || !hall) {
//             return;
//         }
 
//         let ticketPrice = ticketPriceElement.value;
//         ticketPriceElement.value = '';
//         if(ticketPrice === '' || Number.isNaN(Number(ticketPrice))) {
//             return;
//         }
 
//         ticketPrice = Number(ticketPrice);
 
//         // name
//         let titleElement = document.createElement('span');
//         titleElement.textContent = name;
 
//         // hall
//         let strongHallElement = document.createElement('strong');
//         strongHallElement.textContent = `Hall: ${hall}`;
 
//         // price
//         let priceElement = document.createElement('strong');
//         priceElement.textContent = ticketPrice.toFixed(2);
 
//         // tickets sold input
//         let soldTicketsInput = document.createElement('input');
//         soldTicketsInput.setAttribute('placeholder', 'Tickets Sold');
 
//         // archive button
//         let archiveButton = document.createElement('button');
//         archiveButton.textContent = 'Archive';
//         archiveButton.addEventListener('click', archiveMovie);
 
//         // container
//         let divElement = document.createElement('div');
//         divElement.appendChild(priceElement);
//         divElement.appendChild(soldTicketsInput);
//         divElement.appendChild(archiveButton);
 
//         let liElement = document.createElement('li');
//         liElement.appendChild(titleElement);
//         liElement.appendChild(strongHallElement);
//         liElement.appendChild(divElement);
 
//         addedMoviesList.appendChild(liElement);
 
//         function archiveMovie() {
//             let ticketsSold = soldTicketsInput.value;
//                 soldTicketsInput.value = '';
//                 if(ticketsSold === '' || Number.isNaN(Number(ticketsSold))) {
//                     return;
//                 }
    
//                 ticketsSold = Number(ticketsSold);
//                 liElement.removeChild(strongHallElement);
//                 liElement.removeChild(divElement);
    
//                 let strongTotalElement = document.createElement('strong');
//                 strongTotalElement.textContent = `Total amount: ${(ticketPrice * ticketsSold).toFixed(2)}`;
    
//                 let deleteButton = document.createElement('button');
//                 deleteButton.textContent = 'Delete';
//                 deleteButton.addEventListener('click', () => {
//                     liElement.remove();
//                 });
    
//                 liElement.appendChild(strongTotalElement);
//                 liElement.appendChild(deleteButton);
    
//                 archivedMoviesList.appendChild(liElement);
//         }
//     } 
// }