// function loadRepos() {
//    let req = new XMLHttpRequest();
//    req.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//          document.getElementById("res").textContent = this.responseText;
//       }
//    };

//    req.open("GET", "https://api.github.com/users/testnakov/repos", true);
//    req.send();
// }


// second way
let button = document.querySelector("#load");

button.addEventListener('click', function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos';

   const httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         document.getElementById("res").textContent = httpRequest.responseText;
      }
   });

   httpRequest.open("GET", url);
   httpRequest.send();
});
