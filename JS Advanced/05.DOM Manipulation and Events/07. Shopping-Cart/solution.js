function solve() {
   let addProductBtns = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea');
   let checkoutBtnElement = document.querySelector('.checkout');

   let totalMoney = 0;
   let products = [];

   for (const addProductBtn of addProductBtns) {
      addProductBtn.addEventListener('click', (e) => {
         let currentProductElement = e.currentTarget.parentElement.parentElement;

         let productName = currentProductElement.querySelector('.product-title').textContent;
         let productPrice = Number(currentProductElement.querySelector('.product-line-price').textContent);

         totalMoney += productPrice;
         products.push(productName);

         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      });
   }

   checkoutBtnElement.addEventListener('click', (e) => {
      let uniqueProducts = products.reduce((a, x) => {
         if (!a.includes(x)) {
            a.push(x);
         }

         return a;
      }, []);

      textAreaElement.textContent += `You bought ${uniqueProducts.join(', ')} for ${totalMoney.toFixed(2)}.`

      checkoutBtnElement.setAttribute('disabled', true);
      Array.from(addProductBtns).forEach(element => {
         element.disabled = true;
      });
   });
}