console.log("Sistema iniciado");
console.log("Bem-vindo ao sistema"); // + NOVA LINHA

const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "Ação executada com sucesso!"; // ~ linha alterada
  console.log("Ação executada"); // + NOVA LINHA
});
