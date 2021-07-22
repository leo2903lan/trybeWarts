const checkFinal = document.getElementById('agreement');
checkFinal.addEventListener('click', () => {
  const button = document.getElementById('submit-btn');
  if (checkFinal.checked) {
    button.removeAttribute('disabled');
  }
});

const entrar = document.getElementById('entrar');
entrar.addEventListener('click', () => {
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
