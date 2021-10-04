function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  let textArr = input.toLowerCase().split(' ');
  let result = document.getElementById('result');

  switch (currentCase) {
      case 'Camel Case':
          let camelCase = '';

          camelCase += textArr[0];

          for (let i = 1; i < textArr.length; i++) {
              let element = textArr[i];
              element = element[0].toUpperCase().concat(element.slice(1));

              camelCase += element;
          }

          result.textContent = camelCase;
          break;
      case 'Pascal Case':
          let pascalCase = '';

          for (let i = 0; i < textArr.length; i++) {
              let element = textArr[i];
              element = element[0].toUpperCase().concat(element.slice(1));

              pascalCase += element;
          }
          
          result.textContent = pascalCase;
          break;
      default:
          result.textContent = 'Error!';
          break;
  }

}