const checkFinal = document.getElementById('agreement');
const button = document.getElementById('submit-btn');
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const entrar = document.getElementById('entrar');

checkFinal.addEventListener('click', () => {
  if (checkFinal.checked) {
    button.removeAttribute('disabled');
  }
});

entrar.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
