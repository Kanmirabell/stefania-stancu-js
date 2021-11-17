const button = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove-event');
const queryButton = document.getElementById('query');
const message = document.getElementById('message');

const clickHandler = () => {
  alert('ai apasat butonul');
};

button.addEventListener('click', () => {
  alert('Ai apasat butonul');
});

removeEventButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

queryButton.addEventListener('click', function () {
  const userAge = prompt('Ce varsta ai?');
  const message = `Ai ${userAge} ani.`;

  console.log(message);
  messageParagraph.innerText = message;
});
