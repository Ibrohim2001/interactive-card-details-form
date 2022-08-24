const form = document.querySelector('.form');
const nameInput = document.querySelector('.name_input');
const numberInput = document.querySelector('.number_input');
const monthInput = document.querySelector('.month_input');
const yearInput = document.querySelector('.year_input');
const cvvInput = document.querySelector('.cvv_input');
// console.log(form)


function showError(input, message) {
  const formGroup = input.parentElement;
  const errMessage = formGroup.querySelector('.error_msg');
  errMessage.innerText = message;
  formGroup.className = 'form_group error';
}
function showSucces(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form_group';
}

function checkNumbers(input) {
  return /^[0-9]+$/.test(input);  
}
checkNumbers()
function checkDate(input) {
  return /^[0-9]+$/.test(input);  
}

form.addEventListener('submit', (e) => {
  e.preventDefault();


  if(nameInput.value === '') {
    showError(nameInput, 'Name is required')
  } else {
    showSucces(nameInput);
  }

  if(numberInput.value === '') {
    showError(numberInput, 'Numbers input should be filled');
  } else if(!checkNumbers(numberInput.value)) {
    showError(numberInput, 'Wrong format, numbers only')
  } else {
    showSucces(numberInput)
  }

  if(monthInput.value === '') {
    showError(monthInput, "Can't be blank")
  } else if(!checkDate(monthInput.value)) {
    showError(monthInput, '2 digits only')
  } else {
    showSucces(monthInput)
  }
  if(yearInput.value === '') {
    showError(yearInput, "Can't be blank")
  } else if(!checkDate(yearInput.value)) {
    showError(yearInput, '2 digits only')
  } else {
    showSucces(yearInput)
  }

  if(cvvInput.value === '') {
    showError(cvvInput, "CVV is required")
  } else if(!checkDate(cvvInput.value)) {
    showError(cvvInput, '3 digits only')
  } else {
    showSucces(cvvInput)
  }
  // if(monthInput.value === '') {
  //   const formEl = monthInput.parentElement;
  //   const errMessage = formEl.querySelector('span');
  //   errMessage.textContent = 'Can not be blank';
  //   formEl.className = 'form_group error';
  // } else {
  //   const formEl = monthInput.parentElement; 
  //   formEl.className = 'form_group';
  // }
});