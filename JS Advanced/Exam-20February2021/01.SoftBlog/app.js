function solve() {
   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');

   const postSection = document.querySelector('main section');
   const archiveSection = document.querySelector('.archive-section ol');

   document.querySelector('section button').addEventListener('click', create);

   function create(event) {
      event.preventDefault();

      const backupTitle = e('li', title.value);

      const article = e('article');

      const titleH1 = e('h1', title.value);
      article.appendChild(titleH1);

      const categoryP = e('p', 'Category: ');
      const categoryStrong = e('strong', category.value);
      categoryP.appendChild(categoryStrong);
      article.appendChild(categoryP);

      const creatorP = e('p', 'Creator: ');
      const creatorStrong = e('strong', author.value);
      creatorP.appendChild(creatorStrong);
      article.appendChild(creatorP);

      const contentP = e('p', content.value);
      article.appendChild(contentP);

      const divBtns = e('div', undefined, 'buttons');
      const deleteBtn = e('button', 'Delete', 'btn delete');
      const archiveBtn = e('button', 'Archive', 'btn archive');
      divBtns.appendChild(deleteBtn);
      divBtns.appendChild(archiveBtn);

      article.appendChild(divBtns);
      postSection.appendChild(article);

      archiveBtn.addEventListener('click', () => {
         archiveSection.appendChild(backupTitle);
         sortArts();
         article.remove();
      });

      deleteBtn.addEventListener('click', () => {
         article.remove();
      });

      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
   }

   function sortArts() {
      let lis = Array.from(archiveSection.querySelectorAll("li"));

      lis.sort((a, b) => a.textContent.localeCompare(b.textContent));
      lis.forEach(l => {
         archiveSection.appendChild(l)
      });
   }

   function e(type, content, className) {
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