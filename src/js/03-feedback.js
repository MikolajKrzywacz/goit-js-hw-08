import _ from 'lodash';

const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');
const form = document.querySelector('.feedback-form');
const throttle = _.throttle;

form.addEventListener(
  'input',
  throttle(function () {
    const state = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
  }, 500)
);

// Wypełnij pola formularza danymi z storage
const storedState = localStorage.getItem('feedback-form-state');
if (storedState) {
  const state = JSON.parse(storedState);
  emailInput.value = state.email;
  messageInput.value = state.message;
}

// Wyczyść storage i pola formularza po wysłaniu formularza
form.addEventListener('submit', function (event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });
});

// emailInput.addEventListener(
//   'input',
//   _.throttle(() => {
//     localStorage.setItem('email', `${emailInput.value}`);
//   }, 500)
// );
// messageInput.addEventListener(
//   'input',
//   _.throttle(() => {
//     localStorage.setItem('message', `${messageInput.value}`);
//   }, 500)
// );
// form.addEventListener('submit', e => {
//   e.preventDefault();
// });
// console.log(emailInput);
// console.log(messageInput);
