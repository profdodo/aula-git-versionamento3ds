console.log("Laboratório iniciado");

const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "Ação realizada com sucesso";
});

console.log("Sistema pronto para uso");