const form = document.querySelector('.form');
const nameInput = document.querySelector('.name_input');
const numberInput = document.querySelector('.number_input');
const monthInput = document.querySelector('.month_input');
const yearInput = document.querySelector('.year_input');
const cvvInput = document.querySelector('.cvv_input');
const inputs = document.querySelectorAll('input');
const completedState = document.querySelector('.complete_state');
// console.log(completedState)

const isNumber = /^[0-9]+$/;


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

function checkHasValue(inputArr) {
  inputArr.forEach(input => {
    if(input.value.trim() === '') {
      showError(input);
      completedState.className = 'complete_state';
      form.className = 'form'
    } else {
      showSucces(input);
      completedState.className = 'complete_state visible';
      form.className = 'form hidden'
    }
  });
}

function checkNumbers(input) {
  if(isNumber.test(input.value)) {
    showSucces(input);
  } else if(input.value === '') {
    showError(input, 'Enter card numbers')
  } else {
    showError(input, 'Wrong format, only number');
  }

}

function checkDate(dateArr) {
  dateArr.forEach(input => {
    if(isNumber.test(input.value)) {
      showSucces(input);
    } else if(input.value === '') {
      showError(input, "Can't be blank");
    } else {
      showError(input, 'Wrong format');
    }
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkHasValue([nameInput, numberInput, monthInput, yearInput, cvvInput])

  if(nameInput.value === '') {
    showError(nameInput, 'Name is required')
  } else {
    showSucces(nameInput);
  }
  checkNumbers(numberInput);
  checkDate([monthInput, yearInput, cvvInput]);
});