function solution() {
    // attach event listeners to input form
    const [gifts, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);

    // create gift elements with buttons
    function addGift() {
        const name = input.value;
        input.value = '';

        const element = e('li', name, 'gift');
        const sendBtn = e('button', 'Send', 'sendButton');
        const discardBtn = e('button', 'Discard', 'discardButton');

        element.appendChild(sendBtn);
        element.appendChild(discardBtn);

        sendBtn.addEventListener('click', () => dispatchGift(sent, name, element));
        discardBtn.addEventListener('click', () => dispatchGift(discarded, name, element));

        gifts.appendChild(element);

        sortGifts();
    }

    function dispatchGift(target, name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        target.appendChild(element);
    }

    // // logic for sending gifts
    // function sendGift(name, gift) {
    //     // remove element from original list
    //     gift.remove();

    //     // create new li item
    //     const element = e('li', name, 'gift');

    //     // add element to new list
    //     sent.appendChild(element);
    // }

    // // logic for discarding gifts
    // function discardGift(name, gift) {
    //     gift.remove();
    //     const element = e('li', name, 'gift');
    //     discarded.appendChild(element);
    // }

    // sort gifts list
    function sortGifts() {
        Array
            .from(gifts.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(g => gifts.appendChild(g));
    }

    function e(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.classList.add(className);
            // element.className = className;
        }

        return element;
    }
}

// // =========================
// // ДЕЛЕГИРАНЕ

// containerDivEl.addEventListener('click', function (e) {
//     if (e.target.tagName = 'BUTTON') {
//         if (e.target.textContent === 'Add gift') {
//             state.add(e);
//         } else if (e.target.textContent === 'Send') {
//             state.send(e);
//         } else if (e.target.textContent === 'Discard') {
//             state.discard(e);
//         }
//     }
// })

// // second way
// function solution() {
//     const containerDivEl = document.querySelector('.container');
//     const sections = document.querySelectorAll('.card');
//     const listUl = sections[1].children[1];
//     const sentUl = sections[2].children[1];
//     const discardedUl = sections[3].children[1];

//     let state = {
//         gifts: [],
//         add: function (e) {
//             const addInputEl = e.target.previousElementSibling;

//             if (!addInputEl.value) {
//                 return;
//             }

//             let newLiEl = this.createElements('li', addInputEl.value, 'gift');
//             let newSendBtn =this. createElements('button', 'Send', '', 'sendButton');
//             let newDiscardBtn =this. createElements('button', 'Discard', '', 'discardButton');
//             this.appendElements(newSendBtn, newLiEl);
//             this.appendElements(newDiscardBtn, newLiEl);

//             this.gifts.push(newLiEl);
//             this.gifts.sort((a, b) => a.textContent.localeCompare(b.textContent));
//             this.gifts.forEach(li => this.appendElements(li, listUl))
//             addInputEl.value = "";
//         },
//         send: function (e) {
//             let li = e.target.parentElement;

//             e.target.nextElementSibling.remove();
//             e.target.remove();
//             this.appendElements(li, sentUl);

//             let index = this.gifts.findIndex(el => el.textContent == li.textContent);
//             this.gifts.splice(index, 1);
//         },

//         discard: function (e) {
//             let li = e.target.parentElement;
//             Array.from(li.children).forEach(x => x.remove())
//             this.appendElements(li, discardedUl);

//             let index = this.gifts.findIndex(el => el.textContent == li.textContent);
//             this.gifts.splice(index, 1);
//         },
//         createElements: function(type, text, cls, id) {
//             const el = document.createElement(type);
//             el.textContent = text;
//             if (cls) {
//                 el.classList.add(cls);
//             }
//             if (id) {
//                 el.id = id;
//             }
//             return el;
//         },
//         appendElements : function (from, to) {
//             to.appendChild(from);
//         },
//     }

//     containerDivEl.addEventListener('click', function (e) {
//         if (e.target.tagName == 'BUTTON') {
//             if (e.target.textContent === "Add gift") {
//                 state.add(e);
//             } else if (e.target.textContent === "Send") {
//                 state.send(e)
//             } else if (e.target.textContent === 'Discard') {
//                 state.discard(e);
//             }
//         }
//     })
// }