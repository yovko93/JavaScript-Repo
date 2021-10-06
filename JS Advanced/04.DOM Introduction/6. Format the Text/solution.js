// 100/100
function solve() {
  let inputStr = document.getElementById('input').value;
  let output = document.getElementById('output');

  let input = inputStr.split('.').filter((p) => p.length > 0);

  for (let i = 0; i < input.length; i += 3) {
      let arr = [];
      for (let y = 0; y < 3; y++) {
          if (input[i + y]) {
              arr.push(input[i + y]);
          }
      }
      let paragraph = arr.join('. ') + '.';
      output.innerHTML += `<p>${paragraph}</p>`;
  }
}

//-------------------------
// 60/100
// function solve() {
//   let inputText = document.getElementById('input').value;
//   let outputText = document.getElementById('output');
//   let sentences = inputText.split('.').filter((p) => p.length > 0);
//   let paragraphs = Math.ceil(sentences.length / 3);

//   for (let i = 0; i < paragraphs; i++) {
//     outputText.innerHTML += `<p> ${sentences.splice(0, 3).join('. ')}. </p>`;
//   }
// }