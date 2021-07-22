const checkFinal = document.getElementById('agreement');
const button = document.getElementById('submit-btn');

function activeButton() {
  if (checkFinal.checked) {
    button.removeAttribute('disabled');
  }
}
checkFinal.addEventListener('click', activeButton);

const login = document.getElementById('login');
const senha = document.getElementById('senha');
const entrar = document.getElementById('entrar');

function validar() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
  alert('Login ou senha inválidos.');
}
}
entrar.addEventListener('click', validar);
