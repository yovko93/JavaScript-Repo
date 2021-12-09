window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');

    let collection = document.querySelector('#all-hits div');
    let liked = document.querySelector('#total-likes div p');
    let saved = document.querySelector('.saved-container');

    document.getElementById('add-btn').addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();
        if (genre.value == '' || name.value == ''
            || author.value == '' || date.value == '') {
            return;
        }

        const divElement = e('div', undefined, 'hits-info');
        const img = document.createElement('img');
        img.src = "./static/img/img.png";
        const genreH2 = e('h2', 'Genre: ' + genre.value);
        const nameH2 = e('h2', 'Name: ' + name.value);
        const authorH2 = e('h2', 'Author: ' + author.value);
        const dateH3 = e('h3', 'Date: ' + date.value);
        const saveBtn = e('button', 'Save song', 'save-btn');
        const likeBtn = e('button', 'Like song', 'like-btn');
        const deleteBtn = e('button', 'Delete', 'delete-btn');

        divElement.appendChild(img);
        divElement.appendChild(genreH2);
        divElement.appendChild(nameH2);
        divElement.appendChild(authorH2);
        divElement.appendChild(dateH3);
        divElement.appendChild(saveBtn);
        divElement.appendChild(likeBtn);
        divElement.appendChild(deleteBtn);

        saveBtn.addEventListener('click', saveSong);
        likeBtn.addEventListener('click', likeSong);
        deleteBtn.addEventListener('click', deleteSong);

        collection.appendChild(divElement);

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';

        function saveSong() {
            likeBtn.remove();
            saveBtn.remove();
            saved.appendChild(divElement);
        }

        function likeSong() {
            const arr = liked.textContent.split(': ');
            const number = Number(arr[1]) + 1;
            liked.textContent = `${arr[0]}: ${number}`;
            likeBtn.disabled = true;
        }

        function deleteSong() {
            divElement.remove();
        }
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