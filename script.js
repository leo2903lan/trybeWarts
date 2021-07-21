const inputLogin = document.querySelector(".trybewarts-input-login");
const inputSenha = document.querySelector(".trybewarts-input-senha");
const btn = document.querySelector(".btn");

function loginVerificacao() {
  if (
    inputLogin.value === "tryber@teste.com" &&
    inputSenha.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
}
btn.addEventListener("click", loginVerificacao);