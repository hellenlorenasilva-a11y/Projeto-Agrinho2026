function entrar() {

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let confirmar = document.getElementById("confirmar").value;
  const botao = document.getElementById("MeuBotao").value;
  if (!nome) {
    alert("Por favor, digite seu nome.");
    return;
  }
  if (!email || !validateEmail(email)) {
    alert("Por favor, digite um email válido.");
    return;
  }
  if (!senha) {
    alert("Por favor, digite sua senha.");
    return;
  }
  if (confirmar == 0) {
    alert("Confirme sua senha");
    return;
  }
  if (senha != confirmar) {
    alert("As senhas não coincidem.");
    return;
  }
  alert("Cadastro realizado com sucesso!");
  window.location.href = "pagina1.html";
};
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}