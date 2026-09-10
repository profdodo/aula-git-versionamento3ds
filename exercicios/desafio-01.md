Desafio 1 - Investigando alterações
Missão: Abra projeto/script.js, altere duas linhas, adicione uma nova.
Você vai fazer isso:
Seu script.js ATUAL (v1.2.0):jsconsole.log("Sistema iniciado");

const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "Ação executada";
});

Modificado para teste:console.log("Sistema iniciado");
console.log("Bem-vindo ao sistema"); // + NOVA LINHA

const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "Ação executada com sucesso!"; // ~ linha alterada
  console.log("Ação executada"); // + NOVA LINHA
});

Respostas para colar:
1. Qual arquivo foi modificado?
projeto/script.js

2. Quantas linhas foram adicionadas?
2 linhas adicionadas (+) com console.log

3. Uma linha foi removida?
Sim, 1 linha removida (-) a mensagem.textContent = "Ação executada"; foi substituída.

4. Por que git diff é útil antes de fazer commit?
Porque ele mostra exatamente linha por linha o que mudou (+ verde e - vermelho), evitando commitar erro, senha ou console.log esquecido. É a revisão final antes de ir pro histórico.

Comandos:
git status # mostra: modified: projeto/script.js
git diff   # mostra as 2 linhas verdes e 1 vermelha
