window.addEventListener('load', solution);

function solution() {
  const fullName = document.getElementById('fname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const postalCode = document.getElementById('code');

  const div = document.getElementById('block');
  const preview = document.getElementById('infoPreview');

  const editBtn = document.getElementById('editBTN');

  const continueBtn = document.getElementById('continueBTN');

  const submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submit);

  function submit(event) {
    event.preventDefault();

    if (fullName.value == '' || email == '') {
      return;
    }

    const backupName = fullName.value;
    const backupEmail = email.value;
    const backupPhone = phone.value;
    const backupAddress = address.value;
    const backupCode = postalCode.value;

    const fullNameLi = el('li', 'Full Name: ' + fullName.value);
    const emailLi = el('li', 'Email: ' + email.value);
    const phoneLi = el('li', 'Phone Number: ' + phone.value);
    const addressLi = el('li', 'Address: ' + address.value);
    const postalCodeLi = el('li', 'Postal Code: ' + postalCode.value);

    preview.appendChild(fullNameLi);
    preview.appendChild(emailLi);
    preview.appendChild(phoneLi);
    preview.appendChild(addressLi);
    preview.appendChild(postalCodeLi);

    editBtn.disabled = false;
    continueBtn.disabled = false;
    submitBtn.disabled = true;
    fullName.value = '';
    email.value = '';
    phone.value = '';
    address.value = '';
    postalCode.value = '';

    editBtn.addEventListener('click', edit);
    continueBtn.addEventListener('click', continueRes);

    function continueRes() {
      div.textContent = '';
      const h3Msg = el('h3', 'Thank you for your reservation!');
      div.appendChild(h3Msg);
    }

    function edit() {
      fullName.value = backupName;
      email.value = backupEmail;
      phone.value = backupPhone;
      address.value = backupAddress;
      postalCode.value = backupCode;

      preview.textContent = '';

      editBtn.disabled = true;
      continueBtn.disabled = true;
      submitBtn.disabled = false;
    }
  }

  function el(type, content, className) {
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
