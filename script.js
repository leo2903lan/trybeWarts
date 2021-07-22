const checkFinal = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

function activeButton() {
  if (checkFinal.checked) {
    button.removeAttribute('disabled');
  }
}
checkFinal.addEventListener('click', activeButton);
