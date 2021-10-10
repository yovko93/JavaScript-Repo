function create(words) {
   let mainDivElement = document.getElementById('content');

   for (const string of words) {
      let divElement = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.textContent = string;
      paragraph.style.display = 'none';

      divElement.appendChild(paragraph);
      mainDivElement.appendChild(divElement);

      divElement.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
      })
   }

   // mainDivElement.addEventListener('click', (e) => {
   //    let paragraph = e.target.children[0];
   //    paragraph.style.display = 'block';
   // });
}